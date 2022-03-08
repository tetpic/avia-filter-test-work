import { connect } from "react-redux";
import Filter from "./Filter";
import {setSortByActionCreator, setFilterByActionCreator, setAirlinesActionCreator, setAirlinesFilterActionCretor} from '../../redux/filter-reducer'
import {setFilteredDataActionCreator} from '../../redux/results-reducer'
import {flightsBody} from '../search/SearchContainer'

// console.log(flightsBody)



let mapStateToProps  = (state) => {
    return {

        sortBy: state.filterReducer.sortBy,
        filterBy: state.filterReducer.filterBy,
        flightsBody,
        filteredData: state.resultReducer.filteredData,
        airLines: state.filterReducer.airLines,
        filteredAirlines: state.filterReducer.filteredAirlines
        

    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setSort: (value) => {
            dispatch(setSortByActionCreator(value))
        },
        setFilter: (value) => {
            dispatch(setFilterByActionCreator(value))
        },
        setFilteredData: (filteredData) => {
            dispatch(setFilteredDataActionCreator(filteredData))
        },
        setAirlines: (airlines) => {
            dispatch(setAirlinesActionCreator(airlines))
        },
        // setAirlinesFilter: (filteredAirlines) => {
        //     dispatch(setAirlinesFilterActionCretor(filteredAirlines))
        // }
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter)