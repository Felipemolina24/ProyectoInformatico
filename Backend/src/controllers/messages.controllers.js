import Message from '../models/message.model.js'

export const sendMessage = async (req, res) => {
    const { body, to } = req.body;

    try {
        const newMessage = new Message({
            body,
            from: req.user.id, // El usuario que envía el mensaje
            to // El destinatario del mensaje
        });
        await newMessage.save();

        // Emitir el mensaje solo al amigo destinatario
        io.to(to).emit('message', {
            body: newMessage.body,
            from: newMessage.from,
            to: newMessage.to
        });

        res.status(201).json(newMessage);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


