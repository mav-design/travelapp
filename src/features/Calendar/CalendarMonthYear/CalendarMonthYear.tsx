import { useAppSelector,useAppDispatch } from "@app/hooks";
import styles from './CalendarMonthYear.module.css'
import { selectDate } from "@slices/date/dateSlice";


export function CalendarMonthYear(){
    const date = useAppSelector(selectDate);
    const dispatch = useAppDispatch()
    
    return(
        <div className={styles.monthYear}>
            <span className={styles.Month}>{date.getMonth()}</span ><span className={styles.year}>{date.getFullYear()}</span>
        </div>
    )
}