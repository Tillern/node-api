import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import { getUser, getUsers, createUser, updateUser, deleteUser } from '../controllers/users.js'

const router = express.Router();

router.get('/', getUsers);

router.get('/:id', getUser);

router.post('/', createUser);

router.delete('/:id', deleteUser);

router.patch('/:id', updateUser);

export default router;