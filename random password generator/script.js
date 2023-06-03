const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "123456789";
const symbolSet = "~!@#$%^&*()_+/";

const show = document.getElementById("show");
const totalchar = document.getElementById("total_char");
const upperInput = document.getElementById("upper-case");
const lowerInput = document.getElementById("lower-case");
const numberInput = document.getElementById("numbers");
const symbolInput = document.getElementById("symbols");

const getRandomData = (dataSet)=>{
    return dataSet[Math.floor(Math.random() * dataSet.length)]
}

//OR

// function getRandomData(dataSet){
//     return dataSet[Math.floor(Math.random() * dataSet.length)]
// }

//this function gives us random data from any set
//for eg:- getRandomData(upperSet) -> if we call then it will give some random data.->check it in console of search engine.
//similarly if we call getRandomData(numbers)-> then it will give any random number.
//now we have done Math.random()*dataset.length -> it will give data something like 2.4,6.3 so to make it proper we have use Math.floor() function.
//we are passing string so we have "return dataSet[]"".
//Also if we do not do Math.random() * dataset.length and if we only write Math.random() then it will always give only first character of any set we have pass.

const generatePassword = (password = "")=>{
    if(upperInput.checked){
        password +=getRandomData(upperSet);
    }
    if(lowerInput.checked){
        password +=getRandomData(lowerSet);
    }
    if(numberInput.checked){
        password +=getRandomData(numberSet);
    }
    if(symbolInput.checked){
        password +=getRandomData(symbolSet);
    }
    if(password.length < totalchar.value){
       return generatePassword(password);
    }

    show.innerHTML=truncateString(password,totalchar.value);
}

document.getElementById("btn").addEventListener("click",()=>{
    generatePassword();
})

//see if passwords length is less than total_char means if user wants the length of password as "10" then here first it makes password of length 4 then it will check that it is equal to total_char then it will stop otherwise again that function will be called and password will be pass as an parameter . now again it will generate password of length 4 so now total length will be 8. again it will check if equals then stop otherwise it will call again.

//now the other scene comes that if user wants of "10" then by 4,4,4 then it will make 12 length password so that we have to truncate it.

truncateString = (str,num)=>{
    if(str.length > num ){
        let subStr = str.substring(0,num);
        return subStr;
    }
    else{
        return str;
    }
}
