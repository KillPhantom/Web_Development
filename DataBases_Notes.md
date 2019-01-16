# Databases Intro

#### SQL(relational)



| 姓名 | 性别 |   毕业学校   | 工资 |
| :--- | :--: | :----------: | ---: |
| 杨洋 |  男  | 重庆交通大学 | 3200 |
| 峰哥 |  男  |   贵州大学   | 5000 |
| 坑货 |  女  |   北京大学   |  200 |


#### NoSQL(non-relational)

> {
>   name: "Ira",
>   age: 24,
>   city: Missoula,
>   comments: [
> ​    {text: "Come visit Montana!"},
> ​    {text: "Seriously Montana is great!"},
> ​    {text: "Why does no one care about Montana???"}
>   ],
>   favColor: "purple"
> }

### MongoDB

* mongod

> launch

* mongo

> debug and test

- help

> Help doc

- Use

> use to create or use some dbs

- show dbs

- Find insert update remove

> db.dogs.find()
>
> db.dogs.insert({x:"y"})
>
> db.dogs.update({name:"Corgi"},{$set: {name:"Rusty", isCute:true}})
>
> db.dog.remove( )//remove all of the element inside
>
> db.dog.remove().limit(1)
>
> db.collections.drop // Delete All the data in database

## Mongoose

~~~javascript
var mongoose= require("mongoose");
var cargroundSchema= new mongoose.Schema({
    name:String,
    image:String,
    description:String
})

Carground = mongoose.model("Carground",cargroundSchema);
Carground.deleteMany()//remove
Carground.create()


~~~

