import { connect } from "react-redux";
import Filter from "./Filter";
import {setSortByActionCreator, setFilterByActionCreator, setAirlinesActionCreator, } from '../../redux/filter-reducer'
import {setFilteredDataActionCreator} from '../../redux/results-reducer'
import flights from '../../flights.json'



export const flightsBody = []

flights.result.flights.map(el => flightsBody.push(el.flight))

let mapStateToProps  = (state) => {
    return {
        sortBy: state.filterReducer.sortBy,
        filterBy: state.filterReducer.filterBy,
        flightsBody,
        filteredData: state.resultReducer.filteredData,
        airLines: state.filterReducer.airLines,
        filteredAirlines: state.filterReducer.filteredAirlines,
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter)