// Tạo danh sách users
const users = [
    { name: 'User1', age: 25 },
    { name: 'User2', age: 22 },
    { name: 'User3', age: 30 },
    { name: 'User4', age: 17 },
    { name: 'User5', age: 28 },
];

// Hàm kiểm tra và hiển thị users có tuổi từ 18 đến 30
/*const displayUsersInRange = (userList, minAge, maxAge) => {
    const filteredUsers = userList.filter(user => user.age >= minAge && user.age <= maxAge);

    if (filteredUsers.length > 0) {
        console.log("Users có tuổi từ 18 đến 30:");
        filteredUsers.forEach(user => {
            console.log(`Name: ${user.name}, Age: ${user.age}`);
        });
    } else {
        console.log("Không có user nào có tuổi từ 18 đến 30.");
    }
};

// Gọi hàm để hiển thị users có tuổi từ 18 đến 30
displayUsersInRange(users, 18, 30); */

let filteredUsers = users.filter(x => x.age >=18 && x.age <=30);

console.log(filteredUsers);
