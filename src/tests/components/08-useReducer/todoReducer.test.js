import { todoReducer } from "../../../components/08-useReducer/todoReducer"
import { demoTodos, newTodo } from "../../fixtures/demoTodos"



describe('Tests in todoReducer', () => {

    test('should return default state', () => {

        const state = todoReducer(demoTodos, {})
        expect(state).toEqual(demoTodos)

    })

    test('should add a TODO', () => {

        const action = { type: 'add', payload: newTodo }
        const state = todoReducer(demoTodos, action)

        expect(state.length).toBe(3)
        expect(state).toEqual([...demoTodos, newTodo])

    })

    test('should delete a TODO', () => {

        const action = { type: 'delete', payload: 1 }
        const state = todoReducer(demoTodos, action)

        expect(state.length).toBe(1)
        expect(state).toEqual([demoTodos[1]])


    })

    test('should toggle a TODO', () => {

        const action = { type: 'done', payload: 1 }
        const state = todoReducer(demoTodos, action)

        expect(state[0].done).toBe(true)
        expect(state[1].done).toBe(false)
        expect(state[1]).toEqual(demoTodos[1])

    })



})
