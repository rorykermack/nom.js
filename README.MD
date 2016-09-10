# Nom.js
A quick & easy cookie helper class. Need to bake, retrieve, check or delete some cookies in your js project? No problem.
Get a cookie working in your app in under 5 minutes.

## Installation
* Clone / Download this repo. <br/>
* Add Nom.js to your project <br/>
* Bake some cookies <br/>
* Done. Nom Cookies! :) <br/>

## Overview
```
Nom = {
  get: func(${cookieName}),
  bake: func(${cookieName},${cookieValue},${valid for x days}),
  check: func(${cookieName}),
  delete: func(${cookieName})
}

```

## How To:
# Bake:
```
// Import or include
import Nom from 'nom';

// Sets 'test-cookie' to true for 1 day
Nom.bake('test-cookie', true, 1);

```
# Get:
```

// Gets cookie
const testCookie = Nom.get('test-cookie');
console.log(testCookie) // true

```

# Check:
```
// Checks Cookie
const testCookiePreset = Nom.check('test-cookie');
if(testCookiePresent) {
  // do stuff
}

```

# Delete:
```
// Deletes Cookie
Nom.delete('test-cookie');

```


## Contributing
It doesn't matter if you're a veteran or not. Everyone brings something awesome to the party so please contribute.<br/>
1. Fork it! <br/>
2. Create your feature branch: `git checkout -b my-new-feature` <br/>
3. Commit your changes: `git commit -am 'Add some feature'` <br/>
4. Push to the branch: `git push origin my-new-feature` <br/>
5. Submit a pull request :D <br/>

## Credits
Created and maintained by [@rorykermack](https://twitter.com/@rorykermack)
## License
[WTFPL](http://www.wtfpl.net/) (100% Open Source)
