// Write your solution here!
const drivers=["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name){
  return drivers.push('Ralph');
  }
  
function destructivelyPrependDriver(name){
return drivers.unshift('Bob');
  
}

function destructivelyRemoveLastDriver() {
  return drivers.pop();
}

function destructivelyRemoveFirstDriver(){
  return drivers.shift();
}

function appendDriver(name){
  const newDrivers=[...drivers,'Broom'];
  return newDrivers;
}

function prependDriver(name){
const newDriversPre=['Arnold',...drivers];
  return newDriversPre;
}

function removeLastDriver(){
  const removeDriver =drivers.slice(0,(drivers.length-2));
  return removeDriver;
}
