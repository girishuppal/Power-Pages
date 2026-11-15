function test1() {
    console.log("This is JS - test1");
}

function test2() {
    console.log("This is JS - test2 2");
}

function test3(){

    shell.safeAjax({
        type: "GET",
        url: "",
        contentType:"application/json",

        succcess: function(res){
            console.log(res);
        }

        

    });
}

async function getAPIExample() {

    // let url = "https://contoso.com/objects";
    // let header = { client_id: "00001111-aaaa-2222-bbbb-3333cccc4444" };
    // let response = await Server.Connector.HttpClient.GetAsync(url, header);

    let url = "https://dummy.restapiexample.com/api/v1/employees";
    let header = "";
    let response = await Server.Connector.HttpClient.GetAsync(url, header);
}



$(document).ready(function () {
    // Your jQuery code here
    //$("#b1").addEventListenerr('click', test1);
    $("#b1").css({ "font-family": "Verdana" });
    $("#b1").on("click", test1);

});