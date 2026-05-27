import { configureStore } from "@reduxjs/toolkit"
import formReducer from "../features/form/formSlice"
import planReducer from "../features/plan/planSlice"

const preloadedState = {
  form: JSON.parse(localStorage.getItem("formData")) || {},
  plan: JSON.parse(localStorage.getItem("selectPlan")) || {}
}

export const store = configureStore({
  reducer: {
    form: formReducer,
    plan: planReducer
  },
  preloadedState
})