const SHOW_RESULTS = 'SHOW_RESULTS'
const DEPARTURE_INPUT_LISTENER = 'DEPARTURE_INPUT_LISTENER'
const ARRIVAL_INPUT_LISTENER = 'ARRIVAL_INPUT_LISTENER'
const SET_DEP_CITIES = 'SET_DEP_CITIES'
const SET_ARR_CITIES = 'SET_ARR_CITIES'


let initialstate = {
    tickets: [],
    depInput: '',
    arrivalInput: '',
    ticketsIndexes: [],
    departureTickets: [],
    arriveTickets: [],
  

}


const searchReducer =(state = initialstate, action) => {
    switch(action.type) {
        case SHOW_RESULTS : 
           return {...state, tickets: action.tickets,
        }
        case DEPARTURE_INPUT_LISTENER : {
            return {...state, depInput: action.newText }
        }
        case ARRIVAL_INPUT_LISTENER : {
            return {...state, arrivalInput: action.newText }
        }
        case SET_DEP_CITIES: {
            return {...state, departureTickets: action.departureTickets }
        }
        case SET_ARR_CITIES: {
            return {...state, arriveTickets: action.arriveTickets }
        }
        default: {
            return state
        }
    }
}

export default searchReducer

export const startSearchActionCreator = (tickets) => {
    return {
        type: SHOW_RESULTS, tickets
    }
}

export const setDepartureTicketsActionCreator = (departureTickets) => {
    return {
        type: SET_DEP_CITIES, departureTickets
    }
}
export const setArriveTicketsActionCreator = (arriveTickets) => {
    return {
        type: SET_ARR_CITIES, arriveTickets
    }
}

export const departureInputActionCreator = (text, ) => {
    return {
        type: DEPARTURE_INPUT_LISTENER, newText: text, 
    }
}
export const arrivalInputActionCreator = (text) => {
    return {
        type: ARRIVAL_INPUT_LISTENER, newText: text
    }
}