import React from 'react'
import { shallow } from 'enzyme'
import { RealExampleRef } from "../../../components/04-useRef/RealExampleRef"


describe('Tests in <RealExample />', () => {

    const wrapper = shallow(<RealExampleRef />)

    test('should render <RealExample /> correctly', () => {

        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false)

    })

    test('should render the component <MultipleCustomHooks />', () => {

        wrapper.find('button').simulate('click')

        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true)

    })

})
