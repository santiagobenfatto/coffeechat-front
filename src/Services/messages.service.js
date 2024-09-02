import config from '../../config.js'

const messagesURL = config.messageURL

export const fetchMessagesByConverId = async (converId) => {
    try {
        const existingConver = false;

        if(existingConver && existingConver.messages &&  existingConver.length > 0){
            return existingConver.messages
        } 
        else {
            const response = await fetch(messagesURL, {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
        if(response.ok){
            const data = await response.json()
            return data
            }
        }
    } catch (error) {
        console.log(error)
    }
}