function printtime() {
    var d= new Date ();
    var hours= d.getHours();
    var mins= d.getMinutes();
    var secs= d.getSeconds();
    document.body.innerHTML=hours+":"+mins+":"+secs+":"}
setInterval(printtime,1000000)