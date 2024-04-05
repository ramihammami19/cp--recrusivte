// cp recuscivte
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) ) {
        return true;
    } else {
        return false;
    }
}



let years =[2024,2000,2020,2200]; 
    for (let i = 0; i< years.length; i++) {
        
        
   if (isLeapYear(years[i])) {
    console.log(years[i] + " est une année bissextile.");
} else {
    console.log(years[i] + " n'est pas une année bissextile.");
}
} 

//  qu 2
const chaud = [ "maryoul nos" , "sbadri" , "chourt"]
const froid = [ "kabout" , "maryoul souf" , "mryoul nos" , "mryoul nos", "bot"   ]

function ichtelbes(let) {
let ra = "s5oun"
let ry = "barda"
if (let == ra) {
    return chaud
    
}    
else{
    return froid
}
}
console.log(ichtelbes("s5oun"));
// qe 3

function tickcenima(age) {
    if (age <=12) {
        return "10dt"
        
    }
    else if ((13<age )&&(age<17)){
        return "15dt"
    }
    else if (age>=18){
        return "20dt"
    }
    
}
console.log(tickcenima(20));

// qe 4
function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}


const n = 8;
console.log(`The ${n}th Fibonacci number is:`, fibonacci(n));