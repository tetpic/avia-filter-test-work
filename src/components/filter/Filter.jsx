import React from "react";
import cls from './filter.module.scss'

let Filter = (props) => {
    // debugger

    let costUp = React.createRef()
    
    let costDown = React.createRef()
    let travelTime = React.createRef()
    let changeSort = (sort) => {
        let value = sort.current.value
        props.setSort(value)
    }


    let oneChange = React.createRef()
    let noChange = React.createRef()

    let changeFilter = (filter) => {
        let value = filter.current.value
        props.setFilter(value)
    }

    return (
        <div className={cls.filterSection} >

            
            <form className={cls.sortBy}>
                <p>Сортировать</p>
                <div id={cls.sortBy}>
                   <label onClick={() => changeSort(costUp)}><input type="radio" ref={costUp} value="costUp" name="sort"/>-по возрастанию цены</label> 
                   <label onClick={() => changeSort(costDown)}><input type="radio" ref={costDown} value="costDown" name="sort"/>-по убыванию цены</label> 
                   <label onClick={() => changeSort(travelTime)}><input type="radio" ref={travelTime} value="travelTime" name="sort"/>-по времени в пути</label> 
                 </div>
            </form>
                 
            <form className={cls.filterBy}>
                <p>Фильтровать</p>
                <div id={cls.filterBy}>
                    <label onClick={() => changeFilter(oneChange) }><input type="radio" ref={oneChange} value="oneChange" name="filter"/>- 1 пересадка</label> 
                   <label onClick={() => changeFilter(noChange)}><input type="radio" ref={noChange} value="noChange" name="filter"/>- без пересадок</label> 
                </div>
            </form>

        </div>
    )
}

export default Filter