const axios = require('axios');

const apiClient = axios.create({
    baseURL: 'https://reqres.in/api',
    timeout: 3000, // 3-second timeout for slow responses
    headers: { 'Content-Type': 'application/json' }
});

module.exports = apiClient;
