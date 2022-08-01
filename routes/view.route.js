import { Router } from 'express';
import * as viewController from '../controllers/view.controller.js'

const router = Router();

router.get('/:id', viewController.getOne);

export default router;
