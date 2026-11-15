// MyExternalApiLogic.js

// Handles incoming GET requests from your frontend
async function get() {
    try {
        // 1. Initialize the HttpClient
        const httpClient = Server.Connector.HttpClient;

        // 2. Define your external API request configuration
        const requestConfig = {
            method: 'GET',
            url: 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m',
            headers: {
                'Accept': 'application/json',
                // 'Authorization': 'Bearer YOUR_SECRET_API_KEY' // Completely safe from client eyes!
            }
        };

        // 3. Execute the external HTTP request
        const response = await httpClient.sendAsync(requestConfig);

        // 4. Return the processed string response back to the client page
        return response.body; 

    } catch (error) {
        // Log errors securely using the Server Logger
        Server.Logger.error('API Call failed: ' + error.message);
        throw new Error('Internal server processing failed.');
    }
}
