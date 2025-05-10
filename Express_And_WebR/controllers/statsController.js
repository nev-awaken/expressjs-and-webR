const { webR } = require("../webrInstance");

exports.summaryStats = async (req, res) => {
  try {
    await webR.objs.globalEnv.bind("x", req.body.values);
    const result = await webR.evalR("summary_stats(x)");
    res.json(await result.toJs());
  } catch {
    res.status(500).json({ error: "summary_stats failed" });
  }
};

exports.tTest = async (req, res) => {
  try {
    await webR.objs.globalEnv.bind("x", req.body.x);
    await webR.objs.globalEnv.bind("y", req.body.y);
    const result = await webR.evalR("run_t_test(x, y)");
    res.json({ p_value: await result.toNumber() });
  } catch {
    res.status(500).json({ error: "t-test failed" });
  }
};

exports.pca = async (req, res) => {
  try {
    await webR.objs.globalEnv.bind("data_matrix", req.body.data);
    const result = await webR.evalR("run_pca(data_matrix)");
    res.json(await result.toJs());
  } catch (err) {
    console.error("PCA failed:", err);
    res.status(500).json({ error: "PCA failed" });
  }
};

exports.kMeans = async (req, res) => {
  try {
    const { data, k } = req.body;
    await webR.objs.globalEnv.bind("data_matrix", data);
    await webR.objs.globalEnv.bind("k", k);
    const result = await webR.evalR("run_kmeans(data_matrix, k)");
    res.json({ clusters: await result.toJs() });
  } catch (err) {
    console.error("K-Means failed:", err);
    res.status(500).json({ error: "k-means failed" });
  }
};


exports.hwForecast = async (req, res) => {
  try {
    const { values, horizon } = req.body;
    await webR.objs.globalEnv.bind("ts_values", values);
    await webR.objs.globalEnv.bind("horizon", horizon || 5);
    const result = await webR.evalR("run_hw_forecast(ts_values, horizon)");
    res.json({ forecast: await result.toJs() });
  } catch (err) {
    console.error("HW Forecast failed:", err);
    res.status(500).json({ error: "Forecasting failed" });
  }
};


