import React from 'react'
import { mount } from 'enzyme'

import { HomeScreen } from "../../../components/09-useContext/HomeScreen"
import { UserContext } from '../../../components/09-useContext/UserContext'
import { user } from '../../fixtures/demoTodos'

describe('Tests in <HomeScreen />', () => {


    const wrapper = mount(
        <UserContext.Provider value={{ user }}>
            <HomeScreen />
        </UserContext.Provider>
    )

    test('should render <HomeScreen /> correctly', () => {

        expect(wrapper).toMatchSnapshot()


    })


})
