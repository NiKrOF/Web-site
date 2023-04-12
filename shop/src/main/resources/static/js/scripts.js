function construction() {
    document.location = '/shop?sort=' + getFirstSortValue() + '&direction=' + getSecondSortValue() + '&filter=' + getFilterValue()
}
document.getElementById('cntOfItems').onload=(updCntInfo());
function getFirstSortValue() {
    let selectedIndex = document.getElementById('firstSelect').selectedIndex;
    if (selectedIndex) {
        if (selectedIndex === 1) return 'price';
        else return 'name';
    }
}

function getSecondSortValue() {
    let selectedIndex = document.getElementById('secondSelect').selectedIndex;
    if (selectedIndex) {
        if (selectedIndex === 1) return 'asc';
        else return 'desc';
    }
}

function getFilterValue() {
    return document.getElementById('filter').value;
}

function getCount() {
    return httpGet("/CartCnt").responseText;
}

function addItem(id) {
    request = "/addToCart?id=" + id.toString();
    httpPost(request);
    updCntInfo();
}

function deleteItem(id) {
    request = "/removeFromCart?id=" + id.toString();
    httpPost(request);
    updCntInfo();
}

function deleteAllItems(id) {
    request = "/removeFromCartAll?id=" + id.toString();
    httpPost(request);
    updCntInfo();
}

function updCntInfo() {
    document.getElementById('cntOfItems').textContent = getCount();
}

function toCartPage() {
    document.location = '/Cart';
}


function httpGet(theUrl) {
    var xmlHttp = new XMLHttpRequest({ mozSystem: true });
    xmlHttp.open("GET", theUrl, false); // false for synchronous request
    xmlHttp.send();
    return xmlHttp;
}

function httpPost(theUrl) {
    var xmlHttp = new XMLHttpRequest({ mozSystem: true });
    xmlHttp.open("POST", theUrl, false); // false for synchronous request
    xmlHttp.send();
    return xmlHttp;
}
function JSON_Send(log_send, log_response, request) {
    //PrintS("<hr>");
    if (log_send == 1) PrintJSON("request", request);
    if (log_send == 2) PrintJSONb("request", request);
    var xhr = createXHR2();
    xhr.open("POST", svclnk, false);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhr.setRequestHeader('Accept', '*/*');
    xhr.setRequestHeader('Origin', 'http://localhost');
    var t1 = new Date();
    xhr.send(JSON.stringify(request));
    if (xhr.status != 200) {
        PrintJSONb("<font color=ff0000><u>error response</u></font>", JSON.parse(xhr.responseText));
        PrintTIME(xhr.statusText, t1);
        return Null;
    }
    if (log_response == 1) PrintJSON("response", JSON.parse(xhr.responseText));
    if (log_response == 2) PrintJSONb("response", JSON.parse(xhr.responseText));
    if ((log_response != 0) && (log_send != 0)) PrintTIME(xhr.statusText, t1);
    return eval("(" + xhr.responseText + ")");
}

function XML_Send(request) {
    PrintS("<hr>");
    PrintXML("request", request);
    var xhr1 = createXHR();
    xhr1.open("POST", svclnk, false);
    xhr1.setRequestHeader('Content-Type', 'text/xml;charset=UTF-8');
    xhr1.setRequestHeader('Accept-Language', 'en');
    xhr1.setRequestHeader('SOAPAction', '\"\"');
    var t1 = new Date();
    xhr1.send(request);
    PrintXML("response", xhr1.responseText);
    PrintTIME(xhr.statusText, t1);
    if (xhr1.status == 200) {
        return xhr1.responseXML;
    }
    else {
        return Null;
    }
}

function createXHR() {
    if (typeof XMLHttpRequest === 'undefined') {
        XMLHttpRequest = function () {
            try { return new ActiveXObject("Msxml2.XMLHTTP.6.0"); } catch (e) { }
            try { return new ActiveXObject("Msxml2.XMLHTTP.3.0"); } catch (e) { }
            try { return new ActiveXObject("Msxml2.XMLHTTP"); } catch (e) { }
            try { return new ActiveXObject("Microsoft.XMLHTTP"); } catch (e) { }
            throw new Error("This   browser does not support XMLHttpRequest.");
        };
    }
    return new XMLHttpRequest();
}

function createXHR1() {
    var ref = null;
    if (window.XMLHttpRequest) {
        ref = new XMLHttpRequest();
    } else if (window.ActiveXObject) { // Older IE.
        ref = new ActiveXObject("MSXML2.XMLHTTP.3.0");
    }
    return ref;
}

function createXHR2() {
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    return xmlhttp;
}

function PrintS(s) { document.body.innerHTML += s; }
function PrintP(p) { document.body.innerHTML += "\<img src=\"data:image\/png;base64," + p + "\"\/\>"; }
function PrintTIME(s, t1) { PrintS("<b><i>" + s + ": " + (new Date().getTime() - t1.getTime()) / 1000 + "</i></b> sec.<br>") }
function PrintJSON(str, obj) { PrintS(str + ":<p>" + unescape(JSON.stringify(obj).replace(/\\u/g, '%u').replace(/</g, "&lt;").replace(/>/g, "&gt;"))); }
function PrintJSONb(str, obj) { PrintS(str + ":<p><pre>" + unescape(JSON.stringify(obj, null, 4).replace(/\\u/g, '%u').replace(/</g, "&lt;").replace(/>/g, "&gt;")) + "</pre>"); }
function PrintXML(str, obj) { PrintS(str + ":<p>" + obj.replace(/</g, "&lt;").replace(/>/g, "&gt;") + "<br>"); }

