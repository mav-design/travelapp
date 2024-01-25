import { useAppSelector,useAppDispatch } from "@app/hooks";
import styles from './CalendarTable.module.css'
import { selectDate } from "@slices/date/dateSlice";
import { setDate} from "@slices/date/dateSlice";

export function CalendarTable(){
    const date = new Date(useAppSelector(selectDate));
    const addMonth = 2.628e+9
    const monthStartDay = new Date(date.getFullYear(),date.getMonth(),1).getDay()
    const daysInMonth = new Date(date.getFullYear(),date.getMonth(),0).getDate()
   console.log(date.getMonth());
    const dispatch = useAppDispatch()
    
        const prevDates:number[] = [];
        const currentDates:number[] = [];
     
            for (let dayBefore = monthStartDay-1;dayBefore>0;dayBefore--){
                prevDates.push(daysInMonth-dayBefore+1)
            }
            for (let date = 1;date<=daysInMonth;date++){
                currentDates.push(date)
            }
        const nextMonth = date.getTime()+addMonth
            
   

    return(<div  onClick={()=>dispatch(setDate(nextMonth))}>
        <div>sosti</div>
       {
        prevDates.map(date=>{
          return  <div className={styles.prevDate} key={'prev'+date}>{date}</div>
        })}
        {currentDates.map(date=>{
            
            return <div className={styles.curDate} key={'cur'+date}>{date}</div>})
       }
      
       
       </div>)
}