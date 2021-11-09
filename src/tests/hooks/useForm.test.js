import { act, renderHook } from "@testing-library/react-hooks"
import { useForm } from "../../hooks/useForm"

describe('Tests in useForm.js', () => {

    const initialForm = {
        name: 'Fede',
        email: 'fede@fede.com'
    }

    test('Should return a dafault form', () => {

        const { result } = renderHook(() => useForm(initialForm))

        const [formValues, handleInputChange, reset] = result.current

        expect(formValues).toEqual(initialForm)
        expect(typeof handleInputChange).toBe('function')
        expect(typeof reset).toBe('function')
    })

    test('Should change the value of the form', () => {

        const { result } = renderHook(() => useForm(initialForm))

        const [, handleInputChange] = result.current



        act(() => handleInputChange({
            target: {
                name: 'name',
                value: 'pepe'
            }
        }))
        const [formValues] = result.current

        expect(formValues).toEqual({ name: 'pepe', email: 'fede@fede.com' })
        expect(formValues).toEqual({ ...initialForm, name: 'pepe' })
    })

    test('Should reset the form with reset function', () => {

        const { result } = renderHook(() => useForm(initialForm))

        const [, handleInputChange, reset] = result.current



        act(() => {
            handleInputChange({ target: { name: 'name', value: 'pepe' } })
            reset()
        }
        )
        const [formValues] = result.current

        expect(formValues).toEqual(initialForm)
    })



})
