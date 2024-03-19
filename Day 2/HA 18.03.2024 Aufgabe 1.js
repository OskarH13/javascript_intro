function bewertePunktzahl(punktzahl) {
    if (punktzahl > 90) {
        console.log("sehr gut");
    } else if (punktzahl >= 80 && punktzahl <= 90) {
        console.log("gut");
    } else if (punktzahl >= 70 && punktzahl < 80) {
        console.log("befriedigend");
    } else if (punktzahl >= 60 && punktzahl < 70) {
        console.log("ausreichend");
    } else {
        console.log("nicht bestanden");
    }
}

bewertePunktzahl(95); // sollte "sehr gut" ausgeben
bewertePunktzahl(85); // sollte "gut" ausgeben
bewertePunktzahl(75); // sollte "befriedigend" ausgeben
bewertePunktzahl(65); // sollte "ausreichend" ausgeben
bewertePunktzahl(55); // sollte "nicht bestanden" ausgeben

