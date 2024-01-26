import { useAppSelector,useAppDispatch } from "@app/hooks";
import styles from './CalendarTable.module.css'
import { selectDate } from "@slices/date/dateSlice";
import { setDate} from "@slices/date/dateSlice";
import DateTimePicker from "react-datetime-picker";



export function Home(){
    const date = new Date(useAppSelector(selectDate));
    const dispatch = useAppDispatch();
    return(
        <DateTimePicker disableClock={true} value={date} onChange={(value)=>{
            console.log(value);
            if(value === null){
                return
            }
            dispatch(setDate(value.getTime()))
        }}/>
    )
}