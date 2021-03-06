import React from 'react'
import { shallow, mount } from 'enzyme'
import { act } from '@testing-library/react'
import { TodoApp } from '../../../components/08-useReducer/TodoApp'
import { demoTodos } from '../../fixtures/demoTodos'



describe('Tests in <TodoApp />', () => {

    const wrapper = shallow(<TodoApp />)

    Storage.prototype.setItem = jest.fn(() => { })

    test('should render <TodoApp /> correctly', () => {

        expect(wrapper).toMatchSnapshot()

    })

    test('should add a todo', () => {

        const wrapper = mount(<TodoApp />)

        act(() => {

            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0])
            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[1])
        })

        expect(wrapper.find('h1').text().trim()).toBe(`TODO App (2)`)
        expect(localStorage.setItem).toHaveBeenCalledTimes(2)
    })

    test('should delete a todo', () => {

        wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0])
        wrapper.find('TodoList').prop('handleDelete')(demoTodos[0].id)

        expect(wrapper.find('h1').text().trim()).toBe(`TODO App (0)`)
    })
})
