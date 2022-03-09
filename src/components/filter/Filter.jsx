import React from "react";
import cls from './filter.module.scss'

let Filter = (props) => {
    
let filterAirlinesMachine = (choosenFlights) => {
   
    let allAirlines = choosenFlights.map(el => el.carrier.caption)
    let airlines = [...new Set(allAirlines)]
    let airlinesObj = []
    airlines.forEach(el => airlinesObj.push({name: el, checked: true }))
    props.setAirlines(airlinesObj)
}


    if (props.airLines.length === 0) {
        filterAirlinesMachine(props.flightsBody)
    }

    let costUp = React.createRef()
    let costDown = React.createRef()
    let travelTime = React.createRef()

    let changeSort = (sort) => {
        
        let value = sort.current.value

        if (value === 'costUp') {
            let result = props.filteredData.sort((a, b) => {
                return  (+a.price.total.amount - +b.price.total.amount)
            })
            props.setFilteredData(result)
        }
        else if (value === 'costDown') {
            let result = props.filteredData.sort((a, b) => {
                return (+b.price.total.amount - +a.price.total.amount)
            })
            props.setFilteredData(result)
        }
        else if (value === 'travelTime') {
            let result = props.filteredData.sort((a, b) => {
                return(+a.legs[0].duration + +a.legs[1].duration) - ((+b.legs[0].duration + +b.legs[1].duration))
            })
            props.setFilteredData(result)
        }
      
        
        
        props.setSort(value)
    }


    let oneChange = React.createRef()
    let noChange = React.createRef()
    
    let filterMachine = () => {
        if (props.filterBy === 'oneChange') {
            let result = props.flightsBody.filter(el => {
                if( (el.legs[0].segments.length !== 1) && (el.legs[1].segments.length == 1) ) {
                    return el
                }
                else if( (el.legs[0].segments.length == 1) && (el.legs[1].segments.length !== 1) ) {
                    return el
                }
            })
            props.setFilteredData(result)
            filterAirlinesMachine(result)
        }
        else if (props.filterBy === 'noChange') {
            let result = props.flightsBody.filter(el => {
                if ((el.legs[0].segments.length === 1) && (el.legs[1].segments.length === 1)) {
                    return el
                }
            })
            props.setFilteredData(result)
            filterAirlinesMachine(result)
        }
    }

    let changeFilter = (filter) => {
        let value = filter.current.value
        
        props.setFilter(value)
        console.log(props.filterBy)
        filterMachine()
    }

    
    let handleCheckBox = (event) => {

        let result = []
        props.airLines.forEach(el => {
            if (event.target.value === el.name) {
                if(el.checked === true) {
                    el.checked = false
                }
                else {
                    el.checked = true
                }
               result.push(el)
            }
            else{
                result.push(el)
            }
        }
        )
        props.setAirlines(result)

        let filter = []
        if (props.sortBy.length === 0) {
            props.flightsBody.filter(el => {
                props.airLines.map(line => {
                    if (line.checked && (el.carrier.caption == line.name)){
                        filter.push(el)
                    }
                })
            })
        }
        else {
            filterMachine()
            props.filteredData.filter(el => {
                props.airLines.map(line => {
                    if (line.checked && (el.carrier.caption == line.name)){
                        filter.push(el)
                    }
                })
            })

        }   
        console.log(filter)
        props.setFilteredData(filter)
    }

    return (
        <div className={cls.filterSection} >

            
            <div className={cls.sortBy}>
                <p>Сортировать</p>
                <div id={cls.sortBy}>
                   <label onClick={() => changeSort(costUp)}><input type="radio" ref={costUp} value="costUp" name="sort"/>-по возрастанию цены</label> 
                   <label onClick={() => changeSort(costDown)}><input type="radio" ref={costDown} value="costDown" name="sort"/>-по убыванию цены</label> 
                   <label onClick={() => changeSort(travelTime)}><input type="radio" ref={travelTime} value="travelTime" name="sort"/>-по времени в пути</label> 
                 </div>
            </div>
                 
            <div className={cls.filterBy}>
                <p>Фильтровать</p>
                <div id={cls.filterBy}>
                    <label onClick={() => (changeFilter(oneChange)) }><input type="radio" ref={oneChange} value="oneChange" name="filter"/>- 1 пересадка</label> 
                   <label onClick={() => (changeFilter(noChange))}><input type="radio" ref={noChange} value="noChange" name="filter"/>- без пересадок</label> 
                </div>
            </div>

            <div className={cls.airlinesFilter}>
                <p>Доступные авиалинии: </p>
                {props.airLines.map(el =>   <label>
                    <input type="checkbox" checked={el.checked ? 'checked' : null} onChange={handleCheckBox}  value={el.name} /> {el.name}

                    </label>
                )}
            </div>
        </div>
    )
}

export default Filter