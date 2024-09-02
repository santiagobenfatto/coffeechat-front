import config from '../../config.js'

const conversURL = config.converURL

export const fetchConvers = async () => {
        try {
            const response = await fetch(conversURL, {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            if(response.ok){
                const result = await response.json()
                return result
            } else {
                //custom error
                
            }
        } catch (error) {
            console.log(error)
        }
    }