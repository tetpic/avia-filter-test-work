import React from "react";
import cls from "./results.module.scss"
import CardModule from "./ResultCardModule"

let Results = (props) => {

    

     
    // debugger
    return (
       
        <div className={cls.resultsSection}>
            <div>найдено: {props.tickets.length} рейсов</div>

            {props.tickets.map(el => (
            
            <div className={cls.resultItem}>
                <div className={cls.itemHeader}>
                    <img src="" alt="airline-logo" />
                    <div>
                        <p>price</p>
                        <p>adult cost</p>
                    </div>
                </div>
                <div className={cls.itemBody}>
                <div >
                    <p>{el.departureCity.caption} 
                    {el.departureAirport.caption} 
                    {el.departureAirport.uid} &#10141; 
                    {el.arrivalCity.caption} 
                    {el.arrivalAirport.caption} 
                    {el.arrivalAirport.uid}</p>
                    <div className={cls.itemCardModule}>
                        <p>{el.departureDate}</p>
                        <p>{el.travelDuration}минут</p>
                        <p>{el.arrivalDate}</p>
                    </div>
                </div>

                {/* <CardModule/> */}
                <p>Рейс выполняют: {el.airline.caption}</p>
                <div className={cls.transfer}></div>

                {/* <CardModule/>
                <p>Рейс выполняют: {el.airline.caption}</p>
                </div> */}
                    
                <button className={cls.choiceButton}>ВЫБРАТЬ</button>
                </div>
            </div>



)) }
</div>
        

       
    )
}
            
            

export default Results