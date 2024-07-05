let h1=document.querySelector("#heading");
console.log(h1);
h1.innerText="this is new heading"
document.write("hii my DOM");
let container=document.getElementsByClassName("container");
console.log(container);
let con=document.getElementsByClassName("div");
console.log(con);
let idx=0;
for (let divs of con) {
    divs.innerText=`this is div values ${idx}`
    idx++;
    //console.log(divs);
}
let htmltag=document.getElementsByClassName("div").innerHtml+=`<h1>this is heading</h1>`
console.log(div);
 
