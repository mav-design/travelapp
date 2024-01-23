import { useAppSelector,useAppDispatch } from "@app/hooks";
import styles from './calendar.module.css'
import { useState } from "react";
import { selectDate } from "@slices/date/dateSlice";


export function Calendar(){
    const [visible, setVisible] = useState(true);
    const date = useAppSelector(selectDate);
    const dispatch = useAppDispatch
    const previousMonth = new Date(date.getFullYear(),date.getMonth()-1,date.getDate())
    const nextMonth = new Date(date.getFullYear(),date.getMonth()+1,date.getDate())
    
    return(
        <div className={styles.calendarBody}>
            <div className={styles.header} onClick={()=>setVisible(!visible)}>{visible?'Choose Date':'DATE'}</div>

        </div>
    )
}