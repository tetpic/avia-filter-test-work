import React from "react";
import cls from "./results.module.scss"

let splitTime = (el) => {
    let time = el.split('T').reverse()
    // return time[0]
    let normalTime = time[0].split(':', 2)
    return (normalTime[0] + ':' + normalTime[1])

}

let splitDate =(el) => {
    let date = el.split('T', 1)
    return [date]
}

let getTime = (el) => {
    let hours = Math.floor(+el/60)
    let minutes = +el%60
    return [hours, minutes]
}

export let CardModule1 = (props) => {
    // console.log('cd1',props.el.segments[0])
    return (
        <div >
           
        <p>
        {props.el.segments[0].departureCity ? props.el.segments[0].departureCity.caption : undefined } &nbsp;  &nbsp;
            {props.el.segments[0].departureAirport.caption} &nbsp; &nbsp;
            <span className={cls.blue}>( {props.el.segments[0].departureAirport.uid})</span> &nbsp; &nbsp;

            &#10141; &nbsp; &nbsp;
            {props.el.segments[0].arrivalCity ? props.el.segments[0].arrivalCity.caption : undefined } &nbsp; &nbsp;
            {props.el.segments[0].arrivalAirport.caption} &nbsp; &nbsp;
            <span className={cls.blue}> ({props.el.segments[0].arrivalAirport.uid})</span> &nbsp; &nbsp;

        </p>
        <div className={cls.itemCardModule}>
           
            <p>{splitTime(props.el.segments[0].departureDate)} {splitDate(props.el.segments[0].departureDate)}</p>
            <p className={cls.timeBlock}>{getTime(props.el.duration)[0]}ч. {getTime(props.el.duration)[1]} мин.</p>
            <p>{splitTime(props.el.segments[0].arrivalDate)} {splitDate(props.el.segments[0].arrivalDate)}</p>
        </div>
    </div>
    )
}
// export default CardModule

export let CardModule2 = (props) => {
    // console.log('cd2',props.el.segments[0])
    return(
        <div >
           
        <p>
            {props.el.segments[0].departureCity ? props.el.segments[0].departureCity.caption : undefined } &nbsp; &nbsp;
            {props.el.segments[0].departureAirport.caption}&nbsp; &nbsp;
            <span className={cls.blue}>({props.el.segments[0].departureAirport.uid})</span>&nbsp; &nbsp;
            
             &#10141;  &nbsp; &nbsp;
             {props.el.segments[1].arrivalCity ? props.el.segments[1].arrivalCity.caption : undefined } &nbsp; &nbsp;
            {props.el.segments[1].arrivalAirport.caption} &nbsp; &nbsp;
            <span className={cls.blue}>({props.el.segments[1].arrivalAirport.uid})</span> &nbsp; &nbsp;
            
        </p>
        <div className={cls.itemCardModule}>
            <p>{splitTime(props.el.segments[0].departureDate)} {splitDate(props.el.segments[0].departureDate)}</p>
            <p className={cls.timeBlock} >{getTime(props.el.duration)[0]}ч. {getTime(props.el.duration)[1]} мин.</p>
            <p>{splitTime(props.el.segments[1].arrivalDate)} {splitDate(props.el.segments[1].arrivalDate)}</p>
        </div>
    </div>
    )
}

