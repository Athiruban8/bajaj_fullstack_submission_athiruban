const express = require("express");
const router = express.Router();
const { processData } = require("../utils/dataProcessor");

// POST /bfhl
router.post("/", async (req, res) => {
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
      user_id: "athiruban_p_08102004",
      email: "athiruban.p@gmail.com",
      roll_number: "22BCE1300",
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
});

module.exports = router;
