//Flight booking fullname function
// Created a function called getFullname that returns a fullname with two parameters

function getFullname(firstname, surname) {
     if (firstname === "" || surname === "" ) {
        return `Please enter a valid name`
    } 
    return `firstname surname`;
    
}

console.log(getFullname("Benjamin", "Hughes")); // returns "Benjamin Hughes");

// using fullname1 and fullname2

const fullName1 = getFullname( "Violeta", "Pavetic")
const fullName2 = getFullname( "Benjamin", "Hughes")
const fullName5 = getFullname("Please enter a valid name")

console.log(fullName1);
console.log(fullName2);
console.log(fullName5);

//Formal fullname

function getFullname(firstname, surname, useFormalName) {
    let  fullName =  firstname + " " +  surname;
        if (useFormalName) {
        fullName='Lord '+fullName;
        } 
    return(fullName);
        
    }
    
    const fullName3 = getFullname( "Violeta", "Pavetic", false)
    const fullName4 = getFullname( "Benjamin", "Hughes",true )

    console.log(fullName3);
    console.log(fullName4);
   
    getFullname("");



// Event application
// Created a function called eventDay
function getEventWeekday(eventDay) {
    const date = new Date ();
    const daysInWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = date.getDay ();
    const event = (today + eventDay) % 7;

    return daysInWeek[event];
}

console.log(getEventWeekday(9)); // Logs out "Thursday"



//Weather wear

//Thought its fun to make a running weather wear :) I hope thats okay :)

function runningClothingRecommendation(weatherTemp) {

    if (weatherTemp <= 0) {
        return " thermal long sleeves and tights, fleece jacket, light rain jacket, gloves and neck warmer ";
    }

    else if (weatherTemp <= 10 ) {
        return " thermal long sleeves, running trousers, fleece pullover, gloves and headband";
    }

    else if (weatherTemp <= 15) {
        return " running top, running tights, running vest";
    } 
    
    else  (weatherTemp > 20)
        return " Running top, running shorts";

    
    

}

const clothesToWear = runningClothingRecommendation(11);
console.log(clothesToWear);


//Student manager

//Created addStudentToClass function

const class07Students = [];
function addStudentToClass(studentName) {
  if (!studentName) {
      return "Please enter a name";
  } else if (class07Students.includes(studentName)) {
      return `Student ${studentName}  is already in the class`;
  } else if (studentName === 'Queen' || class07Students.length < 6) {
      class07Students.push(studentName);
  } else if (class07Students.length >= 6) {
      console.log("Cannot add more students to class");
  } else {
      class07Students.push(studentName);
  }
}

addStudentToClass();
addStudentToClass('Violeta');
addStudentToClass('Marija');
addStudentToClass('Milos');
addStudentToClass('Mirko');
addStudentToClass('Petar');
addStudentToClass('Jelena');
addStudentToClass('Queen'); 



function getNumberOfStudents() {
  console.log(`There are  ${class07Students.length} students in the class`);
}

getNumberOfStudents();

