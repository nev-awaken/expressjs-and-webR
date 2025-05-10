import { DateTime } from "luxon";

export const pingServer = async (req, res) => {
  try {
    const response = {
      success: true,
      message: "Backend is alive & running",
      utc_timestamp: DateTime.utc().toFormat("yyyy-MM-dd HH:mm:ss ZZZZ"),
      data: null,
    };
    res.json(response);
  } catch (error) {
    res.status(500).json({ error: "Ping failed" });
  }
};
