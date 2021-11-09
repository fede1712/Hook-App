import { act, renderHook } from '@testing-library/react-hooks'
import { useCounter } from '../../hooks/useCounter'

describe('Tests in useCounter', () => {

    test('Should return defaults values', () => {

        const { result } = renderHook(() => useCounter())

        expect(result.current.counter).toBe(0)
        expect(typeof result.current.counter).toBe('number')
        expect(typeof result.current.add).toBe('function')
        expect(typeof result.current.substract).toBe('function')
        expect(typeof result.current.reset).toBe('function')

    })

    test('The counter should have a default value of 100', () => {

        const { result } = renderHook(() => useCounter(100))

        expect(result.current.counter).toBe(100)

    })

    test('The add function should add 1', () => {
        const { result } = renderHook(() => useCounter(100))
        const { add } = result.current

        act(() => {
            add()
        })

        const { counter } = result.current

        expect(counter).toBe(101)
    })

    test('The substract function should substract 1', () => {
        const { result } = renderHook(() => useCounter(100))
        const { substract } = result.current

        act(() => substract())
        const { counter } = result.current

        expect(counter).toBe(99)
    })

    test('The reset function should set the default value', () => {
        const { result } = renderHook(() => useCounter(100))
        const { add, reset } = result.current

        act(() => {
            add()
            reset()
        })

        const { counter } = result.current

        expect(counter).toBe(100)
    })
})
