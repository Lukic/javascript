var name ="Srdjan"; // String
var age = 37; // Number
var age2 = "37"; // String
var isMarried = true; // Bool
var skills= []; // Array

var tal1 = 1;
var tal2 = 1;

/// VAR = Goobal
// LET = Indenfor { }
// Const = PRIVAT / LÅST


let weekDay = "Tirsdag";
const totalDaysInAWeek = 7;

function getWeekDay(){

    console.log(totalDaysInAWeek);

    totalDaysInAWeek = 14;

    console.log(totalDaysInAWeek);

    let weekDay  = "Mandag";

    console.log(weekDay);

    if(isMarried){
        let weekDay ="bana";

        console.log(weekDay);
    }

}
getWeekDay();


console.log(weekDay);


//Array: Index : 0 , 1 , 2
/*
skills.push("PhP");
skills.push("MySQL");
skills.push("C#");
*/
/*
for (let index = 0; index < skills.length; index++) {

    document.getElementById("historie").innerText += skills[index] +"\n";
    
    
    //console.log(skills[index]);
    
}
*/
function addToDo(){

    if(document.getElementById("todo").value !=""){

        skills.push(document.getElementById("todo").value);

        showToDo();
    }
};


function showToDo(){

    document.getElementById("historie").innerText ="";

    for (let index = 0; index < skills.length; index++) {

        document.getElementById("historie").innerText += skills[index] +"\n";
    }
};

showToDo();