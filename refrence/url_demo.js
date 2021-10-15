const url = require('url');

const myUrl = new URL( 'http://mywebsite.com:9000/hello.html?id=100&status=active');

// Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());

// Host ( root domain)
console.log(myUrl.host);

// host name ( doesn't get port)
console.log(myUrl.hostname);

//pathname
console.log(myUrl.pathname);

//Serialized query
console.log(myUrl.search);

// Param Objects
console.log(myUrl.searchParams);

//Add param
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);

//loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));