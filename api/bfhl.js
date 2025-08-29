const { processData } = require("../utils/dataProcessor");

module.exports = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  if (req.method === "GET") {
    return res.status(200).json({
      message: "This endpoint requires a POST request",
      tip: 'Use POST method with a JSON body containing \'data\' array. Example: { "data": ["a", "1", "334", "4", "R", "$"] }',
      endpoint: "/bfhl",
      method: "POST",
    });
  }

  if (req.method !== "POST") {
    return res.status(405).json({
      is_success: false,
      error: "Method not allowed. Only POST method is supported.",
      tip: 'Use POST method with a JSON body containing \'data\' array. Example: { "data": ["a", "1", "334", "4", "R", "$"] }',
    });
  }

  try {
    const { data } = req.body;

    if (!data || !Array.isArray(data)) {
      return res.status(400).json({
        is_success: false,
        error: "Invalid input: data must be an array",
      });
    }

    const processedData = processData(data);

    const response = {
      is_success: true,
      user_id: "john_doe_17091999",
      email: "john@xyz.com",
      roll_number: "ABCD123",
      odd_numbers: processedData.oddNumbers,
      even_numbers: processedData.evenNumbers,
      alphabets: processedData.alphabets,
      special_characters: processedData.specialCharacters,
      sum: processedData.sum,
      concat_string: processedData.concatString,
    };

    res.status(200).json(response);
  } catch (error) {
    console.error("Error processing request:", error);
    res.status(500).json({
      is_success: false,
      error: "Internal server error",
      message: error.message,
    });
  }
};
