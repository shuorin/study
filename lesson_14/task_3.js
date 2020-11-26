let student = {
    firstName: "Alex",
    lastName: "Petrov",
    age: 16,
    hobbies: ["tennis", "basketball", "football"],
    student: "High School"
}
function print(student) {
    let studentInfo = `
        First name: ${student.firstName}
        Last Name: ${student.firstName} 
        Age: ${student.age}
        Hobbies: ${student.hobbies}
        Study in: ${student.student} 
    `;
    console.log(studentInfo);
}

print(student);