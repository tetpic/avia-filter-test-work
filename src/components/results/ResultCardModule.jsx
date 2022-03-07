import React from "react";
import cls from "./results.module.scss"

let CardModule = () => {
    return (
        <div >
        <p>dep city airport (code) &#10141; arr city airport (code)</p>
        <div className={cls.itemCardModule}>
            <p>dep time date</p>
            <p>flight time</p>
            <p>arr date time</p>
        </div>
    </div>
    )
}

export default CardModule