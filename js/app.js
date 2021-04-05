'use strict';
let globalTime = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'];
let hour = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
// randomNumber();
// for(let i =0;i<hour.length;i++){
let Seattle = {
    Min: 23,
    max: 65,
    avg: 6.3,
    arr: [],
    arrMul: [],
    calAvg1: function () {
        for (let i = 0; i < globalTime.length; i++) {
            arr.push(randomNumber(23, 65));
        }
    },
    mularr: function(){
        arrMul.push(arr[i]* avg);
    },
}
//get the parent element by Id
let parent1= document.getElementById('parent1');
console.log((parent));
//create a child element
let child=document.createElement('h3');
console.log(child);
//append child to the parent
parent1.appendChild(child);
//give text content
child.textContent='Seattle';

//create another child ul element to show the avg in html
let child2=document.createElement('ul');
console.log(child1);
//append child2 to the parent
parent.appendChild(child);

//create another child li element to show the avg in html
let child3=document.createElement('li');
console.log(child2);
//append child3 to the child2
parent.appendChild(child);
//give text content
child.textContent= Seattlex.arrMul;

Seattle.calAvg1();
Seattle.mularr();


let Tokyo = {
    min: 3,
    max: 24,
    avg: 1.2,
    calAvg2: function () {
        for (let i = 0; i < globalTime.length; i++) {
            arr.push(randomNumber(3, 24));
        }
    },
    mularr: function(){
        arrMul.push(arr[i]* avg);
    }
}

//get the parent element by Id
let parent2= document.getElementById('parent2');
console.log((parent2));
//create a child element
let child4=document.createElement('h3');
console.log(child4);
//append child to the parent
parent.appendChild(child4);
//give text content
child4.textContent='Tokyo';

//create another child ul element to show the avg in html
let child5=document.createElement('ul');
console.log(child5);
//append child2 to the parent
parent.appendChild(child5);

//create another child li element to show the avg in html
let child6=document.createElement('li');
console.log(child6);
//append child3 to the child2
parent.appendChild(child6);
//give text content
child5.textContent= Tokyo.arrMul;
Tokyo.calAvg2();
Tokyo.mularr();



let Dubai = {
    min: 11,
    max: 38,
    avg: 3.7,
    calAvg3: function () {
        for (let i = 0; i < globalTime.length; i++) {
            arr.push(randomNumber(11, 38));
        }
    },
    mularr: function(){
        arrMul.push(arr[i]* avg);
    }
}
//get the parent element by Id
let parent3= document.getElementById('parent3');
console.log((parent3));
//create a child element
let child7=document.createElement('h3');
console.log(child7);
//append child to the parent
parent3.appendChild(child7);
//give text content
child7.textContent='Dubai';

//create another child ul element to show the avg in html
let child8=document.createElement('ul');
console.log(child8);
//append child2 to the parent
parent3.appendChild(child8);

//create another child li element to show the avg in html
let child9=document.createElement('li');
console.log(child9);
//append child3 to the child2
parent3.appendChild(child9);
//give text content
child9.textContent= Dubai.arrMul;
Dubai.calAvg3();
Dubai.mularr();



let Paris = {
    min: 20,
    max: 38,
    avg: 2.3,
    calAvg4: function () {
        for (let i = 0; i < globalTime.length; i++) {
            arr.push(randomNumber(20, 38));
        }
    },
    mularr: function(){
        arrMul.push(arr[i]* avg);
    }
}

//get the parent element by Id
let parent4= document.getElementById('parent4');
console.log((parent4));
//create a child element
let child10=document.createElement('h3');
console.log(child10);
//append child to the parent
parent4.appendChild(child10);
//give text content
child.textContent='Paris';

//create another child ul element to show the avg in html
let child11=document.createElement('ul');
console.log(child11);
//append child2 to the parent
parent4.appendChild(child11);

//create another child li element to show the avg in html
let child12=document.createElement('li');
console.log(child12);
//append child3 to the child2
parent4.appendChild(child12);
//give text content
child112.textContent= Paris.arrMul;

Paris.calAvg3();
Paris.mularr();

let Lima = {
    min: 2,
    max: 16,
    avg: 4.6,
    calAvg5: function () {
        for (let i = 0; i < globalTime.length; i++) {
            arr.push(randomNumber(2, 16));
        }
    },
    mularr: function(){
        arrMul.push(arr[i]* avg);
    }

}

//get the parent element by Id
let parent5= document.getElementById('parent5');
console.log((parent5));
//create a child element
let child13=document.createElement('h3');
console.log(child13);
//append child to the parent
parent5.appendChild(child13);
//give text content
child13.textContent='Lima';

//create another child ul element to show the avg in html
let child14=document.createElement('ul');
console.log(child14);
//append child2 to the parent
parent5.appendChild(child14);

//create another child li element to show the avg in html
let child15=document.createElement('li');
console.log(child15);
//append child3 to the child2
parent5.appendChild(child15);
//give text content
child15.textContent= Lima.arrMul;

Lima.calAvg5();
Lima.mularr();

parent1.className='parent1';
parent2.className='parent2';
parent3.className='parent3';
parent4.className='parent4';
parent5.className='parent4';

