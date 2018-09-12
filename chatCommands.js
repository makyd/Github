
module.exports = {

replyBot: function(receivedMessage) {
     
        // Prevent bot from responding to its own messages
        if (receivedMessage.author == client.user) {
            return
        }
        if (receivedMessage.content.includes(client.user.toString())) {
            // Send acknowledgement message
            receivedMessage.channel.send("Message received from " +
                receivedMessage.author.toString() + ": " + receivedMessage.content)
        }
        
    }
}
