const endDate ="6 July 2023 6:00 PM";

document.getElementById("end-date").innerText = endDate;//means whichever date we write here will shown over there in webpage.

const inputs = document.querySelectorAll('input');

const clock=()=>{
    const end = new Date(endDate);
    const now = new Date();
    // console.log(end);
    // console.log(now);
    const diff =  (end - now)/1000;

    if(diff < 0){
        return;
    }
    // console.log(Math.floor(diff/3600/24)); //it will come in milliseconds intially. to convert into seconds divide it by 1000
    inputs[0].value = Math.floor(diff/3600/24); //gives days
    // inputs[1].value = Math.floor(diff/3600/60);
    inputs[1].value = Math.floor(diff/3600)%24;// gives hours
    inputs[2].value = Math.floor(diff/60)%60;//gives minutes
    inputs[3].value = Math.floor(diff)%60;// gives seconds
 }

//or
// function clock(){

// }

//intial call to function clock
// clock(); 

setInterval(() => {
    clock()
}, 1000);

//1 day = 24 hrs
//1 hr = 60 mins
//60 mins = 3600 sec

//1 min = 60 sec
//60 min = ? 3600 sec 

//3600 sec = 60 min
//(60 min)? = 1 min

