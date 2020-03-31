$(document).ready(() => {
    var atextBg9 = document.querySelector("#textbg9");
    
    function todaysDate(){
        var head = document.createElement("H4")
        head.innerHTML = moment().format('dddd, LL');
        document.getElementById("currentDay").appendChild(head)
    }
    todaysDate();

    function hour(){
        dateTime = moment().format('LT')
        textBg9 = moment(dateTime.currentTime).isBetween('2000', '2100'); //this is a hard set time so if its not between these numbers regardless it will come up as false
        // textBg9Future = moment(dateTime.currentTime).isBefore(textbg9);
        // I think these below have to be one if else statement so it can check for the future item
        if(textBg9 === false) {
            atextBg9.setAttribute("class", "form-control past")
        }
        if(textBg9 === true){
            atextBg9.setAttribute("class", "form-control present")
        }
        // if(textBg9Future === true){
        //     atextBg9.setAttribute("class", "form-control future")
        // }
    }
    hour();




    
});