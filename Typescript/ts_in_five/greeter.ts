class Student{
    fullname: string;
    constructor(public firstName: string, public middleName: string, public lastName: string){
        this.fullname = firstName + " " + middleName + " " + lastName;
        //why is it named public like access modifier...
    }
}

interface Person{
    firstName: string,
    lastName: string,
}

let greeter = function(person: Person){
    return "Hello " + person.firstName + " " + person.lastName;
};

let user = new Student("jin","ho","hwang");

document.body.textContent = greeter(user);