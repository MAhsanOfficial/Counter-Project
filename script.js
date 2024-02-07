
 const title =document.getElementById('title')
 const increment =document.getElementById('increment')
 const reset =document.getElementById('reset')
 const decrement =document.getElementById('decrement')

 let count=0;

//  title.onclick=function(){
//     count=0;
//     title.textContent=title;
//  }
 increment.onclick=function(){
    count++;
    title.textContent=count;
 }
 reset.onclick=function(){
    count=0;
    title.textContent=count;
 }
 decrement.onclick=function(){
    count--;
    title.textContent=count;
 }