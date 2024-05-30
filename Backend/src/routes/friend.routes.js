import { Router } from "express";
import {
searchUser,
friendRequest, 
acceptFriendRequest, 
cancelFriendRequest, 
removeFriend,
getFriends} from "../controllers/friend.controllers.js"
import {authRequired} from "../middlewares/validateToken.js"


const router = Router()

//se debe estar autenticado para realizar las acciones (authRequired)
router.get('/search-users', authRequired, searchUser)
router.post('/friend-request', authRequired, friendRequest)
router.post('/accept-friend-request', authRequired, acceptFriendRequest)
router.post('/cancel-friend-request', authRequired, cancelFriendRequest)
router.post('/remove-friend', authRequired, removeFriend)
router.get('/get-friends', authRequired, getFriends)

export default router