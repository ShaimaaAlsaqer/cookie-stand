'use strict';
let globalTime = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'];
let hour = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
const Seattle = {
    locationName: 'Seattle',
    Min: 23,
    max: 65,
    avg: 6.3,
    arr: [],
    arrMul: [],
    totalSum:0,
    //calculate a random number of customers for each hour:
    calAvg1: function () {
        for (let i = 0; i < globalTime.length; i++) {
            this.arr.push(randomNumber(23, 65));
        }
    },
    mularr: function(){
        for(let i=0;i<globalTime.length;i++){
            this.arrMul.push(Math.floor(this.arr[i]* this.avg));
            this.totalSum+= this.arrMul[i];
        }
        
    }

}
//get the parent element by Id
let parent1= document.getElementById('parent1');
// console.log((parent));
//create a child element
let child=document.createElement('h3');
// console.log(child);
//append child to the parent
parent1.appendChild(child);
//give text content
child.textContent='Seattle';

//create another child ul element to show the avg in html
let child2=document.createElement('ul');
// console.log(child1);
//append child2 to the parent
parent1.appendChild(child2);

//create another child li element to show the avg in html
Seattle.calAvg1();
Seattle.mularr();
for(let i=0;i<globalTime.length;i++){

let child3=document.createElement('li');
//append child3 to the child2
child2.appendChild(child3);
//give text content
child3.textContent= globalTime[i]+' : '+ Seattle.arrMul[i]+ ' cookies';
}
//create another child li element to show the total in html
let total =document.createElement('li');

//append total to the child2
child2.appendChild(total);
total.textContent= `total : ${this.totalSum} cookies`;


const Tokyo = {
    locationName: 'Tokyo',
    Min: 3,
    max: 24,
    avg: 1.2,
    arr: [],
    arrMul: [],
    totalSumT: 0,
    //calculate a random number of customers for each hour:
    calAvg1: function () {
        for (let i = 0; i < globalTime.length; i++) {
            this.arr.push(randomNumber(3, 24));
        }
    },
    mularr: function(){
        for(let i=0;i<globalTime.length;i++){
            this.arrMul.push(Math.floor(this.arr[i]* this.avg));
            this.totalSumT+= this.arrMul[i];
        }
        
    },

}
//get the parent element by Id
let parentT= document.getElementById('parentT');
// console.log((parent));
//create a child element
let childT=document.createElement('h3');
// console.log(child);
//append child to the parent
parent1.appendChild(childT);
//give text content
childT.textContent='Tokyo';

//create another child ul element to show the avg in html
let childT2=document.createElement('ul');
// console.log(child1);
//append child2 to the parent
parentT.appendChild(childT2);

//create another child li element to show the avg in html
Tokyo.calAvg1();
Tokyo.mularr();
for(let i=0;i<globalTime.length;i++){

let childT3=document.createElement('li');
//append child3 to the child2
childT2.appendChild(childT3);
//give text content
childT3.textContent= globalTime[i]+' : '+ Tokyo.arrMul[i]+ ' cookies';
}
//create another child li element to show the total in html
let totalT =document.createElement('li');

//append total to the child2
childT2.appendChild(totalT);
totalT.textContent= `total : ${this.totalSumT} cookies`;



const Dubai	 = {
    locationName: 'Dubai',
    Min: 11,
    max: 38,
    avg: 3.7,
    arr: [],
    arrMul: [],
    totalSumD: 0,
    //calculate a random number of customers for each hour:
    calAvg1: function () {
        for (let i = 0; i < globalTime.length; i++) {
            this.arr.push(randomNumber(11, 38));
        }
    },
    mularr: function(){
        for(let i=0;i<globalTime.length;i++){
            this.arrMul.push(Math.floor(this.arr[i]* this.avg));
            this.totalSumD+= this.arrMul[i];
        }
        
    },

}
//get the parent element by Id
let parentD= document.getElementById('parentD');
// console.log((parent));
//create a child element
let childD=document.createElement('h3');
// console.log(child);
//append child to the parent
parentD.appendChild(childD);
//give text content
childD.textContent='Dubai';

//create another child ul element to show the avg in html
let childD2=document.createElement('ul');
// console.log(child1);
//append child2 to the parent
parentD.appendChild(childD2);

//create another child li element to show the avg in html
Dubai.calAvg1();
Dubai.mularr();
for(let i=0;i<globalTime.length;i++){

let childD3=document.createElement('li');
//append child3 to the child2
childD2.appendChild(childD3);
//give text content
childD3.textContent= globalTime[i]+' : '+ Dubai.arrMul[i]+ ' cookies';
}
//create another child li element to show the total in html
let totalD =document.createElement('li');

//append total to the child2
childD2.appendChild(totalD);
totalD.textContent= `total : ${this.totalSumD} cookies`;



const Paris	 = {
    locationName: 'Paris',
    Min: 20,
    max: 38,
    avg: 2.3,
    arr: [],
    arrMul: [],
    totalSumP: 0,
    //calculate a random number of customers for each hour:
    calAvg1: function () {
        for (let i = 0; i < globalTime.length; i++) {
            this.arr.push(randomNumber(20, 38));
        }
    },
    mularr: function(){
        for(let i=0;i<globalTime.length;i++){
            this.arrMul.push(Math.floor(this.arr[i]* this.avg));
            this.totalSumP+= this.arrMul[i];
        }
        
    },

}
//get the parent element by Id
let parentP= document.getElementById('parentP');
// console.log((parent));
//create a child element
let childP=document.createElement('h3');
// console.log(child);
//append child to the parent
parentP.appendChild(childP);
//give text content
childP.textContent='Paris';

//create another child ul element to show the avg in html
let childP2=document.createElement('ul');
// console.log(child1);
//append child2 to the parent
parentP.appendChild(childP2);

//create another child li element to show the avg in html
Paris.calAvg1();
Paris.mularr();
for(let i=0;i<globalTime.length;i++){

let childP3=document.createElement('li');
//append child3 to the child2
childP2.appendChild(childP3);
//give text content
childP3.textContent= globalTime[i]+' : '+ Paris.arrMul[i]+ ' cookies';
}
//create another child li element to show the total in html
let totalP =document.createElement('li');

//append total to the child2
childP2.appendChild(totalP);
totalP.textContent= `total : ${this.totalSumP} cookies`;


const Lima	 = {
    locationName: 'Lima',
    Min: 3,
    max: 16,
    avg: 4.6,
    arr: [],
    arrMul: [],
    totalSumL: 0,
    //calculate a random number of customers for each hour:
    calAvg1: function () {
        for (let i = 0; i < globalTime.length; i++) {
            this.arr.push(randomNumber(23, 65));
        }
    },
    mularr: function(){
        for(let i=0;i<globalTime.length;i++){
            this.arrMul.push(Math.floor(this.arr[i]* this.avg));
            this.totalSumL+= this.arrMul[i];
        }
        
    },

}
//get the parent element by Id
let parentL= document.getElementById('parentL');
// console.log((parent));
//create a child element
let childL=document.createElement('h3');
// console.log(child);
//append child to the parent
parentL.appendChild(childL);
//give text content
childL.textContent='Lima';

//create another child ul element to show the avg in html
let childL2=document.createElement('ul');
// console.log(child1);
//append child2 to the parent
parentL.appendChild(childL2);

//create another child li element to show the avg in html
Lima.calAvg1();
Lima.mularr();
for(let i=0;i<globalTime.length;i++){

let childL3=document.createElement('li');
//append child3 to the child2
childL2.appendChild(childL3);
//give text content
childL3.textContent= globalTime[i]+' : '+ Lima.arrMul[i]+ ' cookies';
}
//create another child li element to show the total in html
let totalL =document.createElement('li');

//append total to the child2
childL2.appendChild(totalL);
totalL.textContent= `total : ${this.totalSumL} cookies`;

//April.5.2021 lab 7
let globalTimeTable = ['locationName','6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'];
let parentTable=document.getElementById('tableContainer'); 
//create table tag
let table=document.createElement('table'); 
//append table tag to the parentTable
parentTable.appendChild(table); 
//creat heading row to the table
let headingRow=document.createElement('tr');
//append heading row
table.appendChild(headingRow);

//make the heading th
for(i=0;i<globalTime.length;i++)
{   
    // let heading=globalTime[i];
    //create th
    let thTag=document.createElement('th');
    //append the th to the heading row
    headingRow.appendChild(thTag);
    //give a text of contant
    thTag.textContent=globalTime[i];

}

let locationArray=[];

function location(Lname, mularr, avg) {
    this.locationName = Lname;
    this.mulmulAvg[i] = mulAvg;
    console.log(this);
}
locationArray.push(this);

location.prototype.render=function(){

}

for (let i= 0; index < locationArray.length; i++) {
    console.log(locationArray[i]);
    //create a row(tr) of every location
    let locationRow=document.createElement('tr');
    //append the locationRow inside the table
    table.appendChild(locationRow);

    //create td tag
    let mulRow=document.createElement('td');
    //append td in locationRow(tr)
    locationRow.appendChild(mulRow);
    mulRow.textContent=locationArray[i].locationName;
}

function Seattle(locationName,mulAvg,total,avg){
    this.locationName=locationName,
    this.mulAvg= mulAvg(),
    this.total=total
    this.avg=6.3
}
Seattle.prototype.mul=function(){
    let mul=(this.mul=random(23,65))*this.avg;
}
Seattle.push(this);
for (let i = 0; i < locationArray.length; index++) {
    
    locationArray[i].mulAvg;
}

