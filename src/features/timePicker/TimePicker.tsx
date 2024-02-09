import {  ReactElement } from 'react'
import styles from './time-picker.module.css'

type Props={
    className?:string,
    times:[] |undefined
}
export function TimePicker({times}:Props):ReactElement<Props>{
console.log(times);

    return (
        <div className={styles.timePickerBody}>
            {times?.map(time=>(<li key={Math.random()}>{time}</li>))}
        </div>
    )
}