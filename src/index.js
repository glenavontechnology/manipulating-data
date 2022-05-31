import { Alert } from "bootstrap";
import { Button } from "bootstrap";
import { companiesData } from "./companies-data";
import { extraRecord } from "./extraRecord";


//Grab the 'before' element from the html
const before = document.getElementById("before");


//TODO: Extract an element from the array.
//const manipulatedData = companiesData[0].fieldData.City;

//TODO: Add elements to beginning and end of array.
//const manipulatedData = companiesData.pop();
//const manipulatedData = companiesData.unshift(extraRecord);
//const manipulatedData = companiesData.push(extraRecord);

//TODO: Remove Elements from end of array.
//TODO: Create a new array from old data.
//TODO: Filter for a certain state.



/*
const manipulatedData = companiesData.filter(filteredData);
const manipulatedCount = manipulatedData.length;
console.log ("Filtered Index Count",manipulatedCount)
*/

//TODO: Find the first element with a certain name.
//TODO: Create a new array with just elements of a certain state.

const filteredData = function (record) {
 // console.log("RECORD", record);
  const state = "ca";
  return record.fieldData.State.toLowerCase() === state;
};

const mappedData = function (c){
  const obj = {
    companyName: c.fieldData.CompanyName,
    postCode: c.fieldData.Zip,
    Id: c.fieldData.Id
  }
  return obj ;
};


// Grab the 'after' element from the html
const after = document.getElementById("after");

//Create a button for each record...
const createButton = function (record){
console.log(record);
//Create an html element of type 'button':
const button = document.createElement("button");
//Set the label:
button.innerText = record.companyName;
button.className = "col-12 mt-2 btn btn-sm btn-primary";
button.onclick = function(x){
  alert("Company:" + record.companyName + ", ZipCode:" + record.postCode + ",ID:" + record.Id )
};
//draw the button(s) into the bit of the screen 'after':
after.appendChild(button);

}


const manipulatedData = companiesData.filter(filteredData).map(mappedData);
//const appendedData = manipulatedData.unshift(extraRecord);
manipulatedData.forEach(createButton);


//TODO: Create buttons for each record.
//functions are here





before.innerHTML = JSON.stringify(companiesData, null, 2);
//after.innerHTML = JSON.stringify(manipulatedData, null, 2);
