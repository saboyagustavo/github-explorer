type User = {
    name: string;
    email: string;
    address: {
        city: string;
        state?: string;
    };
};

function displayGreetings(user) {
    return `Welcome ${user.name}, your e-mail is ${user.email}
        Your city is ${user.address.city} and your state ${user.address.state}`;
}

const user = {
    name: 'John Doe',
    email: 'john@doe.com',
    address: {
        city: 'San Francisco',
        state: 'CA',
    },
};
const message = displayGreetings(user);

//    City - State
