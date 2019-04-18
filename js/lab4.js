// lab4.js
// The verse1(), verse2(), chorus1() and chorus2() are provided to you. You can change the function names and add additonal ones as needed. Be sure to follow the starter code that has been supplied.

//Smells like teen spirit - Nirvana

function verse1(){
    let output = '';
    // your code here
    output = "Load up on guns, bring your friends. It's fun to lose and to pretend. She's over-bored and self-assured. Oh no, I know a dirty word. ";
    return output;
}

function preChorus(){
    let output = '';
    // your code here
    output = "Hello, hello, hello, how low. Hello, hello, hello, how low. Hello, hello, hello, how low. Hello, hello, hello. ";
    return output;
}

function chorus(){
    let output = '';
    // your code here
    output = "With the lights out its less dangerous. Here we are now, entertain us. I feel stupid and contagious. Here we are now, entertain us. A mullato, an albino, a mosquito, my libido. ";
    return output;
}

function postChorus(){
    let output = '';
    //your code here
    output = "Yeah. Hey. Hey. ";
    return output;
}

function verse2(){
    let output = '';
    // your code here
    output = "I'm worse at what I do best, and for this gift I feel blessed. Our little group has always been, and always will until the end. ";
    return output;
}

function verse3(){
    let output = '';
    // your code here
    output = "And I forget just why I taste. Oh yeah, I guess it makes me smile. I found it hard, it's hard to find. Oh well, whatever, never mind. ";
    return output;
}

function outro(){
    let output = '';
    //your code here
    output = "A denial, a denial, a denial, a denial, a denial, a denial, a denial, a denial, a denial. ";
    return output;
}

function main(){
    let finalOutput = ''; // used to build lyrics string
    // call verse and chorus functions
    // each verse/chorus should return text including HTML paragraph tags
    finalOutput = verse1()+preChorus()+chorus()+postChorus()+verse2()+preChorus()+chorus()+postChorus()+verse3()+preChorus()+chorus()+outro();
    // do not modify the statement below
    // it will take 
    document.getElementById('lyrics').innerHTML = finalOutput;
}

window.onload = function(){
    main();
}