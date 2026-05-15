const person={
    firstName: "John",
    lastName: "Doe",
    age: 25,
    gender: "Male",
    occupation: "developer",
    nationality: "american",
    city: "New York",
    hobbies: ['reading','traveling','photography'],
    languages:['english','Spanish'],
    education: {
        degree: 'Bachelor',
        major: 'Computer Science',
        university: 'Harvard University'
    }
};

const {
    firstName,
    gender,
    languages,
    education,
    ...rest
} = person;

const student={
    firstName,
    gender,
    degree: education.degree,
    english: languages[0]
}
console.log(student);