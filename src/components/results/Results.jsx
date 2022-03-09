import React from "react";
import cls from "./results.module.scss"
import {CardModule1, CardModule2} from "./ResultCardModule"



let Results = (props) => {

    if (props.filteredData.length == 0) {
        props.setFilteredData(props.flightsBody)
    }

    return (
       
        <div className={cls.resultsSection}>
            

            <div className={cls.founded}>найдено: {props.filteredData.length} рейсов</div>

            {props.filteredData.map(el => (
            
            <div className={cls.resultItem}>
                <div className={cls.itemHeader}>
                    <img src={`./${el.carrier.uid}.png`} alt="airline-logo" />
                    <div className={cls.itemHeaderDesc}>
                        <p>{el.price.total.amount}{el.price.total.currency}</p>
                        <p className={cls.itemHeaderCostDesc}>Стоимость для одного взрослого пассажира</p>
                    </div>
                </div>
                <div className={cls.itemBody}>
             
                    {el.legs[0].segments[1] ?  <CardModule2 el={el.legs[0]}/> : <CardModule1 el={el.legs[0]}/> }
                    <div className={cls.transfer}>{el.legs[0].segments[1] ? '1 пересадка' : undefined}</div>
                
                
                    <p>Рейс выполняет: {el.legs[0].segments[0].airline.caption}</p>
                
                    <div className={cls.splitter}></div>
                
                
                    {el.legs[1].segments[1] ?  <CardModule2 el={el.legs[1]}/> : <CardModule1 el={el.legs[1]}/> }
                    <div className={cls.transfer}>{el.legs[1].segments[1] ? '1 пересадка' : undefined}</div>
                    <p>Рейс выполняет: {el.legs[1].segments[0].airline.caption}</p>
                        
                    <button className={cls.choiceButton}>ВЫБРАТЬ</button>
                </div>
            </div>
            )) }
        </div>
    )
}
            
            

export default Results