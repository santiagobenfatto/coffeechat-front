export const contactAdapter = (contacts) => {
    return contacts.map( contact => (
        {   
            user: {
                contactId: contact._id,
                firstName: contact.first_name, 
                lastName: contact. last_name,
                nickName: contact.nickname,
                avataURL: contact.avatar_url,
            },
            state: contact.state
        }
    ))
}
    