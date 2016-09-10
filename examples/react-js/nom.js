/*

=============== Nom.js : A cookie Helper Class ===========
* Author : Rory Kermack
* Version: 1.4.3
* Website: codeanthology.com

@DWTFYL Licence

===========================================================

*/
export default {
    get: (cookieName) => {
        const name = `${cookieName}=`,
              cookies = document.cookie.split(';');

        for(var i = 0; i < cookies.length; i++){
            const cookie = cookies[i];
            while (cookie.charAt(0)==' ') cookie = cookie.substring(1);
            if(cookie.indexOf(name) == 0) return cookie.substring(name.length, cookie.length);
        }
    },
    bake: (cookieName, cookieValue, days) => {
        const theDate = new Date(),
        time = theDate.getTime(),
        days = ( days * 24 * 60 * 60 * 1000 );

        // Set cookie expiry time
        theDate.setTime(time + days);
        const expiry = `${expires}=${theDate.toUTCString()}`;

        // Set cookie
        document.cookie = `${cookieName}=${cookieValue};${expiry}`;
        console.log(document.cookie);
    },
    check: (cookieName) => {
        const cookie = this.get(cookieName),
              isPresent = (cookie !="" && typeof cookie !== "undefined") ? true : false;
        return isPresent;
    },
    delete: (cookieName) => {
        this.set(cookieName, "", -1);
    }
}
