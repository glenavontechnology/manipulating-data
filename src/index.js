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
  console.log("RECORD", record);
  const state = "tx";
  return record.fieldData.State.toLowerCase() === state;
};

const mappedData = function (record){
  const obj = {
    companyName: record.fieldData.CompanyName,
    postCode: record.fieldData.Zip
  }
  return obj ;
};

const manipulatedData = companiesData.filter(filteredData).map(mappedData);
//const appendedData = manipulatedData.unshift(extraRecord);

//TODO: Create buttons for each record.
//functions are here



// Grab the 'after' element from the html
const after = document.getElementById("after");
before.innerHTML = JSON.stringify(companiesData, null, 2);
after.innerHTML = JSON.stringify(manipulatedData, null, 2);
