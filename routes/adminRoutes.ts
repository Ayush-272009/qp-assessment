import express from 'express';
import {
  addGrocery,
  viewGroceries,
  updateGrocery,
  removeGrocery,
  manageInventory,
} from '../src/controllers/admin.controller';

const router = express.Router();

router.post('/groceries', addGrocery);

router.get('/groceries', viewGroceries);

router.put('/groceries/:id', updateGrocery);

router.delete('/groceries/:id', removeGrocery);

router.patch('/groceries/inventory/:id', manageInventory);

export default router;
