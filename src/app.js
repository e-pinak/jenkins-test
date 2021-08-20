const axios = require("axios");

let users = axios.get('https://jsonplaceholder.typicode.com/users');
users.then(response=>console.log(response));
