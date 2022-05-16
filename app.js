let submit=document.querySelector('.submit');
let form = document.querySelector('form');
let temp=document.querySelector('.temp');
let nomi = document.querySelector('.name');
let condition=document.querySelector('.condition');
let search = document.querySelector('.search');
let icon =document.querySelector('.icon');
let cloud =document.querySelector('.cloud');
let humidity =document.querySelector('.humidity');
let wind =document.querySelector('.wind');
let weatherApp=document.querySelector('.weather-app')


let api_id='cbe3dd267a18f6c89943b3eff94f1ed7';
//   input value =".add"



//   search co.adduntry
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let cityName=  search.value;
    function info(){
        const api_link=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=cbe3dd267a18f6c89943b3eff94f1ed7`
        
       fetch(api_link).then((e)=>{
           return e.json()
          }).then((newdata)=>{
             weatherData(newdata)
          })
    }
              if(cityName==""){
                           alert("An error occurred!  Enter a city name here. Then we will tell you the weather information of this city !!!")

                         
              }
              else{
                  info()
            if(cityName=="New york" || cityName=="new york"){
                weatherApp.style.background=`linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)) ,url('./img/New\ york.avif ')`;
                weatherApp.style.backgroundRepeat="no-repeat";
                weatherApp.style.backgroundSize='100%'
            }
            if(cityName=="Moscow" || cityName=="moscow"){
                weatherApp.style.background=` linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)) ,url('./img/moskov.jpg') `;
                weatherApp.style.backgroundRepeat="no-repeat";
                weatherApp.style.backgroundSize='100%';
                
            }
            if(cityName=="Paris" || cityName=="paris"){
                weatherApp.style.background=` linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)) ,url('./img/paris.jpg ') `;
                weatherApp.style.backgroundRepeat="no-repeat";
                weatherApp.style.backgroundSize='100%';
                
            }
            if(cityName=="Tokyo" || cityName=="Tokyo"){
                weatherApp.style.background=` linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)) ,url('./img/tokiyo.jpg ') `;
                weatherApp.style.backgroundRepeat="no-repeat";
                weatherApp.style.backgroundSize='100%';
                
            }
            if(cityName=="Tashkent" || cityName=="tashkent"){
                weatherApp.style.background=` linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)) ,url('./img/tashkent.jpg ') `;
                weatherApp.style.backgroundRepeat="no-repeat";
                weatherApp.style.backgroundSize='100% 100%';
        
            }
   }})

//  berilgan davlatlar uchun
      document.addEventListener('click',(e)=>{   
            const arrayCountry = [' New york',
                'Seul','Paris','Tokyo','Tashkent','Moscow']  
    
            if(e.target.classList=='city newYork')
            {
                Fetchfunktion(arrayCountry[0]);
                cityName='New york'
                weatherApp.style.background=`linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2)) ,url('./img/newYork.jpg ')`;
                weatherApp.style.backgroundRepeat="no-repeat";
                weatherApp.style.backgroundSize='100%  100%'
                weatherData();
                
            }
            if(e.target.classList=='city seul')
            {
                Fetchfunktion(arrayCountry[1]);
                cityName='Seul'
                weatherApp.style.background=`linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2)) ,url('./img/Seul2.jpg')`;
                weatherApp.style.backgroundRepeat="no-repeat";
                weatherApp.style.backgroundSize='100%'
                weatherData();
                
            }
            if(e.target.classList=='city paris')
            {
                Fetchfunktion(arrayCountry[2]);
                cityName='Paris'
                weatherApp.style.background=`linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2)) ,url('./img/paris2.jpg ')`;
                weatherApp.style.backgroundRepeat="no-repeat";
                weatherApp.style.backgroundSize='100%'
            }
            if(e.target.classList=='city tokyo')
            {
                Fetchfunktion(arrayCountry[3]);
                cityName='tokyo'
                weatherApp.style.background=`linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)) ,url('./img/tokyo2.jpg ')`;
                weatherApp.style.backgroundRepeat="no-repeat";
                weatherApp.style.backgroundSize='100%'
                
                
            }
            if(e.target.classList=='city tashkent')
            {
                Fetchfunktion(arrayCountry[4]);
                cityName='Tashkent'
                weatherApp.style.background=`linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2)) ,url('./img/tashkent.jpg')`;
                weatherApp.style.backgroundRepeat="no-repeat";
                weatherApp.style.backgroundSize='100% 100%'
            }
            if(e.target.classList=='city moscow')
            {
                Fetchfunktion(arrayCountry[5]);
                cityName='Moscow'
                weatherApp.style.background=`linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2)) ,url('./img/moskov.jpg')`;
                weatherApp.style.backgroundRepeat="no-repeat";
                weatherApp.style.backgroundSize='100%'
            }
          function Fetchfunktion(name){
            const api_link=`https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=cbe3dd267a18f6c89943b3eff94f1ed7`
    
            fetch(api_link).then((e)=>{
                return e.json()
               }).then((newdata)=>{
                  weatherData(newdata)
               })
          }
        })
    function weatherData(e){
        temp.innerHTML=Math.round(e.main.temp)+"&#176;"
        nomi.innerHTML=e.name
        condition.innerHTML=e.weather[0].main
        icon.src=`https://openweathermap.org/img/wn/${e.weather[0].icon}@2x.png`
        cloud.textContent=e.clouds.all+'%'
        humidity.textContent=e.main.humidity+'%'
        wind.textContent=Math.round(e.wind.speed)+"km/h"
       }


