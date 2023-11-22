function student (name, age, address, email, phone){
    this.name = name;
    this.age = age;
    this. addess = address;
    this.email = email;
    this.phone = phone;
}

const A = new student("Tran Van A", 20, "Ha Noi", "a@gmail.com", 123);
const B = new student("Tran Van B", 21, "Ha Noi", "b@gmail.com", 456);
const C = new student("Tran Van C", 22, "Ha Noi", "c@gmail.com", 789)

console.table([A, B, C]);