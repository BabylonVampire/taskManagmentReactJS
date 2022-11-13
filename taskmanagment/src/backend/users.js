import User from './usersClass';
//ТЕСТ

let users = {};

let activeUser = {activeUser: ''};


//TEST
let testUser1 = new User('1', 1, 1, 1, '1');
users[1] = testUser1;

let testUser2 = new User('2', 2, 2, 2, '2');
users[2] = testUser2;
//TEST


export {activeUser, users};