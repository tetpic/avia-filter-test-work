import {connect} from 'react-redux'
import Results from './Results'
import {flightsBody} from '../search/SearchContainer'
import {setFilteredDataActionCreator} from '../../redux/results-reducer'







// let resultFunction = () => {
//     let result  = ticketsArr.filter(el => {
//         el.departureCity.caption === this.props.depInput
//     })
//     console.log(result)
//     return result
// }





let mapStateToProps = (state) => {
    console.log(state)
    return {
        filteredData: state.resultReducer.filteredData,
        flightsBody,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setFilteredData: (filteredData) => {
            dispatch(setFilteredDataActionCreator(filteredData))
        }

        
    

    }
}

export default connect(mapStateToProps, mapDispatchToProps )(Results)