import { connect } from "react-redux";
import Filter from "./Filter";
import {setSortByActionCreator, setFilterByActionCreator} from '../../redux/filter-reducer'
import {flightsBody} from '../search/SearchContainer'

// console.log(flightsBody)

let mapStateToProps  = (state) => {
    return {

        sortBy: state.filterReducer.sortBy,
        filterBy: state.filterReducer.filterBy

    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setSort: (value) => {
            dispatch(setSortByActionCreator(value))
        },
        setFilter: (value) => {
            dispatch(setFilterByActionCreator(value))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter)