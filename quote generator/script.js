// const api_url = "https://type.fit/api/quotes";

// async function getquote(url){
//     const response = await fetch(url);
//     var data = await response.json;
//     console.log(data);
// }

// getquote(api_url);

// const quote = document.getElementById("quote");
// const author = document.getElementById("author");

//   fetch("https://type.fit/api/quotes")
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//     });

// quote.innerHTML=data.text;
//     author.innerHTML=data.author;

const text=document.getElementById("quote");
const author=document.getElementById("author");
const tweetbtn=document.getElementById("tweetbtn");

async function getquote(){
    //api for quotes
    var url="https://type.fit/api/quotes";

    //fetch the data from api
    const response=await fetch(url);
    console.log(typeof response);
    //convert response to json and store it in quotes array
    var data=await response.json();

    //generates a random number bet 0 and the length of the quotes
    const indx=Math.floor(Math.random()*data.length);

    //store the quote present at the randomly generated index
    const quote=data[indx].text;

    //store the author of the respective index
    const auth=data[indx].author;

    if(auth==null)
    {
        author="Anonymous";
    }

    //function to dynamically display the quote and author
    text.innerHTML=quote;
    author.innerHTML=auth;

    //tweet the quote
    tweetbtn.href="https://twitter.com/intent/tweet?text="+quote+" ~ "+auth;
}

getquote();