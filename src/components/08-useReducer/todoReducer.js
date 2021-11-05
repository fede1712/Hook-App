export const todoReducer = (state = [], action) => {

    switch (action.type) {
        case 'add':
            return [...state, action.payload]

        case 'delete':
            return state.filter(elm => elm.id !== action.payload)
        case 'done':
            return state.map(elm => (elm.id === action.payload ? { ...elm, done: !elm.done } : elm))
        default:
            return state;
    }

}