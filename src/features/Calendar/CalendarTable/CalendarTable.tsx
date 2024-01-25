import { useAppSelector,useAppDispatch } from "@app/hooks";
import styles from './calendar.module.css'
import { selectDate } from "@slices/date/dateSlice";
import { setDate} from "@slices/date/dateSlice";

export function CalendarTable(){
    const date = new Date(useAppSelector(selectDate));
    const addMonth = 2.628e+9
    const monthStartDay = new Date(date.getFullYear(),date.getMonth(),1).getDay()
    console.log(monthStartDay);
const daysInMonth = new Date(date.getFullYear(),date.getMonth(),0).getDate()
    const dispatch = useAppDispatch()
    return(<div onClick={()=>dispatch(setDate(date.getTime()+addMonth))}>{daysInMonth}</div>)
}