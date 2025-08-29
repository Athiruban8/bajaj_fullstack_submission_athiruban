# Bajaj Fullstack API

A REST API that processes arrays and returns categorized data.

## API Endpoints

### POST /bfhl

Processes an array and returns categorized results.

**Request Body:**

```json
{
  "data": ["a", "1", "334", "4", "R", "$"]
}
```

**Response:**

```json
{
  "is_success": true,
  "user_id": "athiruban_p_08102004",
  "email": "athiruban.p@gmail.com",
  "roll_number": "22BCE1300",
  "odd_numbers": ["1"],
  "even_numbers": ["334", "4"],
  "alphabets": ["A", "R"],
  "special_characters": ["$"],
  "sum": "339",
  "concat_string": "Ra"
}
```

### GET /bfhl

Returns information about using the endpoint.

**Response:**

```json
{
  "message": "This endpoint requires a POST request",
  "tip": "Use POST method with a JSON body containing 'data' array. Example: { \"data\": [\"a\", \"1\", \"334\", \"4\", \"R\", \"$\"] }",
  "endpoint": "/bfhl",
  "method": "POST"
}
```

### GET /

Returns instructions on using the API.

## Response Fields

- `is_success`: Operation status (true/false)
- `user_id`: User identifier
- `email`: User email
- `roll_number`: College roll number
- `odd_numbers`: Array of odd numbers as strings
- `even_numbers`: Array of even numbers as strings
- `alphabets`: Array of alphabets in uppercase
- `special_characters`: Array of special characters
- `sum`: Sum of all numbers as string
- `concat_string`: Concatenated alphabets with alternating caps in reverse order
