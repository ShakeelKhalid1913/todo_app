import express from 'express';
import {createTodo, deleteById, findById, readTodos, updateById} from '../controllers/todos-controller.js';

const router = express.Router();
router.get('/', readTodos);
router.post('/add', createTodo);
router.get('/:id', findById);
router.put('/update/:id', updateById);
router.delete('/delete/:id', deleteById);

export default router;

