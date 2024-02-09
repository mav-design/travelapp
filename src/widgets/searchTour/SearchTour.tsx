import { useAppSelector,useAppDispatch } from "@app/hooks";
import styles from './search-tour.module.css'
import { selectDate } from "@slices/searchSlice/searchSlice";
import { setDate} from "@slices/searchSlice/searchSlice";
import ReactDatePicker from "react-datepicker";
import { useTimeFetch } from "@app/hooks/useTimeFetch";
import { TimePicker } from "@features/timePicker/TimePicker";


export function SearchTour(){
    const {data,isLoading} = useTimeFetch()
    console.log(isLoading);
    const date = new Date(useAppSelector(selectDate));
    const dispatch = useAppDispatch();
    return(
        <div className={styles.searchBody}>
            <ReactDatePicker  selected={date} onChange={(value)=>{
                if(value === null){
                    return
                }
                dispatch(setDate(value.getTime()))
            }} dateFormat={'dd.MM.YYYY'} className={styles.calendarBody}/>
            {isLoading?<span>Loading</span>:<TimePicker times = {data}/>}
        </div>
    )
}