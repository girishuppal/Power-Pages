async function getAPIExample() {

    // let url = "https://contoso.com/objects";
    // let header = { client_id: "00001111-aaaa-2222-bbbb-3333cccc4444" };
    // let response = await Server.Connector.HttpClient.GetAsync(url, header);

    let url = "https://dummy.restapiexample.com/api/v1/employees";
    let header = "";
    let response = await Server.Connector.HttpClient.GetAsync(url, header);

}



async function get() {
    try {


        let url = "https://dummy.restapiexample.com/api/v1/employees";
        let header = "";
        let response = await Server.Connector.HttpClient.GetAsync(url, header);

        return JSON.stringify({ status: "success", method: "GET", response: response });
    }
    catch (err) {
        Server.Logger.Error("GET failed: " + err.message);
    }
}

function post() {
    try {
        return JSON.stringify({ status: "success", method: "POST" });
    }
    catch (err) {
        Server.Logger.Error("POST failed: " + err.message);
    }
}

function put() {
    try {
        return JSON.stringify({ status: "success", method: "PUT" });
    }
    catch (err) {
        Server.Logger.Error("PUT failed: " + err.message);
    }

}

function patch() {
    try {
        return JSON.stringify({ status: "success", method: "PATCH" });
    }
    catch (err) {
        Server.Logger.Error("PATCH failed: " + err.message);
    }

}

function del() {
    try {
        return JSON.stringify({ status: "success", method: "DEL" });
    }
    catch (err) {
        Server.Logger.Error("DEL failed: " + err.message);
    }

}

