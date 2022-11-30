let userName = "";
const toDoList = [];

function getReply(command) {
    if (typeof command !=="string" || command === "") {
        return `Error! Not a valid command`;
    } if (command === "Hello my name is Violeta" && userName === "") {
        userName = "Violeta";
        return `Nice to meet you ${userName}`;
    } else if (command === "Hello my name is Violeta" && userName === ""){
        userName="";
        return `Your name is already added`;
    } if (command === "What is your name?" && userName != "") {
        return `Your name is ${userName}`;
   
    }  else if ( command === "What is your name" && userName === "") {
        return "Your name is not mentioned";
    }  if (command === "Add fishing to my to do list" ) {
        toDoList.push("fishing");
        return "Fishing added to your to do list";
    }  if (command === "Add singing in the shower to my to do list") {
        toDoList.push("sing in the shower");
        return "Singing in the shower added to your to do list";
    } if (command === "Remove fisihing from my to do list") {
        const indexOftoDolistRemove = toDoList.indexOf("fishing");
        toDoList.splice(indexOftoDolistRemove, 1);
        return "Fishing removed from your to do list";
    }  if (command === "What is on my to do list") {
        return `There is ${toDoList.length} task left on your list: ${toDoList} `; 
    } if (command === "") {
        return `There is nothing on your to do list`
    } if (command === "What day is today?") {
        const today = new Date();
        const months = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sept",
            "Oct",
            "Nov",
            "Dec",
        ];
        return `Today is ${today.getDate()} of ${months[today.getMonth()]} ${today.getFullYear()}`;
    
    }  if (command.includes("what is")) {

        const numbers = command.match(/\d+/g);
        const operator = command.split(" ");
        let result;
        if (operator.includes("*")) {
            result = parseInt(numbers[0]) * parseInt(numbers[1]);
            return result;
        }
        else if (operator.includes("+")) {
            result = parseInt(numbers[0]) + parseInt(numbers[1]);
            return result;
        }
        else if (operator.includes("-")) {
            result = parseInt(numbers[0]) - parseInt(numbers[1]);
            return result;
        }
        else if (operator.includes("/")) {
            result = parseInt(numbers[0]) / parseInt(numbers[1]);
            return result;
        }
        
    } if (command.includes("Set a timer for")) {
        let myTimer = command.replace(/\D/g, "");
        let time = myTimer * 60000;
        setTimeout(function () {
            alert("Timer done");
        }, time);
        return "Timer is set";
    
    } 
    if (command === "Today is sunny day! What should i do?"){
     const activites =["go for the walk", "go swimming", "go running", "go biking", "go have a coffee with a firend"];
     const choice = activites[Math.floor(Math.random(activites) * activites.length)];
     return `You shoud ${choice}`;
    }
    

}

console.log(getReply("Hello my name is Violeta")); 
console.log(getReply("What is your name?")); 
console.log(getReply("Add fishing to my to do list")); 
console.log(getReply("Add singing in the shower to my to do list")); 
console.log(getReply("Remove fisihing from my to do list")); 
console.log(getReply("What is on my to do list")); 
console.log(getReply("What day is today?"));
console.log(getReply("What is 10/4 "));
console.log(getReply("Set a timer for 4 minutes"));
console.log(getReply("Today is sunny day! What should i do?"));