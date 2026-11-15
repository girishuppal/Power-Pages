
function get() {
    try {

        // await Server.Connector.Dataverse.UpdateRecord("accounts", accountId, '{"telephone1":"123-456-7890"}'); //update a record

        // await Server.Connector.Dataverse.InvokeCustomApi("new_CustomApiName", '{"ParameterName":"value"}'); //hit custom api endpoint        



        // await Server.Connector.Dataverse.RetrieveRecord("accounts", accountId, "$select=name,telephone1"); //retrieve single record


        
        let contactId = "33f44122-c16d-f011-b4cc-002248970bd2"
        let tableName = "contacts"
        let response = Server.Connector.Dataverse.RetrieveRecord(tableName, contactId);

        // response = response.replace(/\\u0022/g, '"');
        // response = response.replace("\u0022", '"');
        // response = response.replace(/\\r/g, '"');
        // response = response.replace(/\\n/g, '"');
        // return response;

        return JSON.stringify({ status: "success", response: response });

    } catch (err) {
        Server.Logger.Error("GET failed: " + err.message);
        return JSON.stringify({ status: "error", method: "GET", message: err.message });
    }
}


function post() {
    try {
        Server.Logger.Log("POST called");
        let data = Server.Context.Body;

        // await Server.Connector.Dataverse.CreateRecord("accounts", '{"name":"Contoso Ltd."}'); //create a record in account


        // 🔹 Quick Dataverse Create example
        // const response = Server.Connector.Dataverse.CreateRecord("accounts", JSON.stringify({ name: "New Account", telephone1: "123-456-7890" }));

        return JSON.stringify({ status: "success", method: "POST", data: data });
    } catch (err) {
        Server.Logger.Error("POST failed: " + err.message);
        return JSON.stringify({ status: "error", method: "POST", message: err.message });
    }
}


function put() {
    try {
        let contactId = "33f44122-c16d-f011-b4cc-002248970bd2";
        let tableName = "contacts";
        let data = Server.Context.Body;
        return Server.Connector.Dataverse.UpdateRecord(tableName, contactId, data);




        // 🔹 Quick Dataverse Update example
        // var response = Server.Connector.Dataverse.UpdateRecord("accounts", id, data);

        return JSON.stringify({ status: "success", method: "PUT", id: id, data: data });
    } catch (err) {
        Server.Logger.Error("PUT failed: " + err.message);
        return JSON.stringify({ status: "error", method: "PUT", message: err.message });
    }
}


async function patch() {
    try {
        Server.Logger.Log("PATCH called");
        const id = Server.Context.QueryParameters["id"];
        const data = Server.Context.Body;

        // 🔹 Quick HttpClient PATCH example
        // await Server.Connector.HttpClient.PatchAsync("<URL>" + id, JSON.stringify({ capacity: "1 TB" }), {"Authorization": "Bearer "},"application/json");

        return JSON.stringify({ status: "success", method: "PATCH", id: id, data: data });
    } catch (err) {
        Server.Logger.Error("PATCH failed: " + err.message);
        return JSON.stringify({ status: "error", method: "PATCH", message: err.message });
    }
}


function del() {
    try {
        // "delete" keyword should not be used in script file.
        Server.Logger.Log("DEL called");
        const id = Server.Context.QueryParameters["id"];

        // 🔹 Quick Dataverse Del example
        // var response = Server.Connector.Dataverse.DeleteRecord("accounts", id);

        return JSON.stringify({ status: "success", method: "DEL", id: id });
    } catch (err) {
        Server.Logger.Error("Deletion failed: " + err.message);
        return JSON.stringify({ status: "error", method: "DEL", message: err.message });
    }
}
