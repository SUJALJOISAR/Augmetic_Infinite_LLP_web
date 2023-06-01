const apiKey= "9e2f0e8eef8f57584f39de36353ca9d5";
// const apiKey2="a18e6d19a0b5cd1bb23e433638286f57";
const apiUrl= "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
// const apiUrl2="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".d-flex input")
const searchBtn = document.querySelector(".d-flex .btn")
// const firstvar=document.querySelectorAll('.table-responsive .text-start')[0];


async function checkWeather(city){
	const response  = await fetch(apiUrl + city + `&appid=${apiKey}`);
	var data = await response.json();

	console.log(data); 

	document.querySelector("#cityName").innerHTML=searchBox.value;
	document.querySelector("#temp").innerHTML = Math.round(data.main.temp);
	document.querySelector("#min_temp").innerHTML = Math.round(data.main.temp_min) + "°C";
	document.querySelector("#max_temp").innerHTML = Math.round(data.main.temp_max) + "°C";
	document.querySelector("#humidity").innerHTML = Math.round(data.main.humidity) + "%";
	document.querySelector('#cloud_pct').innerHTML=data.clouds.all;
	document.querySelector('#sunrise').innerHTML=data.sys.sunrise;
	document.querySelector('#sunset').innerHTML=data.sys.sunset;
	document.querySelector('#wind_speed').innerHTML=data.wind.speed;
	document.querySelector('#wind_degrees').innerHTML=data.wind.deg + "°";
	document.querySelector('#feels_like').innerHTML=data.main.feels_like;
}

// async function checkoWeather(city2){
// 	const response1  = await fetch(apiUrl2 + city2 + `&appid=${apiKey2}`);
// 	var data1 = await response1.json();

// 	console.log(data1); 

// 	// document.querySelector("#cityName").innerHTML=searchBox.value;
// 	document.querySelector("#temp2").innerHTML = Math.round(data1.main.temp);
// 	document.querySelector("#min_temp2").innerHTML = Math.round(data1.main.temp_min) + "°C";
// 	document.querySelector("#max_temp2").innerHTML = Math.round(data1.main.temp_max) + "°C";
// 	document.querySelector("#humidity2").innerHTML = Math.round(data1.main.humidity) + "%";
// 	document.querySelector('#cloud_pct2').innerHTML=data1.clouds.all;
// 	document.querySelector('#sunrise2').innerHTML=data1.sys.sunrise;
// 	document.querySelector('#sunset2').innerHTML=data1.sys.sunset;
// 	document.querySelector('#wind_speed2').innerHTML=data1.wind.speed;
// 	document.querySelector('#wind_degrees2').innerHTML=data1.wind.deg + "°";
// 	document.querySelector('#feels_like2').innerHTML=data1.main.feels_like;
// }





searchBtn.addEventListener("click",()=>{
	checkWeather(searchBox.value);
})

searchBtn.addEventListener("click",()=>{
	checkoWeather(firstvar.value);
})










//checkWeather();//it is necessary to call this function so that data can be displayed.
// `` this symbol is called bactic


