import React from 'react'
import { shallow } from 'enzyme'
import { HookApp } from "../HookApp"



describe('Tests in <HookApp />', () => {
    test('should show <HookApp /> correctly', () => {

        const wrapper = shallow(<HookApp />)
        expect(wrapper).toMatchSnapshot()

    })
})
