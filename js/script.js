var para=document.querySelector(".para")
//wrinting the functionality of the function  "result (data)" 
//which is called in the "fetchapi(word)" function


function result(data){
    para.innerHTML="";
    var name=document.querySelector(".name")
var category=document.querySelector(".category")
var instructions=document.querySelector(".instructions")
var alcoholic=document.querySelector(".alcoholic") //selecting the html elements

name.innerHTML = "";
            category.innerHTML = ""; // clearing the previous details
            instructions.innerHTML = "";
            alcoholic.innerHTML = "";
if(data.drinks===null){
para.innerHTML="Drink not found pal...try another drink"
} //logging an error message if there is no data available for the word in the api
else{


           

var drink=data.drinks[0] //iterating through the data using for each 
                               //data -> drinks -> details of the drinks(which is mentioned as "drink" to iterate through each value)
    name.innerHTML=`Name:   ${drink.strDrink}`
category.innerHTML=`Category:   ${drink.strCategory}`
instructions.innerHTML= `Instructions:  ${drink.strInstructions}`
alcoholic.innerHTML=`Alcoholic:  ${drink.strAlcoholic}`}  //ading the details of the data to html tags for displaying



    }


//writing the functionallity of the called function "fetchapi()" 
//which is called in the event listeners


function fetchapi(word){   //the input box's value"[e.target.value]" is passed as argument for "word" argument        
     
fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${word}`) //fetching the url by promise
  .then(response => {  
    if (!response.ok) {
      throw new Error('Network response was not ok');//if there is no response from the api then logging the error message
    }
    return response.json();// if there is response from the api we are converting it into json 
  })
  .then(data => {
    console.log(data)    // logging the data for reference
   result(data)          // calling a function "result()" and passing the obtained data as the arguement
    
  })
  .catch(error => {
    console.error('There was a problem with your fetch operation:', error);
    para.innerHTML="cant find the details"
  });}//if the data is not recieve we are throwing an error message



//adding eventlistener for keyboard 
//for input box(1)

var input=document.querySelector(".inputbox")  //selecting the input box
input.addEventListener("keyup",(e)=>{          //adding event listeners
    if(e.key=="Enter"&&e.target.value){        //enter key is selected
      fetchapi(e.target.value)                 // a function is called and the value of the input box is passed as an attribute- when enter key is pressed
    }                                          
})
