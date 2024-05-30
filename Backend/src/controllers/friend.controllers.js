import User from "../models/user.model.js"

// Controlador para buscar usuarios por su nombre de usuario
export const searchUser = async (req, res) => {
    // se obtiene el término de búsqueda del query string (en este caso el nombre de usuario)
    const { username } = req.query;

    try {
        // Busca usuarios cuyo nombre de usuario contenga el término de búsqueda
        // expresión regular para hacer la búsqueda insensible a mayúsculas/minúsculas
        const users = await User.find({ usuario: new RegExp(username, 'i') });

        res.json(users);
    } catch (error) {
        res.status(500).json({ message: "Error al buscar usuarios", error });
    }

}

// Controlador para enviar una solicitud de amistad
export const friendRequest = async (req, res) => {

    const { toUserId } = req.body; // ID del usuario "al que se envía" la solicitud
    const fromUserId = req.user.id; // ID del usuario "que envía" la solicitud, el usuario debe estar autenticado
    console.log(toUserId, fromUserId);
    try {
        // Añadir la solicitud de amistad, por ejemplo, añadiendo el ID de fromUserId al array de friendRequests de toUserId
        await User.findByIdAndUpdate(toUserId, {
            $push: { friendRequests: fromUserId }
        });
        res.status(200).send('Solicitud de amistad enviada.');
    } catch (error) {
        res.status(500).send('Error al enviar solicitud de amistad.');
    }


}

// Controlador para aceptar la solicitud de amistad
export const acceptFriendRequest = async (req, res) => {

    const { fromUserId } = req.body; // ID del usuario que envió la solicitud
    const toUserId = req.user.id; // ID del usuario que acepta la solicitud, el usuario debe estar autenticado
    console.log(toUserId, fromUserId);
    try {
        // Mover el ID de fromUserId del array de friendRequests al array de friends en el documento de toUserId
        // se saca el ID del usuario que envió la solicitud de friendRequests y se agrega al array de friends del usuario que acepta la solicitud
        await User.findByIdAndUpdate(toUserId, {
            $pull: { friendRequests: fromUserId },
            $push: { friends: fromUserId }
        });

        //  Se actualiza el documento(lista de amigos) de fromUserId(usuario que envió la solicitud) para añadir a toUserId(usuario que acepta la solicitud) a su lista de amigos
        await User.findByIdAndUpdate(fromUserId, {
            $push: { friends: toUserId }
        });

        res.status(200).send('Solicitud de amistad aceptada.');
    } catch (error) {
        res.status(500).send('Error al aceptar la solicitud de amistad.');
    }

}

// Controlador para cancelar la solicitud de amistad
export const cancelFriendRequest = async (req, res) => {

    const { fromUserId } = req.body; // ID del usuario que envió la solicitud
    const toUserId = req.user.id; // ID del usuario que cancela la solicitud, el usuario debe estar autenticado
    console.log(toUserId, fromUserId);
    try {
        // Eliminar el ID de fromUserId del array de friendRequests del documento de toUserId
        await User.findByIdAndUpdate(toUserId, {
            $pull: { friendRequests: fromUserId }
        });
        res.status(200).send('Solicitud de amistad cancelada.');
    } catch (error) {
        res.status(500).send('Error al cancelar la solicitud de amistad.');
    }
}

// Controlador para eliminar un amigo
export const removeFriend = async (req, res) => {

    const { toUserId } = req.body; // ID del amigo que se va a eliminar
    const fromUserId = req.user.id; // ID del usuario que elimina a sus amigos, el usuario debe estar autenticado
    console.log(toUserId, fromUserId);
    try {
        // Eliminar el ID del amigo de la lista de amigos del usuario
        await User.findByIdAndUpdate(toUserId, {
            $pull: { friends: fromUserId }
        });
        res.status(200).send('Amigo eliminado.');
    } catch (error) {
        res.status(500).send('Error al eliminar el amigo.');
    }
}

// Controlador para obtener la lista de amigos
export const getFriends = async (req, res) => {
    const userId = req.user.id; //  middleware que autentica al usuario y establece req.user del que se extrae el id

    try {
      // Buscar el usuario 
      // se busca por el ID del usuario y se popula la lista de amigos
      const userWithFriends = await User.findById(userId).populate('friends');
  
      if (!userWithFriends) {
        return res.status(404).send('Usuario no encontrado.');
      }
  
      res.json(userWithFriends.friends);
    } catch (error) {
      res.status(500).send('Error al obtener la lista de amigos.');
    }
}