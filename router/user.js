import {getUser,setUser, removeUser,updateUser} from '../controller/user.js'
import express from 'express'


const router= express.Router();


router.get('/',getUser)
router.post('/',setUser)
router.delete('/',removeUser)
router.patch('/',updateUser)

export default router;