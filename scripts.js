//document.cookie = "clicked = yes;"
function addFive(){
    let val = document.getElementById("level").value
    let x = val + 50;
    val = x;
}
function addSum(){
    let val = document.getElementById("testbar").value
    let x = val + 50;
    document.getElementById("testbar").value = x;
}
document.cookie = "val = " + document.getElementById("testbar").value + ";";
//not my code
function getCookie(name) {
    // Split cookie string and get all individual name=value pairs in an array
    var cookieArr = document.cookie.split(";");
    
    // Loop through the array elements
    for(var i = 0; i < cookieArr.length; i++) {
        var cookiePair = cookieArr[i].split("=");
        
        /* Removing whitespace at the beginning of the cookie name
        and compare it with the given string */
        if(name == cookiePair[0].trim()) {
            // Decode the cookie value and return
            return decodeURIComponent(cookiePair[1]);
        }
    }
    
    // Return null if not found
    return null;
}

document.getElementById("testbar").value = getCookie(val);
