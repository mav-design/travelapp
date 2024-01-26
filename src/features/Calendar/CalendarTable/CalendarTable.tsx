import { useAppSelector,useAppDispatch } from "@app/hooks";
import styles from './CalendarTable.module.css'
import { selectDate } from "@slices/date/dateSlice";
import { setDate} from "@slices/date/dateSlice";
import { useEffect, useState } from "react";

export function CalendarTable(){
    const date = new Date(useAppSelector(selectDate));
    const [currentMonth,setCurrentMonth]=useState(date.getMonth())

    const addMonth = 2.628e+9
    const monthStartDay = new Date(date.getFullYear(),currentMonth,1).getDay()
    const daysInMonth = new Date(date.getFullYear(),currentMonth,0).getDate()
  const daysInPrevMonth = new Date(date.getFullYear(),currentMonth-1,0).getDate()
    const dispatch = useAppDispatch()
    console.log(daysInMonth);
    const prevDates:number[] = [];
    const currentDates:number[] = [];
  

    for (let dayBefore = monthStartDay-1;dayBefore>0;dayBefore--){
        prevDates.push(daysInPrevMonth-dayBefore+1)
    }
    for (let date = 1;date<=daysInMonth;date++){
        currentDates.push(date)
    }
    
    const nextMonth = date.getTime()+addMonth
            
   

    return(<div  onClick={()=>dispatch(setDate(nextMonth))}>
        <div onClick={()=>{setCurrentMonth((prev)=>prev+1)}}>sosti</div>
        {prevDates.map((date)=>{return (<div className={styles.prevDates} key={'prev'+date}>{date}</div>)})}
        {currentDates.map((date)=>{return (<div className={styles.curDates} key={'current'+date}>{date}</div>)})}
       
       
      
       
       </div>)
}