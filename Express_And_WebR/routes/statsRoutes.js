const express = require("express");
const router = express.Router();
const stats = require("../controllers/statsController");

router.post("/summary", stats.summaryStats);
router.post("/t-test", stats.tTest);
router.post("/pca", stats.pca);
router.post("/kmeans", stats.kMeans);
router.post("/forecast-hw", stats.hwForecast);


module.exports = router;
