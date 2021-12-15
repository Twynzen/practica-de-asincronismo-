let XMLHttpRequest = require(xmlhttprequest).XMLHttpRequest;

function fetchData(url_api, callback) {
    let xhttp = new XMLHttpRequest();
    //con open se hacen llamados a una url el tercer valor es es activar el asincronismo
    xhttp.open('GET', url_api, true);

    xhttp.onreadstatechange = function(event) {
        /* hay diferentes estados 0: request not initialized 1: server connection established 2:
         request received 3: processing request 4: processing request*/
        if (xhttp.readyState === 4) {
            if (xhttp.status === 200) {
                callback(null, JSON.parse(xhttp.responseText))
            } else {
                //Se instancia la clase error que se usa para mostrar bien un error
                const error = new Error('Error ' + url_api);
                return callback(error, null)
            }
        }
    }
    xhttp.send();
}