/*Write a function that stores information about a car in a Object. 
The function should always receive a manufacturer and a model name.
 It should then accept an arbitrary number of keyword arguments.
  Call the function with the required information and two other name-value pairs,
   such as a color or an optional feature.
 Print the Object that’s returned to make sure all the information was stored correctly.*/


 type car_info={
    manufacturer:string;
    model_name:string;
    [key:string]:any
 }
 function car(manufacturer:string, model_name:string, otherinfo: {[key:string]:any} ): car_info {
 return{
    manufacturer,
     model_name ,
     ...otherinfo
 } 
 
 }
 let CarInfo=car('Toyota','Camry', {color:'aqua', year:'2021'})
 console.log(CarInfo)
 