import { Router } from "express";
import * as deleteController from '../controllers/delete.controller.js'

const router = Router();

router.get('/:id', deleteController.deleteArticle);

export default router;
