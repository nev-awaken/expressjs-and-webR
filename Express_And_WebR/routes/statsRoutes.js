import express from 'express';
import * as stats from '../controllers/statsController.js';

const router = express.Router();


router.post("/summary", stats.summaryStats);
router.post("/t-test", stats.tTest);
router.post("/pca", stats.pca);
router.post("/kmeans", stats.kMeans);
router.post("/forecast-hw", stats.hwForecast);

export const statsRoutes = router;
