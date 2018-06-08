function calc() {
    var champ1 = document.getElementById("champ1").value;
    var champ2 = document.getElementById("champ2").value;
    var champ3 = document.getElementById("champ3").value;
    var champ4 = document.getElementById("champ4").value;
    var etat = 0;
    
    //Question: 2 a
    if (champ1 == "" || champ2 == "" || champ3 == "") {
        alert("Les champs sont obligatoires..!");
        return 0;
    }
    //Question: 2 b
    var patternn = /^[A-Za-z]{2}[0-9]{3}$/;
    if (patternn.test(champ1) != true) {
        alert("Le format de champ 'colis' n'est pas valide");
        return 0;
    }
    //Question: 2 c
    if (isNaN(champ2) || isNaN(champ3)) {
        alert("La distance 'ou' le poids ne sont pas des champs numériques..!");
        return 0;
    }
    
    //Question: 3 a
    if (champ3 < 10) {
        var prix = champ2 * 0.5;
        document.getElementById("champ4").value = prix;
    }
    //Question: 3 b
    if (champ3 >= 10) {
        var prix = champ2 * (champ3 / 10) * 0.3;
        document.getElementById("champ4").value = prix;
    }
    //Question: 3 c
    if (document.getElementById("EXP").checked) {
        prix_teau = prix + (prix / 20) * 100;
        document.getElementById("champ4").value = prix_teau;
    }
}

