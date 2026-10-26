const cl = console.log;

//Document Object: innerHTML,innerText, textContent,value,style
// classList (add,remove,toggle), className

//single selection methods :: Single Document Object

//   1 document.getElementById('id')>> Document Object
//   2 document.querySelector('css:selector') >> Document Object
 const heading = document.querySelector('h1')
cl(heading)

heading.style.backgroundColor = "blueviolet";
heading.style.color = "#fff";
heading.style.padding = "10px";

let list = document.querySelector('.list-group-item');
cl(list);
let imp1 = document.querySelector("li:nth-child(3)")
cl(imp1);

let imp2 = document.querySelector(".list-group:nth-child(2) li:nth-child(3)");
cl(imp2);

let imp1 = document.querySelector("#skill1 li:nth-child(3)")
cl(imp1);

let imp2 = document.querySelector("#skill2 li:nth-child(3)");
cl(imp2);

imp2.classList.add("bg-success");

 //3.Multiplication selection methods :: Multiplication Document Object
 //document.getElementByClassName('className')

 let lists = Array.from(document.getElementsByClassName('list-group-item')) //html collection
 cl(lists)

 let lists = [...document.getElementsByClassName('list-group-item')]  //html collection
 cl(lists)

 lists.classList.add("text-success")

 //classList is Document Object method
 //list :: HTMLCollection (Array like a object not array)

 for(let i = 0; i < lists.length; i++){
    lists[i].classList.add("text-danger")
    lists[i].classList.add("text-weight-bold")
 }

 //4 document.getElementByTagName(tag:selector)>> HTMLCollection(multiple Document Object)
 
 let lists1 = [...document.getElementsByTagName('li')]
 //HTMLCollection (it is array like object but not Array)
 //it return doc Object
 cl(lists1)

 lists1.forEach((li)=>{
    li.classList.add('bg-info');
    li.classList.add('text-white');
    li.classList.add('font-weight-bold');
 })

//5.document.querySelectorAll('css:selector')>> NodeList(multiple doc Object)
//nodeList is array like object not a array
//querySelectorAll return Doc Object
//list2 is a Array of Document Object

let lists2 = document.querySelectorAll('li')
cl(lists2)

lists2.forEach((dobj)=>{
    
    dobj.classList.add('bg-primary')
    dobj.classList.add('text-white')
    dobj.classList.add('font-weight-bold')

})

