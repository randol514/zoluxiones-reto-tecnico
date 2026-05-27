import { createSlice } from "@reduxjs/toolkit";

const initialState ={
  plan: ""
}

const planSlice = createSlice({
  name: 'plan',
  initialState,
  reducers:{
    setPlan: (state, action)=>{
      return{...state, ...action.payload}
    }
  }
})

export const {setPlan} = planSlice.actions
export default planSlice.reducer