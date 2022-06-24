//Item array removal

const names = [
    "Peter",
    "Ahmad",
    "Yana",
    "Kristina",
    "Rasmus",
    "Samuel",
    "Katrine",
    "Tala",
  ];
  const nameToRemove = "Ahmad";
  
  let remove = names.indexOf(nameToRemove);
  names.splice(remove, 1);
  
  console.log(names); 


  //When will we be there??

  const travelInformation = {
    speed: 50,
    destinationDistance: 432,
  };

  function approximateTimeOfArrival (speed, destinationDistance) {
      const decTime = (destinationDistance / speed);
      const hours =  Math.floor(decTime);
      const minTime = (decTime - hours) * 60;
      const minutes =  Math.floor(minTime);

      return `${hours} h and ${minutes} min`;
  }

  console.log(approximateTimeOfArrival(50, 432)); // 8 hours and 38 minutes


//Series duration of my life

const seriesDurations = [
    {
      title: "Grey's Anatomy",
      days: 11,
      hours: 21,
      minutes: 57,
    },
    {
      title: "Lost",
      days: 15,
      hours: 15,
      minutes: 57,
    },
    {
      title: "Friends",
      days: 19,
      hours: 18,
      minutes: 17,
    },
  ];


  let totalSeriesDurations = 0;

  function logOutSeriesText() {

      for (let i = 0; i < seriesDurations.length; i++) {
          const timeInMin = seriesDurations[i].days * 1440 + seriesDurations[i].hours * 60 +seriesDurations[i].minutes;
          const percentage = (timeInMin/ (80 * 525600)) * 100;

          console.log(` ${seriesDurations[i].title} took ${percentage.toFixed(3)} of my life` );

          totalSeriesDurations += percentage;
      }
      
  }

  logOutSeriesText();

  const totalAverageTime = totalSeriesDurations / seriesDurations.length;

  console.log(`In total it took ${totalAverageTime.toFixed(2)}% of my life`);


//NOnoN0nOYes (Note taking app)

//Save a note

const notes =[]

function saveaNote(content, id) {
    notes.push(content, id)
};

saveaNote ('Pick up groceries', 1)
saveaNote ('Do laundry', 2)

console.log(notes);

//Get a note

function getNote(id) {
    if (typeof id !== "number" || id === "") {
		return 'Error! Please add valid id' ;
	} else {
	for (let i = 0; i < notes.length; i++) {
		if (notes[i].id === id) {
			return notes[i];
		}
	}

}
}

const firstnote = getNote();
console.log(firstnote);

//Log out notes

function logOutNotesFormatted() {
    for ( let i=0; i < notes.length; i++) {
       format= console.log("the note with id: "+ notes[i].id + " has the following note: " + notes[i].content );
    }
    return format;
  }
  
  logOutNotesFormatted();

