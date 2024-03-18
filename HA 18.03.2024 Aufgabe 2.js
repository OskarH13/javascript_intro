function bewerteAlter(alter) {
    if (alter < 6) {
        console.log("Die Fahrt ist kostenlos.");
    } else if (alter >= 6 && alter <= 17) {
        console.log("Man fährt zum Kinderpreis.");
    } else if (alter >= 18 && alter <= 66) {
        console.log("Man fährt zum Vollpreis.");
    } else {
        console.log("Man fährt zum Seniorenpreis.");
    }
}


