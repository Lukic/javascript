// Variabler

// String / Text
// Tal / Int
// Bool / True / False
// Array / Multi container

// String
var userName= "Jespers";
var box = "My name is ";
var finalString = box + userName;

// Int
var userAge = 18;
var userAge2 = "18";

// Bool
var isMale = true;

// Array
var skils = ["HTML","CSS","JavaScript","PHP"];
//Index        0      1        2         3       
skils.push("C#");
skils.push("MSSQL");
skils.push("MySQL");

var language = ["Danish", "English","Dutch"];

var weekdays = ["Mon", "Tue","Wen"];

// If statement ( True / False )
if(userAge === userAge2){
    //True

    console.log("JA");
}else{
    //False

    console.log("Nej");
};

// For løkker
// Start , IF, Callback 
for (let start=0; start < skils.length; start++ ) {
    
    console.log(skils[start]);

};

for (let start=0; start < language.length; start++ ) {
    
    console.log(language[start]);

};

// Functioner
function listView(data,name){
    
    console.log("------- "+ name +" -------");
    for (let start=0; start < data.length; start++ ) {
    
        console.log(data[start]);
    
    };
    console.log("--------------");

};


listView(skils,"Skils");
listView(weekdays,"Weekdays");
listView(language,"Languages");
