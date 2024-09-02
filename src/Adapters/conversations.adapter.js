export const converResumeAdapter = (conversations) => {
    return conversations.map(conver => {
        let receivers = conver.users.filter(user => user._id !== conver.sender._id)

        const converResume = {
            converId: conver._id,
            sender: conver.created_by,
            receivers: [...receivers],
            title: conver.name,
            lastMessage: conver.messages[messages.length - 1],
            created: conver.created_at
        }
        
        return converResume

    })
}