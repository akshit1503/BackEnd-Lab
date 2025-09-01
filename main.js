
const { appConfig, addNumbers, users } = require('./complexModule');

console.log('Database Host:', appConfig.database.host);
console.log('Google API Key:', appConfig.apiKeys.google);

console.log('Sum of 5 and 7:', addNumbers(5, 7));

const newUser = users.createUser('Akshit Singh', 'akshitsingh153@gmail.com');
console.log('New User:', newUser);

const fetchedUser = users.getUserById(newUser.id);
console.log('Fetched User:', fetchedUser);
