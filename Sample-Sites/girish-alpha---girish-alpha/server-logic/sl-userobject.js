// if (Server.User.Roles.includes("Manager")) { /* ... */ }        


function get() {
    try {

         let varUser = Server.User;
        //  return JSON.stringify({user: varUser});
         return JSON.stringify({ fullName: varUser.fullname, contactID: varUser.contactid, email: varUser.emailaddress1, adx: varUser.adx_identity_username});
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

