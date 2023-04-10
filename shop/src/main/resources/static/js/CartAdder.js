let cartList = JSON.parse(getJSON()).counts;

function makeTable() {
    clearTable();
    updFinalPrice();
    cartList = JSON.parse(getJSON()).counts;

    for (let i = 0; i < getCartCnt(); i++) {
        addRow(getProductName(i), getProductID(i), getProductCnt(i), getProductTotalPrice(i))
    }
}

function getCartCnt() {
    return cartList.length;
}

function getProductID(productNum) {
    return cartList[productNum].productId;
}

function getProductCnt(productNum) {
    return cartList[productNum].count;
}

function getProductName(productNum) {
    return cartList[productNum].name;
}

function getProductTotalPrice(productNum) {
    return cartList[productNum].totalPrice;
}

function clearTable() {
    const table = document.getElementById("myTable");
    table.innerHTML = '<tbody></tbody>';
}

function addRow(name, id, count, price) {
    let tbody = document.getElementById('myTable').getElementsByTagName("tbody")[0];
    let row = document.createElement("tr");

    let productName = document.createElement("td");
    productName.appendChild(document.createTextNode(name));

    let productPrice = document.createElement("td");
    productPrice.appendChild(document.createTextNode(price));

    let btnDel = document.createElement("button");
    btnDel.appendChild(document.createTextNode("-"));
    btnDel.onclick = () => deleteItem(id);

    let productCnt = document.createElement("td")
    productCnt.appendChild(document.createTextNode(count));

    let btnAdd = document.createElement("button");
    btnAdd.appendChild(document.createTextNode("+"));
    btnAdd.onclick = () => addItem(id);

    let btnDelAll = document.createElement("button");
    btnDelAll.appendChild(document.createTextNode("x"));
    btnDelAll.onclick = () => deleteAllItems(id);


    row.appendChild(productName);
    row.appendChild(productPrice);
    row.appendChild(btnDel);
    row.appendChild(productCnt);
    row.appendChild(btnAdd);
    row.appendChild(btnDelAll);


    tbody.appendChild(row);
}

function updFinalPrice() {
    document.getElementById('finalPrice').innerHTML = '';
    document.getElementById('finalPrice').appendChild(document.createTextNode('Итоговая цена: ' + getWLCost()));
}

function getWLCost() {
    return httpGet("/CartCost").responseText;
}

function getJSON() {
    return httpGet("/CartCounts").responseText;
}

function addItem(id) {
    request = "/addToCart?id=" + id.toString();
    httpPost(request);
    makeTable();
    console.log(id);
}

function deleteItem(id) {
    request = "/removeFromCart?id=" + id.toString();
    httpDelete(request);
    makeTable();
    console.log(id);
}

function deleteAllItems(id) {
    request = "/removeFromCartAll?id=" + id.toString();
    httpDelete(request);
    makeTable();
    console.log(id);
}

function toShopPage() {
    document.location = '/shop';
}

document.getElementById('makePurchase').onclick = () => {
    request = '/submitOrder';
    httpPost(request);
    toShopPage();
}

function httpDelete(theUrl) {
    var xmlHttp = new XMLHttpRequest({ mozSystem: true });
    xmlHttp.open("DELETE", theUrl, false); // false for synchronous request
    xmlHttp.send();
    return xmlHttp;
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

document.getElementById('myTable').onload = makeTable();