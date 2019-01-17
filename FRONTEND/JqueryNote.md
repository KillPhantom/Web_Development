# Jquery Demo

#### Jquery Selector

~~~javascript
$("selectorGoseHere")
$("img")
$(".sale") //for class
$("#id")
$("ul li a") // seletced <a> in a <li> in <ul>
//*********************//
$("h1").css("color","yellow") //Manupilate css style
var styles={
    color:"red";
    background: "pink";
    border: "2px solid purple"
}

$("h1").css(styles)
$("h1").last() // chose the last one of selected element
~~~

#### Objectives

---

* val()

* text()
* attr()  to retrieve the value of the target
* html()
* addClass()
* removeClass()
* toggleClass()

~~~javascript
$("img").attr("src","www.xxxx.com")
$("input").attr("type","checkbox")


$("select").val()
$("input").val()


~~~

#### JQuery Events

---

* click()
* Keypress()
* on()  // Just like addEventListener()

~~~javascript
$("#ID").click(function({
    console.log("I was clicked");
}))

$("input").keypress(function(event){
    if (event.which==13){
        alert("you hit enter");
    }
})

$("button").on("mouseenter", funtion(){$("button").css("font-weight","bold")})
// Make the button be bold when we hover over it 

$("button").on("click", funtion(){ $(this).css("color","blue")})
// only change the clicked one not all of them

~~~

![image-20181130174303212](/Users/apple/Library/Application Support/typora-user-images/image-20181130174303212.png)

#### jQuery Effects

---

* fadeOut()  fadeIn()  fadeToggle();

~~~javascript
$("button").on("click",function(){
    $("div").fadeOut(1000,function(){
	console.log("fade Completeed")//after fade do some thing
    })
})
~~~

* slideDown() slideUp() slideToggle()

~~~javascript
$("button").on("click",function(){
$("div").slideDown()})
~~~

