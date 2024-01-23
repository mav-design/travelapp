import { useAppSelector,useAppDispatch } from "@app/hooks";
import { setDate,setMonth,setYear,selectDate} from "@slices/date/dateSlice";
import styles from './calendar.module.css'
import { useState } from "react";

export function Calendar(){
    const [visible, setVisible] = useState(true);
    const date = useAppSelector(selectDate);
    const dispatch = useAppDispatch();
    const previousMonth = new Date(date.getFullYear(),date.getMonth()-1,date.getDate())
    const nextMonth = new Date(date.getFullYear(),date.getMonth()+1,date.getDate())
    
    return(
        <div className={styles.calendarBody}>
            <div className={styles.header} onClick={()=>setVisible(!visible)}>{visible?'Choose Date':'DATE'}</div>

        </div>
    )
}