## HTTP request

| Name   | Path           | HTTP Verb | Mongoose Method         |
| ------ | -------------- | --------- | ----------------------- |
| index  | /dogs          | GET       | Dog.find()              |
|        |                |           |                         |
| New    | /dogs/new      | GET       | N/A                     |
| Create | /dogs          | POST      | Dog.create()            |
|        |                |           |                         |
| Show   | /dogs/:id      | GET       | Dog.findById()          |
| Edit   | /dogs/:id/edit | GET       | Dog.findById()          |
|        |                |           |                         |
| Update | /dogs/:id      | PUT       | Dog.findByIdAndUpdate() |
|        |                |           |                         |
| DELETE | /dogs/:id      | DELETE    | Dog.findByIdAndRemove() |

