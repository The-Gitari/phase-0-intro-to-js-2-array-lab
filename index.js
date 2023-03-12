// Write your solution here!
const cats=["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name){
    cats.push('Ralph');
}
//=>["Milo","Otis","Garfield","Ralph"]
function destructivelyPrependCat(name){
    cats.unshift('Bob');
}
//=>["Bob","Milo","Otis","Garfield"]
function destructivelyRemoveLastCat(){
    cats.pop();
}
//=>["Milo","Otis"]
function destructivelyRemoveFirstCat(){
    cats.shift();
}
//=>["Otis","Garfield"]
function appendCat(name){
    const newArray= cats.slice();
    newArray.push('Broom')
    return newArray;
}
function prependCat(name){
    const newArrayCats= cats.slice();
    newArrayCats.unshift('Arnold');
    return newArrayCats;
}
function removeLastCat(){
    const newCats= cats.slice();
    newCats.pop();
    return newCats;
}
function removeFirstCat(){
    const newArrayofCats=cats.slice();
    newArrayofCats.shift();
    return newArrayofCats;
}
