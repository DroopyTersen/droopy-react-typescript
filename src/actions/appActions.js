import hub from "../hub";

let handleAppInit = function() {
    console.log("App Init")
}


hub.on("app:init", handleAppInit);