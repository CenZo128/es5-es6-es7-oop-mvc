let nameStudents = ["Aca","Ekel","Stipen"]
let gradeStudents = [100,90,80]
let lulusStudents = [true,true,true]

let student = ["Aca",100,true]
    // ["Ekel",90,true],
    // ["Stipen",80,true]

//Object Literal
let student1 = {
    name : "Aca",
    grade : 100,
    isGraduate : true
}
let student2 = {
    name : "Ekel",
    grade : 90,
    isGraduate : true
}
let student3 = {
    name : "Stipen",
    grade : 80,
    isGraduate : true
}


// console.log(student1.name)
// console.log(student1["grade"])
// console.log(student1.isGraduate)

function convertToObject(student){
    let result = {}

    result.name = student[0];
    result.grade = student[1];
    result.isGraduate = student[2];

    return result
}

console.log(convertToObject(student))