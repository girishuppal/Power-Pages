
const baseUrl = "https://api.open-meteo.com/v1/forecast?latitude=27.47&longitude=-153.02&hourly=temperature_2m&forecast_days=1";
async function get() {
    try {
        Server.Logger.Log("API method testing");
        const response = await Server.Connector.HttpClient.GetAsync(
            `${baseUrl}`,
            { 'content-type': 'application/json' });
        return response;

    } catch (err) {
        Server.Logger.Error("GET failed: " + err.message);
        return JSON.stringify({ status: "error", method: "GET", message: err.message });
    }
}


async function post() {

    let url = "";
    let body = "";
    let headers ="";
    const response = await Server.Connector.HttpClient.PostAsync(
        url, body, headers, "application/json"
    );

    return JSON.stringify({ status: "error", method: "POST" });

}