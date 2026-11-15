function getLiquidStuffs() {
    return JSON.stringify({
        message: "This is liquid in action",
        year: 2026,
        ai: false
    });
}


function get() {
    try {

        let varFullName = Server.User.fullname;
        let varPrimaryDomain = Server.Website.adx_primarydomain;
        let varFunctionName = Server.Context.FunctionName;
        let varHttpMethod = Server.Context.HttpMethod;
        let varHeaders = Server.Context.Headers;
        let varServerLogicName = Server.Context.ServerLogicName;
        let varActivityId =  Server.Context.ActivityId;
        let varInput =  Server.Context.Input;
        let varUrl = Server.Context.Url;
        let varBody = Server.Context.Body;
        let varId = Server.Context.QueryParameters["id"];
        let varUser = Server.User.contactid;
        let auth = Server.Context.Headers["Authorization"];        

        //return JSON.stringify({ status: 'success', method: 'GET', fullname: varFullName, domain: varPrimaryDomain, functionname: varFunctionName, httpmethod: varHttpMethod, headers: varHeaders });
        // return JSON.stringify({headers: varheaders})
        // return JSON.stringify({body: varBody})
        //return JSON.stringify({ activityId: varActivityId })
        return JSON.stringify({ auth0: auth });

    }
    catch (err) {
        Server.Logger.Error("GET failed: " + err.message);
    }
}