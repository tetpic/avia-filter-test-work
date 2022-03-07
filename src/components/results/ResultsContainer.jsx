import {connect} from 'react-redux'
import Results from './Results'
import {flightsBody} from '../search/SearchContainer'







// let resultFunction = () => {
//     let result  = ticketsArr.filter(el => {
//         el.departureCity.caption === this.props.depInput
//     })
//     console.log(result)
//     return result
// }





let mapStateToProps = (state) => {
    return {
        departureTickets: state.searchReducer.departureTickets,
        arriveTickets: state.searchReducer.arriveTickets,
        tickets: state.searchReducer.tickets,
        depInput: state.searchReducer.depInput,
        sortBy: state.filterReducer.sortBy,
        filterBy: state.filterReducer.filterBy,
        flightsBody
      

    }
}

let mapDispatchToProps = (dispatch) => {
    return {
    

    }
}

export default connect(mapStateToProps, mapDispatchToProps )(Results)