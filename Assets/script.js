$(document).ready(() => {
    const aTextBg9 = document.querySelector("#textbg9");
    const aTextBg10 = document.querySelector("#textbg10");
    const aTextBg11 = document.querySelector("#textbg11");
    const aTextBg12 = document.querySelector("#textbg12");
    const aTextBg1 = document.querySelector("#textbg1");
    const aTextBg2 = document.querySelector("#textbg2");
    const aTextBg3 = document.querySelector("#textbg3");
    const aTextBg4 = document.querySelector("#textbg4");
    const aTextBg5 = document.querySelector("#textbg5");
    
    

    
    function todaysDate(){
        let head = document.createElement("H4")
        head.innerHTML = moment().format('dddd, LL');
        document.getElementById("currentDay").appendChild(head)
    }
    todaysDate();


    function hour(){
        dateTime = moment().format('kmm')
        console.log(dateTime)
        if(Number(dateTime) < 900) {
            aTextBg9.setAttribute("class", "form-control future")
            aTextBg10.setAttribute("class", "form-control future")
            aTextBg11.setAttribute("class", "form-control future")
            aTextBg12.setAttribute("class", "form-control future")
            aTextBg1.setAttribute("class", "form-control future")
            aTextBg2.setAttribute("class", "form-control future")
            aTextBg3.setAttribute("class", "form-control future")
            aTextBg4.setAttribute("class", "form-control future")
            aTextBg5.setAttribute("class", "form-control future")
        }
        else if(Number(dateTime) < 1000) {
            aTextBg9.setAttribute("class", "form-control present")
            aTextBg10.setAttribute("class", "form-control future")
            aTextBg11.setAttribute("class", "form-control future")
            aTextBg12.setAttribute("class", "form-control future")
            aTextBg1.setAttribute("class", "form-control future")
            aTextBg2.setAttribute("class", "form-control future")
            aTextBg3.setAttribute("class", "form-control future")
            aTextBg4.setAttribute("class", "form-control future")
            aTextBg5.setAttribute("class", "form-control future")
        }
        else if(Number(dateTime) < 1100) {
            aTextBg9.setAttribute("class", "form-control past")
            aTextBg10.setAttribute("class", "form-control present")
            aTextBg11.setAttribute("class", "form-control future")
            aTextBg12.setAttribute("class", "form-control future")
            aTextBg1.setAttribute("class", "form-control future")
            aTextBg2.setAttribute("class", "form-control future")
            aTextBg3.setAttribute("class", "form-control future")
            aTextBg4.setAttribute("class", "form-control future")
            aTextBg5.setAttribute("class", "form-control future")
        }
        else if(Number(dateTime) < 1200) {
            aTextBg9.setAttribute("class", "form-control past")
            aTextBg10.setAttribute("class", "form-control past")
            aTextBg11.setAttribute("class", "form-control present")
            aTextBg12.setAttribute("class", "form-control future")
            aTextBg1.setAttribute("class", "form-control future")
            aTextBg2.setAttribute("class", "form-control future")
            aTextBg3.setAttribute("class", "form-control future")
            aTextBg4.setAttribute("class", "form-control future")
            aTextBg5.setAttribute("class", "form-control future")
        }
        else if(Number(dateTime) < 1300) {
            aTextBg9.setAttribute("class", "form-control past")
            aTextBg10.setAttribute("class", "form-control past")
            aTextBg11.setAttribute("class", "form-control past")
            aTextBg12.setAttribute("class", "form-control present")
            aTextBg1.setAttribute("class", "form-control future")
            aTextBg2.setAttribute("class", "form-control future")
            aTextBg3.setAttribute("class", "form-control future")
            aTextBg4.setAttribute("class", "form-control future")
            aTextBg5.setAttribute("class", "form-control future")
        }
        else if(Number(dateTime) < 1400) {
            aTextBg9.setAttribute("class", "form-control past")
            aTextBg10.setAttribute("class", "form-control past")
            aTextBg11.setAttribute("class", "form-control past")
            aTextBg12.setAttribute("class", "form-control past")
            aTextBg1.setAttribute("class", "form-control present")
            aTextBg2.setAttribute("class", "form-control future")
            aTextBg3.setAttribute("class", "form-control future")
            aTextBg4.setAttribute("class", "form-control future")
            aTextBg5.setAttribute("class", "form-control future")
        }
        else if(Number(dateTime) < 1500) {
            aTextBg9.setAttribute("class", "form-control past")
            aTextBg10.setAttribute("class", "form-control past")
            aTextBg11.setAttribute("class", "form-control past")
            aTextBg12.setAttribute("class", "form-control past")
            aTextBg1.setAttribute("class", "form-control past")
            aTextBg2.setAttribute("class", "form-control present")
            aTextBg3.setAttribute("class", "form-control future")
            aTextBg4.setAttribute("class", "form-control future")
            aTextBg5.setAttribute("class", "form-control future")
        }
        else if(Number(dateTime) < 1600) {
            aTextBg9.setAttribute("class", "form-control past")
            aTextBg10.setAttribute("class", "form-control past")
            aTextBg11.setAttribute("class", "form-control past")
            aTextBg12.setAttribute("class", "form-control past")
            aTextBg1.setAttribute("class", "form-control past")
            aTextBg2.setAttribute("class", "form-control past")
            aTextBg3.setAttribute("class", "form-control present")
            aTextBg4.setAttribute("class", "form-control future")
            aTextBg5.setAttribute("class", "form-control future")
        }
        else if(Number(dateTime) < 1700) {
            aTextBg9.setAttribute("class", "form-control past")
            aTextBg10.setAttribute("class", "form-control past")
            aTextBg11.setAttribute("class", "form-control past")
            aTextBg12.setAttribute("class", "form-control past")
            aTextBg1.setAttribute("class", "form-control past")
            aTextBg2.setAttribute("class", "form-control past")
            aTextBg3.setAttribute("class", "form-control past")
            aTextBg4.setAttribute("class", "form-control present")
            aTextBg5.setAttribute("class", "form-control future")
        }
        else if(Number(dateTime) < 1800) {
            aTextBg9.setAttribute("class", "form-control past")
            aTextBg10.setAttribute("class", "form-control past")
            aTextBg11.setAttribute("class", "form-control past")
            aTextBg12.setAttribute("class", "form-control past")
            aTextBg1.setAttribute("class", "form-control past")
            aTextBg2.setAttribute("class", "form-control past")
            aTextBg3.setAttribute("class", "form-control past")
            aTextBg4.setAttribute("class", "form-control past")
            aTextBg5.setAttribute("class", "form-control present")
        }
        else if(Number(dateTime) < 2500) {
            aTextBg9.setAttribute("class", "form-control past")
            aTextBg10.setAttribute("class", "form-control past")
            aTextBg11.setAttribute("class", "form-control past")
            aTextBg12.setAttribute("class", "form-control past")
            aTextBg1.setAttribute("class", "form-control past")
            aTextBg2.setAttribute("class", "form-control past")
            aTextBg3.setAttribute("class", "form-control past")
            aTextBg4.setAttribute("class", "form-control past")
            aTextBg5.setAttribute("class", "form-control past")
        }
    }
    hour();

    function updateText(){
        document.getElementById("textbg9").value = localStorage.getItem("textbg9")
        document.getElementById("textbg10").value = localStorage.getItem("textbg10")
        document.getElementById("textbg11").value = localStorage.getItem("textbg11")
        document.getElementById("textbg12").value = localStorage.getItem("textbg12")
        document.getElementById("textbg1").value = localStorage.getItem("textbg1")
        document.getElementById("textbg2").value = localStorage.getItem("textbg2")
        document.getElementById("textbg3").value = localStorage.getItem("textbg3")
        document.getElementById("textbg4").value = localStorage.getItem("textbg4")
        document.getElementById("textbg5").value = localStorage.getItem("textbg5")
    }
    updateText();
    
});

function button(textArea){
    console.log(document.getElementById(textArea).value)
    localStorage.setItem(textArea, document.getElementById(textArea).value)
}

function empty(){
    let clearSchedule = confirm("Are you sure you want to clear your schedule?");
    if(clearSchedule === true) {
        localStorage.clear();
        location.reload();
    }
    
}