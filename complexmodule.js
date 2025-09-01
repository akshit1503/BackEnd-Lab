const config = {
    database: {
        host: 'localhost',
        port: 27017,
        name: 'myAppDB'
    },
    apiKeys: {
        google: 'your-google-api-key',
        stripe: 'your-stripe-api-key'
    }
};

function calculateSum(a, b) {
    return a + b;
}

const userOperations = {
    createUser: function(username, email) {
        console.log(`Creating user: ${username} with email: ${email}`);
        return { id: Math.floor(Math.random() * 1000), username, email };
    },
    getUserById: function(id) {
        console.log(`Fetching user with ID: ${id}`);

        return { id: id, username: 'New User', email: 'new@gmail.com' };
    }
};
exports.appConfig = config;
exports.addNumbers = calculateSum;
exports.users = userOperations;
