console.log("Hejsan internt javascript");

//för att kunna identifiera HTML-element från body måste sidan läsas
window.onload = function
//identifierar ett HTML-element
minParagraf = dokument.getElementbyId("min-paragraf");
console.log(minParagraf);
//ändrar stilsättning på HTML-element
minParagra.style.colo = "red";

//identifierar ett annat HTML-element 
klickbarparagraf = dokument.getElementbyId("klickbar-paragraf");
//lägga till en händelsehanterate till detta element
klickbarparagraf.addEventlistener("click",function) {
    console.log(klickbarparagraf);
    //ändrar stilsättning på det klickade HtML-elementet
    klickbarparagraf.style.color = "blue";
};
