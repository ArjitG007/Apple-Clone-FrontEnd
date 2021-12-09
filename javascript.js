let a = document.getElementById('line');
console.log(a);

let b = document.getElementsByClassName('row');
console.log(b);

let c = document.querySelectorAll('.row2');
console.log(c);

let d = document.querySelector('#line');
console.log(d);

// textcontent is used to show the text
// Array.from(d).forEach(function (para) {
//    para.textContent += "Arjit Gupta Here !!!"
// })

// Array.from(d).forEach(function(para)
// {

// })

// console.log(d.innerHTML='<h1>Hello Everyone</h1>');
console.log(d.hasChildNodes);

console.log('Parent is: ',d.parentElement);

// const e = document.querySelector('.navbar ul');

// Array.from(e).forEach(function(btn)
// {
// btn.addEventListener('click',function(g)
// {
//     const li = g.target.parentElement;

//     li.parentNode.removeChild(li);
// })
// })


  const samllnav = document.querySelector(".samllnav");
  const burger = document.querySelector("#burger");
  const cancel = document.querySelector("#cancel");

  const open =()=>
  {
     samllnav.style.display = "flex";
     burger.style.display = "none";
     cancel.style.display = "inline-block";
  }

  const close =()=>
  {
     samllnav.style.display = "none";
     cancel.style.display = "none";
     burger.style.display = "inline-block";
  }

  burger.addEventListener('click' , open);
  cancel.addEventListener('click' , close);

