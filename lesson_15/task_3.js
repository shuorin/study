let student = {
    firstName: "Alex",
    lastName: "Petrov",
    age: 16,
    hobbies: ["tennis", "basketball", "football"],
    student: "High School",
    print: function() {
        console.log(`${student.firstName} ${student.lastName}. Age: ${student.age} y.o. Hobbies: ${student.hobbies} Study in ${student.student}.`);
    }
}

student.print();