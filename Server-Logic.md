## Server Logic Usage Methods
---

---
|Method | Description |
|---|---|
|Server.Logger.Log("Information message"); | |
|Server.Logger.Warn("Warning message"); | |
|Server.Logger.Error(errorMsg); | |
|Server.Context.QueryParameters["id"] | |
|Server.Logger.Log("GET called") | |
|const CLIENT_ID = Server.SiteSetting.Get("CLIENT_ID"); |Read Site Setting values from current website |
|let response = await Server.Connector.HttpClient.GetAsync(url, header); | |
| let response = await Server.Connector.HttpClient.PostAsync(url, body, header, contentType);| |
|let response = await Server.Connector.HttpClient.PutAsync(url, body, header, contentType);| |
|let response = await Server.Connector.HttpClient.PatchAsync(url, body, header, contentType);| |
|let response = await Server.Connector.HttpClient.DeleteAsync(url, header);| |
|Server.EnvironmentVariable.get("SITEPATH"); |Read Value of an environment variable |
|Server.Website.adx_primarydomain; | Get details of current website record |
|Server.User.fullname; |Provide details of the signed in user |
|Server.Connector.Dataverse | Perform CRUD operations on Dataverse|
|Server.Connector.Dataverse.CreateRecord(string entitySetName, string payload)    | |
| Server.Connector.Dataverse.RetrieveRecord(string entitySetName, string id)| |
|Server.Connector.Dataverse.RetrieveMultipleRecords(string entitySetName)| |
|Server.Connector.Dataverse.UpdateRecord(string entitySetName, string id, string payload)   | |
|Server.Connector.Dataverse.DeleteRecord(string entitySetName, string id)  | |
|Server.Connector.Dataverse.InvokeCustomApi(string httpMethod, string url, string payload = null)  |Invoke Custom API |
|Server.Connector.CloudFlow.TriggerAsync(string flowId, string payload = null)| |
|const data = Server.Context.Body | |
|Server.Context.ActivityId | |
|Server.Context.FunctionName | |
|Server.Context.Headers | |
|Server.Context.HttpMethod | |
|Server.Context.Input | |
|Server.Context.QueryParameters | |
|Server.Context.ServerLogicName | |
|Server.Context.Url | |
|Server.Context. | |

