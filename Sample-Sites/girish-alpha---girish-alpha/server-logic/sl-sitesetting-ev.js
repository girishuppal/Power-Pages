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