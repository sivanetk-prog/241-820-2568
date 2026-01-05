

/*array
let a = 10 
let b = 20
let c = 50
console.log('a:',a,'b:',b,'c:',c)

let ages =[10,20,50]// array 3 time
console.log('ages',ages)
console.log('ages[1]',ages[1])

//แทนที่
ages=[15,25]
console.log('ages lits',ages)
//ต่อ
ages.push[35]
console.log('ages after push',ages)

//
ages.pop()
console.log('ages after pop',ages)
*/

/*
//
let ages = [24,30,35,40,45]
console.log('Ages',ages)

let fruit=['apple','banana','cherry']
console.log('Fruit',fruit)
fruit.push('mango')
console.log('Fruit after push',fruit)
console.log('first fruit',fruit.length)

for(let i =0;i < fruit.length;i++){
    console.log('Fruit at index s($)',fruit[i])
}
*/

/*
//
let student1 = [{
    age:30,
    name:"john",
    grade:'A'
},{
    age:30,
    name:"beee",
    grade:'A'
}]
console.log(student1)
console.log('name',student1.name)
console.log('age',student1.age)
console.log('grade',student1.grade)

for(let i =0;i< student1.length;i++){
    console.log("student"+[i+1]+":")
console.log('name'+student1[i].name)
console.log('age',student1[i].age)
console.log('grade',student1[i].grade)

}

student1.push({
    age:28,
    name:"mike",
    grade:'C'
})
console.log("Added",student1[student1.length-1])

student1.pop()
console.log("Remove",student1)
*/

/*
//function
let score1 = 10 
let score2 = 80
//ประกาศฟังก์ชัน
function calculate_Grade(score){
if(score >= 80 ){
    grade='A'
}else if(score >= 70){
    grade='B'
}else if(score >= 60){
    grade='C'
}else if(score >= 50){
    grade='D'
}else{
    grade='F'
}
return grade
}
//เรียกใช้ฟังก์ชัน calculate_Grade เพื่อตรวจสอบเกรด
let grade1 = calculate_Grade(score1)
let grade2 = calculate_Grade(score2)
console.log('Score1:',score1,'Grade1:',grade1)
console.log('Score2:',score2,'Grade2:',grade2)
*/   

//array 
/*
let score = [95,67,80,45,72]
for(let i =0;i < score.length;i++){
    console.log('`Score ${i+1}`',score[i])
}  
score= score.map((s) => {
    return s - 10
})

score.forEach(($ => {
    console.log('Score:',$)
}))
*/
/*
let score = [95,67,80,45,72]
let ner5score = []

for(let i =0;i < score.length;i++){
    console.log(score[i])
    if(score[i] >= 60){
        ner5score.push(score[i])
    }
}
ner5score.forEach((ns) => {
    console.log('New Score:'+ ns)
 }) 
*/

/*
let score = [90,80,70,60,50]
let newscore = []

for(let i =0;i < score.length;i++){
    console.log(score[i])
}
let ner5score = score.filter(function(score){
    return score >= 70
})
newscore.forEach((ns) => {
    console.log('New Score:'+ ns)
 }) 
*/


let students = [
    {name:'John',age:20,grade:'A'},
    {name:'Bee',age:22,grade:'B'},
    {name:'Mike',age:21,grade:'C'}
]
console.log('Student List:',students[0])

let student = students.find((s)=>{
    return(s.name === 'Mike')
})

let doubledAgeStudents = students.map((s)=>{
    s.age = s.age * 2
    return s
})

let highGradeStudents = students.filter((s)=>{
    return (s.grade === 'A')
})
console.log('Found Student:',student)
console.log('Doubled Age Students:',doubledAgeStudents)
console.log('High Grade Students:',highGradeStudents)