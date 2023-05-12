fetch("kronEllerMynt.json").then((response) => response.json()).then((json) => {


    // Her henter jeg alt jeg trenger fra html siden som jeg trenger og gjør dem til variabler
    var poeng = document.querySelector("#poeng");
    var resetbtn = document.querySelector(".resetbutton");
    var myntResultat = document.querySelector("#myntResultat")
    var textResultat = document.querySelector("#textResultat");
    var counter = 0;

    // Her henter jeg de to myntene man kan trykke på og gjør dem til variabler
    var img1 = document.querySelector(".bilde1");
    var img2 = document.querySelector(".bilde2");

    // var random = Math.floor(Math.random() * 2)
    var imgarray = [img1, img2]
    var winner = imgarray[Math.floor(Math.random() * imgarray.length)]
    console.log(winner);


    // Her gir jeg img tag i html bilde linken fra json filen
    console.log(json[0].images.kron);
    img1.src = json[0].images.kron
    img2.src = json[0].images.mynt


    // Dette er IF koden for img1, hvis du trykker på knappen og det er riktig så får du poeng, hvis ikke mister du poeng
    img1.addEventListener('click', function(){
        var winner = imgarray[Math.floor(Math.random() * imgarray.length)]
        if(img1 == winner){
            counter++
            poeng.innerHTML = counter
            textResultat.innerHTML = "Du vinner"
            myntResultat.innerHTML = `<img src="${json[0].images.kron}" alt="Bilde av kron eller mynt">` 
        }
        else{
            counter--
            poeng.innerHTML = counter
            textResultat.innerHTML = "Du taper"
            myntResultat.innerHTML = `<img src="${json[0].images.mynt}" alt="Bilde av kron eller mynt">` 
        }
    })

    // Dette er IF koden for img2, hvis du trykker på knappen og det er riktig så får du poeng, hvis ikke mister du poeng
    img2.addEventListener('click', function(){
        var winner = imgarray[Math.floor(Math.random() * imgarray.length)]
        if(img2 == winner){
            counter++
            poeng.innerHTML = counter
            textResultat.innerHTML = "Du vinner"
            myntResultat.innerHTML = `<img src="${json[0].images.mynt}" alt="Bilde av kron eller mynt">` 

        }
        else{ 
            counter--
            poeng.innerHTML = counter
            textResultat.innerHTML = "Du taper"
            myntResultat.innerHTML = `<img src="${json[0].images.kron}" alt="Bilde av kron eller mynt">` 
        }
    })

    resetbtn.addEventListener('click', function(){
        window.location.reload()
    })
})