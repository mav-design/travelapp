import {  createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from "@app/store";

export interface SearchSlise{
    date:number,
    time:number|null,
    tour:number|null,
    transportation:string
}
const initialState:SearchSlise={
    date:new Date().getTime(),
    time:null,
    tour:null,
    transportation:''
}
export const searchSlice= createSlice({
    name:'search',
    initialState,
    reducers:{
        setDate:(state,action:PayloadAction<number>)=>{
            state.date=action.payload
        },
        setTime:(state,action:PayloadAction<number>)=>{
            state.time=action.payload
        },
        setTour:(state,action:PayloadAction<number>)=>{
            state.tour=action.payload
        },setTransportation:(state,action:PayloadAction<string>)=>{
            state.transportation=action.payload
        }
    }
});

export const {setDate,setTime,setTour,setTransportation} = searchSlice.actions;

export const selectDate = (state:RootState)=>state.search.date
export const selectTime = (state:RootState)=>state.search.time
export const selectTour = (state:RootState)=>state.search.tour
export const selectTransportation = (state:RootState)=>{state.search.transportation}

export default searchSlice.reducer