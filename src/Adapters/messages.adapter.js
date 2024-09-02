//Lo que viene es la conver:
{
    created_by,
    users,
    messages
}

export const messagesAdapter = (conver) => {
    return {
        converID: conver._id,
        users: [users],
        messages: conver.messages.map(( message ) => (
            {
                content: message.content,
                sender: message.sender,
                date: message.created_at,
                state: 'unseen'
            }
        ))
    }
        
}