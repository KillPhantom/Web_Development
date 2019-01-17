# JavaScript Note

* Use === to judge if two are equal or not 

> ~~~javascript
> var y=null 
> y== undefined #True
> y=== undefined #False
> #NaN, false, 0 "", null, undefined
> ~~~

* Logical Operator

>&&  and || or ! Not

* if condition while loop 

> ~~~javascript
> while (x){
>     if (condition<x){  
>     }
>     else if {
>     }
> }
> for (var i=0;i<x,i++){
> }
> ~~~

* JS Scope

> fthe context that code is executed in

* JS Arrays

> ~~~javascript
> var list=[]
> list.length
> list.push('x')// like list.append
> list.pop() 
> list.shift('y') //pop the first one
> list.unshift('x') // add to the first of list
> list.indexOf('x')
> 
> arr.forEach(someFunction)
> //example
> var color=['orange','red','green']
> color.forEach(function(colors){
>     console.log('color is'+colors);
> })
> //output is
> //color is orange
> //color is red
> //color is green
> 
> 
> ~~~
>

* JS Object (like a dict )

> ~~~javascript
> //Three ways to define a object in js
> var obj={}; var obj=  new Object();
> var obj={
>     age:57
>     name='Li'
> }
> // js object can have function
> var obj={
>     function(x,y){
>         return x+y
>     }
> }
> ~~~
>
>