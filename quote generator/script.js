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

//steps
// 1.The entire code for the working of the app is written within the getquote() function. In this function, we will fetch the data from the API. Since fetching the data from API is an asynchronous process so we will use the async function to fetch the data and store it in the array.

// Step 2:- Store the API in an url variable and fetch the data from it using fetch() method. Now the fetch() method returns a promise, to handle it we use await keyword. Whenever the promise gets resolved save the data in the response variable.

// Step 3:- Convert the response to JSON format and it also returns a promise so again we need to add await keyword to handle the promise and whenever the promise gets resolved we will save the data in the allQuotes array.

// Step 4:- JavaScript has useful built-in functions: Math.floor() and Math.random(). We will use Math.random() method to generate a number between 0 and a total number of quotes fetched from the API(length of allQuotes array) and Math.floor() method to rounds a number DOWNWARDS to the nearest integer. Now, with the help of this number, we will be able to access a single object from an array.

// Step 5:- Each element stored in the array is an object which has the property text and author. Store the quote present at the randomly generated index and also store the author of the respective quote.

// Step 6:- Making the author anonymous if no author is present and once the values are ready, let's display it in the HTML elements which we made before. This is done by obtaining them using the document.getElementById method and insert the values inside it using the innerHTML property.

// Step 7:- Add some attribute to the Twitter button to tweet the quote 

// Step 8:- Call the function getquote() at the end to start function at exact reloading of the page.