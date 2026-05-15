const sv1={
    firstName: "John",
    gender: "male",
    degree:"Bachelor",
    english:"English"
}
const sv2={
    firstName: "",
    gender: "male",
    degree:"",
    english:"English"
}

function showInformation(person){
    const {
        firstName,
        degree
    } = person;

    const result = {
        firstName : firstName || "Quan",
        degree: degree || "NA"
    };
    console.log(result);
}
showInformation(sv1);
showInformation(sv2);