# Server Logic Detailed


## Dataverse
`Server.Connector.Dataverse.CreateRecord("accounts", "{"name":"Contoso Ltd."}");`


Server.Connector.Dataverse.RetrieveRecord("accounts", "accountid-guid", "$select=name,telephone1");`


`Server.Connector.Dataverse.UpdateRecord("accounts", "accountid-guid", "{"telephone1":"123-456-7890"}");`

`Server.Connector.Dataverse.DeleteRecord("accounts", "accountid-guid");`

`Server.Connector.Dataverse.InvokeCustomApi("new_CustomApiName", "{"ParameterName":"value"}");`



## Retrieve Site Settings value using Server Logic

```
function get() {
    try {
        let varSiteSettings = Server.SiteSetting.Get("Search/Enabled");
        let varEnvVar = Server.EnvironmentVariable.get("gpl_GIRISHFAVCAR");

        return JSON.stringify({ SS: varSiteSettings, EV: varEnvVar });
    }
    catch (err) {
        Server.Logger.Error("GET failed: " + err.message);
    }
}
```
