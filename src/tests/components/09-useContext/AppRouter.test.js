import React from 'react'
import { mount } from 'enzyme'
import { AppRouter } from '../../../components/09-useContext/AppRouter'
import { user } from '../../fixtures/demoTodos'
import { UserContext } from '../../../components/09-useContext/UserContext'


describe('Tests in <AppRouter />', () => {

    const wrapper = mount(
        <UserContext.Provider value={{ user }}>
            <AppRouter />
        </UserContext.Provider>
    )

    test('should render <AppRouter /> correctly', () => {

        expect(wrapper).toMatchSnapshot()

    })


})
