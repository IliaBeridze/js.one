let number = document.querySelector(".number")
let btn1 = document.querySelector(".btn1")
let btn2 = document.querySelector(".btn2")
let btn3 = document.querySelector(".btn3")

number = 0

btn3.addEventListener("click",function(){
  number++
  console.log(number)
  document.querySelector(".number").innerHTML =
  number
  document.querySelector(".number").style.color =
  "green"
})


btn1.addEventListener("click",function(){
  number--
  console.log(number)
  document.querySelector(".number").innerHTML =
  number
  document.querySelector(".number").style.color =
  "red"
})
btn2.addEventListener("click",function(){
  
  number=0
  console.log(number)
  document.querySelector(".number").innerHTML =
  number
  document.querySelector(".number").style.color =
  "black"
 
})

