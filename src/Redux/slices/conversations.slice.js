import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 'Estado inicial jaj',
    conversations: []
}

const conversationSlice = createSlice({
    name: 'converSlice',
    initialState,
    reducers: { 
        getConvers: (state, action) => {
            state.conversations = action.payload
        },
        addConver:  (state, action) => {
            state.conversations= [...state.conversations, action.payload]
        },
        
    }
})

export const { getConvers, addConver } = conversationSlice.actions

export default conversationSlice.reducer