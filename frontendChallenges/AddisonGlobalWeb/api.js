function endPoint(url){
    let url = new XMLHttpRequest()
    url.open("GET", url, false)
    url.send()
    return url.responseText
}
var url = "http://www.mocky.io/v2/5bc3b9cc30000012007586b7"