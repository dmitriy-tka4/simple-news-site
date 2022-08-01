import { Router } from 'express';
import * as createController from '../controllers/create.controller.js'

const router = Router();

router.get('/', createController.get);

router.post('/', createController.post);

export default router;
