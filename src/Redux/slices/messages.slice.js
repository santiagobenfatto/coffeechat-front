import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    conversations: [
        {
            converID: '',
            users: [],//el indice 0 será siempre el sender.
            messages: [
                {
                    content: '',
                    sender: '',
                    date: '',
                    state: 'unseen'
                }
            ],
            
        }
    ]
}

const messagesSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {
        addMessageToConver: (state, action) => {

            const { converID, text, date, state } = action.payload

            const existingConver = state.conversations.find(conver => conver.converID == converID)
            if(existingConver){
                existingConver.messages.push({
                    content: text,
                    date,
                    state
                })
                
            } 
        },
        addNewConver: (state, action) => {
            const { converID, users, messages } = action.payload
            state.conversations.push({
                converID,
                users,
                messages: [...messages]

            })

        }
        
    }
})

export const { addMessage, removeMessage } = messagesSlice.actions

export default messageReducer = messagesSlice.reducer