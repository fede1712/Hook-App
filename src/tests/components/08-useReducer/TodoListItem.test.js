import React from 'react'
import { shallow } from 'enzyme'
import { TodoListItem } from '../../../components/08-useReducer/TodoListItem'
import { demoTodos } from '../../fixtures/demoTodos'

describe('Tests in <TodoListItem />', () => {
    const handleDelete = jest.fn()
    const handleToggle = jest.fn()

    const wrapper = shallow(<TodoListItem elm={demoTodos[0]} handleDelete={handleDelete} handleToggle={handleToggle} />)

    test('Should render <TodoListItem /> correctly', () => {

        expect(wrapper).toMatchSnapshot()

    })
    test('Should call delete function', () => {

        wrapper.find('button').simulate('click')

        expect(handleDelete).toHaveBeenCalled()
        expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id)

    })

    test('Should call handleToggle function', () => {

        wrapper.find('p').simulate('click')

        expect(handleToggle).toHaveBeenCalled()
        expect(handleToggle).toHaveBeenCalledWith(demoTodos[0].id)

    })

    test('should have complete className if TODO.id = done', () => {

        const todo = demoTodos[0]

        todo.done = true

        const wrapper = shallow(<TodoListItem elm={todo} />)

        expect(wrapper.find('p').hasClass('complete')).toBe(true)



    })

})