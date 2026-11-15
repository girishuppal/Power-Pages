async function getAccessToken() {
  const tenantId = Server.EnvironmentVariable.get("TENANT_ID");
  const clientId = Server.EnvironmentVariable.get("CLIENT_ID");
  const clientSecret = Server.EnvironmentVariable.get("CLIENT_SECRET");
  const scope = "https://graph.microsoft.com/.default";
  const tokenUrl = `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`;

  // IMPORTANT: this endpoint expects form-urlencoded, not JSON —
  // more on why this matters below.
  const body = new URLSearchParams({
    client_id: clientId,
    client_secret: clientSecret,
    scope,
    grant_type: "client_credentials"
  }).toString();

  const response = await Server.Connector.HttpClient.PostAsync(
    tokenUrl, body, {}, "application/x-www-form-urlencoded"
  );

  const parsed = JSON.parse(response);
  const accessToken = JSON.parse(parsed.Body).access_token;

  if (!accessToken) {
    throw new Error("Failed to acquire token: " + parsed.Body);
  }
  return accessToken;
}

async function get() {
  try {
    const token = await getAccessToken();
    const header = { Authorization: `Bearer ${token}` };
    const url = "https://graph.microsoft.com/v1.0/sites/{site-id}/drives/{drive-id}/root/children";
    return await Server.Connector.HttpClient.GetAsync(url, header);
  } catch (err) {
    Server.Logger.Error("GET failed: " + err.message);
    return JSON.stringify({ status: "error", method: "GET", message: err.message });
  }
}      


function get() {
    try {
        let clientId = "xx";
        let clientSecret = "";
        let tenantId = "";

        Server.Logger.Log("hey");
        Server.Logger.Warn("hey 1");
        Server.Logger.Error("hey 2");
        Server.Logger.Error("hey 3 - error");
        return JSON.stringify({ status: "success", method: "GET", cid: clientId });
    }
    catch (err) {
        Server.Logger.Error("GET failed: " + err.message);
    }
}