import React from 'react'
import { shallow } from 'enzyme'

import { MultipleCustomHooks } from "../../../components/03-Examples/MultipleCustomHooks"
import { useFetch } from '../../../hooks/useFetch'
jest.mock('../../../hooks/useFetch')

describe('Tests in <MultipleCustomHooks />', () => {



    test('should render <MultipleCustomHooks /> correctly', () => {

        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        })

        const wrapper = shallow(<MultipleCustomHooks />)

        expect(wrapper).toMatchSnapshot()

    })

    test('should show the info', () => {

        useFetch.mockReturnValue({
            data: [{ author: 'Fede', quote: 'Hola mundo' }],
            loading: false,
            error: null
        })

        const wrapper = shallow(<MultipleCustomHooks />)

        expect(wrapper.find('.alert').exists()).toBe(false)
        expect(wrapper.find('.mb-0').text().trim()).toBe('Hola mundo')
        expect(wrapper.find('footer').text().trim()).toBe('Fede')
    })



})
