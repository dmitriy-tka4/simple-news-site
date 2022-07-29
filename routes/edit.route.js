import { Router } from "express";
import * as editController from '../controllers/edit.controller.js'

const router = Router();

router.get('/:id', editController.get);

router.post('/:id', editController.post);

export default router;
