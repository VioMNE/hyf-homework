//Flight booking fullname function
// Created a function called getFullname that returns a fullname with two parameters

function getFullname(firstname, surname) {
    return firstname + " " + surname;
    
}

console.log(getFullname("Benjamin", "Hughes")); // returns "Benjamin Hughes");

// using fullname1 and fullname2

const fullName1 = getFullname( 'Violeta', 'Pavetic')
const fullName2 = getFullname( 'Benjamin', 'Hughes')

console.log(fullName1);
console.log(fullName2);

//Formal fullname

function getFullname(firstname, surname, useFormalName) {
    let  fullName =  firstname + " " +  surname;
        if (useFormalName) {
        fullName='Lord '+fullName;
        }
    return(fullName);
        
    }
    
    const fullName3 = getFullname( 'Violeta', 'Pavetic', false)
    const fullName4 = getFullname( 'Benjamin', 'Hughes',true )

    console.log(fullName3);
    console.log(fullName4);



// Event application
// Created a function called eventDay
function getEventWeekday(eventDay) {
    const date = new Date ();
    const daysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let today = date.getDay ();
    let event = [(today + eventDay) % 7];

    return daysInWeek[event];
}

console.log(getEventWeekday(9)); // Logs out "Thursday"



//Weather wear

//Thought its fun to make a running weather wear :) I hope thats okay :)

function runningClothingRecommendation(weatherTemp) {

    if (weatherTemp < 0) {
        return " thermal long sleeves and tights, fleece jacket, light rain jacket, gloves and neck warmer ";
    }

    if (weatherTemp <= 5 ) {
        return " thermal long sleeves, running trousers, fleece pullover, gloves and headband";
    }

    if (weatherTemp < 10) {
        return " running top, running tights, running vest";
    }

    if (weatherTemp >10) {
        return " Running top, running shorts";
    }

}

const clothesToWear = runningClothingRecommendation(13);
console.log(clothesToWear);


//Student manager

//Created addStudentToClass function

const class07Students = [];
function addStudentToClass(studentName) {
  if (!studentName) {
      console.log('Please enter a name');
  } else if (class07Students.includes(studentName)) {
      console.log('Student' + studentName + 'is already in the class');
  } else if (studentName === 'Queen' || class07Students.length < 6) {
      class07Students.push(studentName);
  } else if (class07Students.length >= 6) {
      console.log('Cannot add more students to class');
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
addStudentToClass('Jelna');
addStudentToClass('Queen'); 



function getNumberOfStudents() {
  console.log('There are ' + class07Students.length + ' students in the class');
}

getNumberOfStudents();

