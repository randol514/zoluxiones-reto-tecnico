import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  typeDocument: '',
  document: '',
  telephone: '',
  politiesPrivacy: false,
  politiesCommunications: false
}

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers:{
    setFormData: (state, action) =>{
      return {...state, ...action.payload}
    }
  }
})

export const {setFormData} = formSlice.actions
export default formSlice.reducer