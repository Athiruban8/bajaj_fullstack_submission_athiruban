module.exports = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  if (req.method !== "GET") {
    return res.status(405).json({
      error: "Method not allowed. Only GET method is supported.",
    });
  }

  res.status(200).json({
    message: "Bajaj Fullstack API",
    version: "1.0.0",
    endpoints: {
      "POST /bfhl": "Process array data and return categorized results",
      "GET /health":
        "Health check endpoint (Check if server is running successfully)",
      "GET /": "API information (this endpoint)",
    },
    example: {
      method: "POST",
      url: "/bfhl",
      body: {
        data: ["a", "1", "334", "4", "R", "$"],
      },
    },
  });
};
