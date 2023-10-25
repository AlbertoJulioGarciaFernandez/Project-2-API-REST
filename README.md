# Project-2-API

**Team**:
Aitor, Daniel and Alberto.

**Project Idea**:
The idea for the creation of this API came up from the need any school institution or, as in our particular case, any university, has to keep a record of all its students, professors, classrooms, and all the equipment involved. However, the thing which triggered the inspiration for this project was the fact of fulfilling the need teachers/professors and students may have when it comes to booking a classroom for a particular occasion, be it teaching, studying or giving a lecture. Each classroom has their particular equipment and will be addressed to professors or students, who will be able to book them if their role matches the one the classroom has.

Another point that needs to be mentioned is the fact that the API also manages the buildings/faculties the university includes such as Engineering, Architecture, Maths, etc. — these can only be managed by one person, being a requirement having the role of building administrator to be able to do so.

**Roles**: 
There are four roles involved:
- API Administrator (admin)
- Building Administrator (buildingAdmin)
- Professor (professor)
- Student (student)

The difference between them lays on the fact that an API Administrator will have full permissions (this means, they are able to view, create, update and delete information from all tables).
There is no remarkable difference between the rest of the roles apart from the fact that a building can only be assigned a person who actually is a building administrator, a professor can make classroom reservations as long as the class they are interested in is aimed at professors and the same for students.

**Tables**:
Our database needed six tables, being one of them the result of the many to many relation between other two tables:
Bookings
Buildings
Classrooms
Equipments
Classrooms-Equipments (resulting table from the many to many relation between Classrooms and Equipments)
Users

**Relationships between tables**:

One to one:
Buildings and Users

One to many:
Buildings and Classrooms
Classrooms and Bookings
Users and Bookings
Classrooms  and Classrooms-Equipments
Equipment and Classrooms-Equipments

Many to many:
Classrooms and Equipments

**Authentication Endpoints**
The Authentication flow for the application is: image

Endpoints

### Members Endpoints

| METHOD | ENDPOINT                  | TOKEN | ROLE  | DESCRIPTION                  | POST PARAMS                | RETURNS                              |
| ------ | ------------------------- | ----- | ----- | ---------------------------- | -------------------------- | ------------------------------------ |
| GET    | /members                  | YES   | Admin | Get all users                | -                          | [{ member }]                         |
| GET    | /members/:memberId        | YES   | Members | Get one user               | member_id                  | { member }                           |
| PUT    | /members/:memberId        | YES   | Members | Update user                | member_id                  | "Member updated"                     |
| POST   | /members                  | YES   | Admin | Create one user              | req.body                   | "Member created"                     |
| DELETE | /members/:memberId        | YES   | Members | Remove one user            | member_id                  | "Member deleted"                     |

