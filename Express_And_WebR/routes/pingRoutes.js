import express from 'express';
import { pingServer } from '../controllers/pingController.js';

const router = express.Router();

router.get('/ping', pingServer);

export const pingRoutes = router;
