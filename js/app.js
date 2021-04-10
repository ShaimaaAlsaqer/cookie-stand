'use strict';
let globalTime = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'];
//function to cal the random custemer number
let parentTable = document.getElementById('tableContainer');
//create table tag 'the big tag'
let table = document.createElement('table');
//append table tag to the parentTable
parentTable.appendChild(table);

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;

  //April.5.2021 lab 7
  //table

}
let locationArray = [];
//constractor for all Location
function LocationCons(locationName, min, max, avg) {
  this.locationName = locationName;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.total = 0;
  this.cookesTotal = []; //cookies minmax
  this.calAvgCookesPirHour=this.calAvgCookesPirHour();
  this.render = this.render1();
  locationArray.push(this);

}

LocationCons.prototype.sumCustomerPerHour = function () {
  //random    //for
  //cal the num cookies, then multiply it with avg
  let cookes=[];
  for (let i = 0; i < globalTime.length; i++) {
    //this.cookesTotal[i].push(randomNumber(this.min, this.max));
    cookes[i]=randomNumber(this.min, this.max);

  }
  return cookes;
  // return randomNumber(this.min, this.max);

};
// cookesTotalPirHour();
LocationCons.prototype.calAvgCookesPirHour = function () {
  //for loop move
  for (let i = 0; i < globalTime.length; i++) {
    //this.cookesAvgPirHour.push(this.sumCustomerPerHour * this.avg);
    let cookesAvgPirHour=parseInt(Math.floor(this.sumCustomerPerHour()[i] * this.avg));
    this.cookesTotal.push(cookesAvgPirHour);
    this.total += parseInt(this.cookesAvgPirHour);
  }
};
headerTable();

LocationCons.prototype.render1=function () {
  let totalCol=0;
  // create row 'tr' to store inside it
  let storeTr = document.createElement('tr');
  // append the store row inside table tag
  table.appendChild(storeTr);

  //create first td tag
  let firstTr = document.createElement('td');
  // append td tag into store row
  storeTr.appendChild(firstTr);
  // give td tag a value
  firstTr.textContent = this.locationName;

  for (let i = 0; i < globalTime.length; i++) {
    // make td tag for every hour
    let tdEveryHour = document.createElement('td');
    //append td tag 'tdEveryHour' into store row 'storeTr'
    storeTr.appendChild(tdEveryHour);
    //give text content of the avg cookies per hour
    tdEveryHour.textContent = this.cookesTotal[i];
    //added
    totalCol+=parseInt(this.cookesTotal[i]);

  }

  //make total td for every location
  let tdTotal = document.createElement('td');
  //append total td into store row
  storeTr.appendChild(tdTotal);
  // give value to text content
  tdTotal.textContent = totalCol;

}


let seattle = new LocationCons('seattle', 23, 65, 6.3);
console.log(seattle);
// seattle.cookesTotalPirHour();
//console.log(seattle.cookesTotal);
let Tokyo = new LocationCons('Tokyo', 3, 24, 1.2);
console.log(Tokyo);
// console.log(Tokyo.cookesTotalPirHour);
let Dubai = new LocationCons('Dubai', 11, 38, 3.7);
console.log(Dubai);
// console.log(Dubai.cookesTotalPirHour);
let Paris = new LocationCons('Paris', 20, 38, 2.3);
console.log(Paris);
// console.log(Paris.cookesTotalPirHour);
let Lima = new LocationCons('Lima', 2, 16, 4.6);
console.log(Lima);
// console.log(Lima.cookesTotalPirHour());
// console.log(Lima.cookesTotal);

console.log('location', locationArray);



//this function is for header in the table
function headerTable() {
  let headerRow = document.createElement('tr');
  //append tr into table
  table.appendChild(headerRow);
  //first th
  let thTag = document.createElement('th');
  headerRow.appendChild(thTag);
  thTag.textContent = 'name';
  //make the heading th
  for (let i = 0; i < globalTime.length; i++) {
    //create th
    let hourThTag = document.createElement('th');

    //append the th to the heading row
    headerRow.appendChild(hourThTag);

    //give a text of contant th
    hourThTag.textContent = globalTime[i];
  }
  //create last th
  let lastThTag = document.createElement('th');
  // appenging the last th in header row"tr"
  headerRow.appendChild(lastThTag);
  //give a text of contant to the last th
  lastThTag.textContent = 'daily location total';
}

function funFooter() {
  //create footer row
  let footerRow = document.createElement('tr');
  //append footer row to the table
  table.appendChild(footerRow);

  //make first th to the footer row
  let firstFooterTh = document.createElement('th');
  // append firstFooterTh to footerRow
  footerRow.appendChild(firstFooterTh);
  //give text content to firstFooterTh
  firstFooterTh.textContent = 'totals';
  let Bigtotal = 0;
  // for loop to calculate the big total
  for (let i = 0; i < globalTime.length; i++) {
    let cookesAvgPirHourInFooter = 0;
    for (let j = 0; j < locationArray.length; j++) {
      cookesAvgPirHourInFooter += parseInt(locationArray[j].cookesTotal[i]);
      Bigtotal += parseInt(locationArray[j].cookesTotal[i]);

    }
    console.log(parseInt(cookesAvgPirHourInFooter));
    //make second th to the footer row
    let secondFooterTh = document.createElement('th');
    // append secondFooterTh to footerRow
    footerRow.appendChild(secondFooterTh);
    //give text content to second FooterTh
    secondFooterTh.textContent = cookesAvgPirHourInFooter;
  }
  //make final th to the footer row
  let finalTotalTh = document.createElement('th');
  // append finalTh to footerRow
  footerRow.appendChild(finalTotalTh);
  //give text content to final FooterTh
  finalTotalTh.textContent = Bigtotal;

}
funFooter(); //I call the function here to put the the total be the last row in the table



/*

*/

//function to the footer "last row in the table"


/*
// headerTable(); //I call the function here to put the the header be the first row in the table
for (let i = 0; i < location.length; i++) {
  location[i].cookesAvgPirHour();
  location[i].render();
}
*/
