var daysContainer = document.getElementById("days");
var currentDate = new Date();
var selectedDate = currentDate;
var selectedDayBlock = null;
var globalEventObj = {};



function createCalendar(date, side) {
   globalEventObj[date.toDateString()] = [];
   var currentDate = date;
   var startDate = new Date(currentDate.getFullYear(), currentDate.getMonth());

   var monthTitle = document.getElementById("month");
   var monthName = currentDate.toLocaleString("fr-FR", {
      month: "long"
   });
   var yearTitle = document.getElementById("year");
   var yearNum = currentDate.getFullYear();
   monthTitle.innerHTML = `${monthName}`;
   yearTitle.innerHTML = `${yearNum}`;


   daysContainer.className = "days";
   

   setTimeout(() => {
      daysContainer.innerHTML = ""; // on vide les jours

      let currentRow = createRow();
      daysContainer.appendChild(currentRow);

      // Jours vides avant le premier jour du mois
      for (let i = 1; i < (startDate.getDay() || 7); i++) {
         currentRow.appendChild(createEmptyDay());
      }

      var lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

      for (let i = 1; i <= lastDay; i++) {
         if (currentRow.children.length >= 7) { // Si la ligne comporte 7 ligne, on crée une nouvelle ligne
            currentRow = createRow();
            daysContainer.appendChild(currentRow);
         }

         let dayDiv = document.createElement("div");
         dayDiv.className = "day";
         let h1 = document.createElement("h1");
         h1.textContent = i;
         dayDiv.appendChild(h1);

         let currentDayDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), i);

         // Sélection du jour courant
         if (currentDayDate.toDateString() === selectedDate.toDateString()) {
            dayDiv.classList.add("selected");
            dayDiv.children[0].classList.add("selected");
            selectedDayBlock = dayDiv;
         }
         
         // Marquer les événements
         if (globalEventObj[currentDayDate.toDateString()]) {
            let mark = document.createElement("div");
            mark.className = "day marked";
            dayDiv.appendChild(mark);
         }

         currentRow.appendChild(dayDiv);
      }

      // Compléter la dernière ligne avec des cases vides
      while (currentRow.children.length < 7) {
         currentRow.appendChild(createEmptyDay());
      }

      daysContainer.className = "days";

   }, !side ? 0 : 270);
}

function createRow() {
   let row = document.createElement("div");
   row.className = "row";
   return row;
}

function createEmptyDay() {
   let emptyDay = document.createElement("div");
   emptyDay.className = "day";
   return emptyDay;
}

createCalendar(currentDate);