import {connect} from 'react-redux'
import Results from './Results'
import {flightsBody} from '../filter/FilterContainer'
import {setFilteredDataActionCreator} from '../../redux/results-reducer'


let mapStateToProps = (state) => {
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