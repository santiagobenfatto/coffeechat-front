import config from '../../config.js'

const contactsURL = config.contactsURL

export const fetchContacts = async () => {
        try {
            const response = await fetch(contactsURL, {
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
            } else {
                //custom error
                
            }
        } catch (error) {
            console.log(error)
        }
    }