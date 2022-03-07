import React from "react";
import cls from "./search.module.scss"



let Search = (props) => {
    // debugger
    
    let arriveRef = React.createRef()
    let changeArriveInput = () => {
        let text = arriveRef.current.value
        props.inputArrive(text)
    }
    let departureRef = React.createRef()
    let changeDepartureInput = () => {
        let text = departureRef.current.value
        props.inputDeparture(text)
    }

    let departureResult = () => {
        let result = props.flightsBody.map(el => {
            
            if (el.flight.legs[0].segments[0].departureCity.caption.toLowerCase().includes(props.depInput.toLowerCase())) {
                
                return el
            }
           
            
           
        })
            console.log(result)
            props.setDepCities(result)
    }
      
        


    let arrivalResult = () => {
        // debugger
        let result = props.flightsBody.map((el) => {
            if (el.flight.legs[0].segments.length == 1) {
                    
               if(el.flight.legs[0].segments[0].arrivalCity.caption.toLowerCase().includes(props.arrivalInput.toLowerCase()) ) {
               
                    return el
                }
            
            } else if (el.flight.legs[0].segments.length == 2) {
                    // debugger
               

                
                if(el.flight.legs[0].segments[1].arrivalAirport.caption.toLowerCase().includes(props.arrivalInput.toLowerCase())) {
                  
                    return el
                }
            }
           
        })
       
        props.setArrCities(result)
    }

    let allTicketsResult = () => {
        // debugger
        if (props.departureTickets&&props.arriveTickets) {
            let find = props.departureTickets.filter(el => 
                props.arriveTickets.includes(el)
            )
            let result = find.reduce((result, item) => {
                return result.includes(item) ? result : [...result, item];
            }, [])
           
            props.testButton(result)
        }
    }




    return (
        <div className={cls.searchSection}>
            <input type="text" ref={departureRef} 
                placeholder="Departures" 
                value={props.depInput.toLowerCase()}
                 onChange={changeDepartureInput} 
                 onBlur={() => departureResult()}
            />
            <input type="text" 
                ref={arriveRef} 
                placeholder="Arrive" 
                value={props.arrivalInput.toLowerCase()}
                 onChange={changeArriveInput} 
                 onBlur={() => arrivalResult()}
             />
            <button onClick={() => allTicketsResult()} >Search</button>
           
       </div>
    )
}

export default Search