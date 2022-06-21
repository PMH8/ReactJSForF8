// const h1=document.querySelector("h1");
// console.log(h1);
// console.log(typeof h1) object

const root=document.getElementById("root");
const h1= document.createElement("h1");
h1.innerText="Hello Guys";
h1.id="heading"
h1.className="heading__h1"
Object.assign(h1.style,{
    color:"blue",
    backgroundColor:"yellow"
})
console.log(h1);
// Render ra màn hình
root.appendChild(h1);