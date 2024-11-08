# API Automation Tests

This project contains API automation tests built using Jest and Axios to validate various response statuses from [reqres.in](https://reqres.in/). Each test covers a specific scenario, including handling successful responses, server errors, rate-limiting, and more.

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone <your-repository-url>

2. Navigate to the project folder:  cd api-tests

3. Install dependencies: npm install

4. Run the tests with the following command: npm test


Test Case Descriptions:

Status 200 Test: Validates that a successful GET request returns a status code of 200.
404 Error Test: Ensures that a request for a non-existent resource returns a 404 status.
Server Error Test: Checks for handling of server errors like 500 or 503 gracefully.
Rate Limiting Test: Verifies that the test suite handles 429 rate-limiting responses.
Unauthorized Access Test: Tests handling of 401 unauthorized errors.
Invalid Endpoint Test: Confirms that invalid endpoints are handled without failing.
Timeout Test: Simulates a timeout and verifies that it is handled correctly.