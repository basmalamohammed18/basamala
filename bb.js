//Question1
let num = Number(prompt('Enter Number'))
for (let i =1; i<=10;i++){
console.log(`${num}*${i}=${num*i}`);
}
//Questin2
for (let i=1;i<=50;i++){
    if(i % 5 == 0){
        console.log(i);
        
    }
}
//Question3
let i=1
while (i<=50) {
    if (i % 2 ==0) {
        console.log(i);
        
    }
}
//Question4
let count=10;
do{
    console.log(count);
    count;
}while(count>=1){
    console.log("lift off!");  
}
//Question5
const greet =(name) >= `Hello, ${name}!`;{
console.log(greet("basmala"));
}
//Question6
math.random();
console.log(math.floor(math.random()*10));
//Question7
let scores = [85, 92 , 78, 90, 88]
let highest = math.max(...scores)
let lowest = math.min(...scores)
console.log(`highest:${highest}, lowest: ${lowest}`);
//Question8
let temp=-4.7;
console.log(math.abs(temp));
console.log(math.ceil(temp));
console.log(math.floor(temp));
console.log(math.round(temp));
//Question9
let fullname=" basmala mohammed"
let cleaned=fullname.trim();
console.log(cleaned.lenght);
console.log(cleaned.touppercase());
console.log(cleaned.tolowercase());
console.log(cleaned.indexof(" "));
//Question10
let names =["basant","basmala","rody","nour"]
let randomname= names [math.floor(math.random()*names.lenght)]
console.log(randomname);
//Question11
let employees=[
    {name:"basant", age:23,salary:4000},
    {name:"mohamed", age:26,salary:5000},
    {name:"Nour", age:22,salary:5500},
];
for (let i=0; i<employees.lenght;i++){
    console.log(employees(i).name);
    console.log(employees(i).age);
    console.log(employees(i).salary);
}