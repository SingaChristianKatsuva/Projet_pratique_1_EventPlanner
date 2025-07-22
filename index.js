let tableaux = document.getElementById("table_body");
let events = [];
let eventData = [];

class Evenement {
  constructor(time, session, contest) {
    this.time = time;
    this.session = session;
    this.contest = contest;
  }
}

let formulaire = document.getElementById("event_form");
let submit_button = document.getElementById("submit_button");

submit_button.addEventListener("click", (event) => {
  event.preventDefault();

  while (tableaux.firstChild) {
    tableaux.removeChild(tableaux.firstChild);
  }

  let formData = new FormData(formulaire, submit_button);

  if (formulaire) {
    alert("le formulaire ne peut pas etre vide");
  } else {
    for (const [key, value] of formData) {
      eventData.push(value);
    }

    let evenement = new Evenement(eventData[0], eventData[1], eventData[2]);
    events.push(evenement);
    eventData.splice(0);
    //console.log(events);

    for (event of events) {
      console.log(event);

      let nouvelleLigne = document.createElement("tr");
      let nouvelleDate = document.createElement("td");
      nouvelleDate.textContent = event.time;
      let nouvelleSession = document.createElement("td");
      nouvelleSession.textContent = event.session;
      let nouveauContest = document.createElement("td");
      nouveauContest.textContent = event.contest;

      nouvelleLigne.appendChild(nouvelleDate);
      nouvelleLigne.appendChild(nouvelleSession);
      nouvelleLigne.appendChild(nouveauContest);
      tableaux.appendChild(nouvelleLigne);
    }
    formulaire.reset();
  }
});
