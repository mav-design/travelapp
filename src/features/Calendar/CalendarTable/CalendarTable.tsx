import { useAppSelector,useAppDispatch } from "@app/hooks";
import styles from './calendar.module.css'
import { selectDate } from "@slices/date/dateSlice";
import { setDate,setMonth,setYear } from "@slices/date/dateSlice";

export function CalendarTable(){
    const date = useAppSelector(selectDate);
const daysInMonth = new Date(date.getFullYear(),date.getMonth(),0).getDate()
    const dispatch = useAppDispatch()
    return(<div onClick={()=>dispatch(setDate(3))}>{daysInMonth}</div>)
}