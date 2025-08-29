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
    status: "OK",
    message: "Server is running on Vercel",
    timestamp: new Date().toISOString(),
    endpoint: "/api/bfhl",
  });
};
