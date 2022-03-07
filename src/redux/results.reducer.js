const TEST_ACTION = 'TEST_ACTION'

let initialstate = {
    // test: [1, 2, 3],
    // depInput: '23',
    // arrivalInput: '42',
    results: ['test1', 'test2']

}


const resultReducer =(state = initialstate, action) => {
    switch(action.type) {
        case TEST_ACTION: {
            return null
        }
        default: {
            return state
        }
    }

}

export default resultReducer

export const startSearchActionCreator = () => {
    return {
        type: TEST_ACTION, 
    }
}

