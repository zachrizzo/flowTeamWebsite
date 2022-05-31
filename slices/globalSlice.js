import { createSlice } from '@reduxjs/toolkit'

export const globalSlice = createSlice({
  name: 'global',
  initialState: {
    employeePersonSelected: null,
    userSubscriptionStatus: null,
    companySubscriptionStatus: false,
    trial: null,
    company: null,
  },
  reducers: {
    setCompany: (state, action) => {
      state.company = action.payload
    },
    setUserSubscriptionStatus: (state, action) => {
      state.userSubscriptionStatus = action.payload
    },
    setCompanySubscriptionStatus: (state, action) => {
      state.companySubscriptionStatus = action.payload
    },
    setTrial: (state, action) => {
      state.trial = action.payload
    },
  },
})
export const {
  setUserSubscriptionStatus,
  setCompanySubscriptionStatus,
  setTrial,
  setCompany,
} = globalSlice.actions

export default globalSlice.reducer
export const selectUserSubscriptionStatus = (state) =>
  state.global.userSubscriptionStatus
export const selectCompanySubscriptionStatus = (state) =>
  state.global.companySubscriptionStatus
export const selectTrial = (state) => state.global.trial
export const selectCompany = (state) => state.global.company
