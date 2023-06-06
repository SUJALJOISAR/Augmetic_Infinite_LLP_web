//Get to Dom elements
const gameContainer = document.querySelector('.container');
userResult = document.querySelector('.user_result img');
cpuResult = document.querySelector('.cpu_result img');
result = document.querySelector('.result');
optionimages = document.querySelectorAll('.option_image');

// console.log(gameContainer,userResult,cpuResult,result,optionimages);

//Loop through each option image element
optionimages.forEach((image,index) => {
    image.addEventListener("click",(e)=>{
        image.classList.add("active");

        userResult.src = cpuResult.src = "rock.png";
        result.textContent = "Wait...";

        //Loop through each option image again
        optionimages.forEach((image2,index2)=>{
            //if the current index dosen't match with the clicked index
            //Remove the "active" class from the other option images
            // index !== index2 && image2.classList.remove("active");
            //OR 
            if(index != index2)
            {
                image2.classList.remove("active");
            }
        });

        gameContainer.classList.add("start");

        let time = setTimeout(() => {
            gameContainer.classList.remove("start");    
        //get the source of the clicked option image
        let imageSrc=e.target.querySelector("img").src;
        //set the user image to the clicked option image
        userResult.src=imageSrc;
        // console.log(imageSrc);

        //generate a random number from 0 to 2
        let randomnumber = Math.floor(Math.random()*3);
        // console.log(randomnumber);

        //create an array of CPU image options
        let cpuimage = ['rock.png','paper.jpg','scissors.png'];
        //set the cpu image to a random option from an array
        cpuResult.src=cpuimage[randomnumber];

        //Assign a letter value to the CPU option(R for rock,P for Paper, S for Scissors)
        let cpuValue = ["R", "P", "S"][randomnumber];
        //Assign a letter value to the clicked option(based on index)
        let userValue = ["R", "P", "S"][index];

        //create an object with all possible outcomes
        let outcomes = {
            RR:"Draw",
            RP:"Cpu",
            RS:"User",
            PP:"Draw",
            PR:"User",
            PS:"Cpu",
            SS:"Draw",
            SR:"Cpu",
            SP:"User",
        };

        //Look up the outcome value based on user and Cpu options
        let outcomeValue = outcomes[userValue + cpuValue];

        //Display the Result
        result.textContent = userValue === cpuValue ? "Match Draw" : `${outcomeValue} Won!!`;
        // console.log(userValue,cpuValue);
        }, 2500);
    })
});