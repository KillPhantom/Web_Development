# DOM Note

####  Select  Method

~~~javascript
document.getElementById('id')
document.getElementsByClassName('classname')
document.getElementsByTagName("tag name") // like li, ul,h1

//********************
// queryselector return the first element
document.querySelector("#id") //# is necessary 
document.querySelector(".classname") //. is used for class
document.querySelector("tagname")// h1, body,
//*****************//
document.querySelectorAll("tag name") //select all of the tag
~~~

##### Style attribution 

~~~javascript
var tag= document.getElementById("id")
tag.style.color="blue";
tag.style.border="10px solid red";
tag.style.fontSize="70px";
tag.style.background="yellow";
tag.style.marginTop="200px";
~~~

**However,we can comebine with css and javascript instead of doing along**

~~~javascript
//define a css first
	<style type="text/css">
		.big{
			font-size: 80px;
			color: orange;
			border: 5px solid red;
		}
	</style>
~~~

~~~javascript
var p = document.querySelector("p")
p.classList.add("big")
p.classList.remove("big")
p.classList.toggle("big")// remove class if exist, add one if not
~~~

#### Text and Content

~~~javascript
var temp=document.querySelector("p")
temp.textContent //return only textcontent
temp.innerHTML //give every thing inside the var
~~~

#### Attribute

~~~javascript
var link=document.querySelector("a");
link.getAttribute("href");
link.setAttribute("href"," new_url")
~~~

#### Add Event

* click event

~~~javascript
element.addEventListener(type,functionToCall);
var button = document.querySelector("button");
button.addEventListener("click",function(){
    console.log("SOME ONE CLICK THE BUTTON")
})
~~~

* hover event

~~~javascript
var temp=document.querySelector("li");
temp.addEventListener("mouseover",function(){
    temp.style.color='green';
})// color change when mouse hover on of  the list and stay
temp.addEventListener("mouseout",function(){
    temp.style.color='black';
})// color change when mouse hover out of  the list
~~~





