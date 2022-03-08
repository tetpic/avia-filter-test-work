import {connect} from 'react-redux'
import {startSearchActionCreator, arrivalInputActionCreator, departureInputActionCreator,setDepartureTicketsActionCreator, setArriveTicketsActionCreator} from '../../redux/search-reducer'
import Search from '../search/Search'
import flights from '../../flights.json'



export const flightsBody = []

flights.result.flights.map(el => flightsBody.push(el.flight))
// =============достаем все перелеты из общего стейта==============
// function pushTickets() {
//     flightsBody.forEach((el, index) => {
        // console.log(el.flight.legs[1].segments)
        
        // ticketsArr.push({...el.flight.legs[0].segments[0], id: ++index}, 
        //     {...el.flight.legs[0].segments[1], id: index}, 
        //     {...el.flight.legs[1].segments[0], id: index}, 
        //     {...el.flight.legs[1].segments[1], id: index})
        // ticketsArr.push({...el.flight.legs[0].segments[0], }, 
        //     {...el.flight.legs[0].segments[1], }, 
        //     {...el.flight.legs[1].segments[0], }, 
        //     {...el.flight.legs[1].segments[1], })
//     })
// }
// pushTickets()









let mapStateToProps = (state) => {
    return {
        // test: state.searchReducer.test,
        depInput: state.searchReducer.depInput,
        arrivalInput: state.searchReducer.arrivalInput,
        departureTickets: state.searchReducer.departureTickets,
        arriveTickets: state.searchReducer.arriveTickets,
        flightsBody,
        // ticketsArr
        // ticketsArr,
        // departureCities: state.searchReducer.departureCities,
        // arriveCities: state.searchReducer.arriveCities,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        testButton: (filteredTicketsArr) => {
            dispatch(startSearchActionCreator(filteredTicketsArr))
        },
        inputDeparture: (text) => {
            dispatch(departureInputActionCreator(text))
        },
        inputArrive: (text) => {
            dispatch(arrivalInputActionCreator(text))
        },
        setDepCities: (arr) => {
            dispatch(setDepartureTicketsActionCreator(arr))
        },
        setArrCities: (arr) => {
            dispatch(setArriveTicketsActionCreator(arr))
        }


    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)