/*

=============== Nom.js : A cookie Helper Class ===========
* Author : Rory Kermack
* Version: 1.4.3
* Website: codeanthology.com

@DWTFYL Licence

*/
var Nom = {
    get : function(cookieName) {
        var name = cookieName+"=",
            cookies = document.cookie.split(';');

        for(var i = 0; i < cookies.length; i++){
            var cookie = cookies[i];
            while (cookie.charAt(0)==' ') cookie = cookie.substring(1);
            if(cookie.indexOf(name) == 0) return cookie.substring(name.length, cookie.length);
        }
    },
    set : function(cookieName,cookieValue,days) {
        var theDate = new Date(),
        time = theDate.getTime(),
        days = (days*24*60*60*1000);

        // Set cookie expiry time
        theDate.setTime(time + days);
        var expiry = "expires="+theDate.toUTCString();

        // Set cookie
        document.cookie = cookieName+"="+cookieValue+";"+expiry;
        console.log(document.cookie);
    },
    check : function(cookieName) {
        var cookie = this.get(cookieName),
            isPresent = (cookie !="" && typeof cookie !== "undefined") ? true : false;
        return isPresent;
    },
    delete : function(cookieName){
        this.set(cookieName,"",-1);
    }
}
