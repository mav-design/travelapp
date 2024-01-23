import { useAppSelector,useAppDispatch } from "@app/hooks";
import styles from './calendar.module.css'
import { useEffect, useState } from "react";
import { selectDate } from "@slices/date/dateSlice";
import { CalendarMonthYear } from "./CalendarMonthYear/CalendarMonthYear";
import { CalendarTable } from "./CalendarTable/CalendarTable";


export function Calendar(){
    const [visible, setVisible] = useState(true);
    const date = useAppSelector(selectDate);
    const dispatch = useAppDispatch()
    const previousMonth = new Date(date.getFullYear(),date.getMonth()-1,date.getDate())
    const nextMonth = new Date(date.getFullYear(),date.getMonth()+1,date.getDate())
   
    return(<>
        <div className={styles.calendarBody}>
            <div className={styles.header} onClick={()=>setVisible(!visible)}>
                {visible?(<><CalendarMonthYear /><CalendarTable /></>):'DATE'}

                </div>

        </div></>
    )
}