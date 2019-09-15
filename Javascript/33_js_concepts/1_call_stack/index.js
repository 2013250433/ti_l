function three(){
    console.log("I love JS");
}
function two(){
    three();
}
function one(){
    two();
}
function zero(){
    one();
    throw Error("Error!");
}
zero();

//Maximum call stack
function hello(){
    bye();
}
function bye(){
    hello();
}
hello();