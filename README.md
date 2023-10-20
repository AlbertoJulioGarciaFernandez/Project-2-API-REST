# Project-2-API

**Team**:
Aitor, Daniel and Alberto.

**Project Idea**:
This project consists of creating an API that facilitates the management of medical appointments for a veterinary clinic. The clinic will control the registration of owners and pets, appointments, treatment follow-up and the assignment of veterinarians. Owners will be able to request appointments for their pets, as well as consult their record at any time and the information of the veterinarians and treatments available at the clinic.

**Roles**: There will be 3 main roles:
Admin: This role has full permissions. It can view, create, update and delete information from all tables.
Teacher: This role can see all the information. Create, update and delete pets, owners, contact details, appointments. You can view vet and treatment information, but you can NOT create, update, or delete it.
Student: This role can view all vet and treatment information. But you can only see your own appointments, pets and contact information (not other users). Likewise, you can only create, update and delete your own data. You have access to the information of all available appointments and the possibility to update the "status" field of the appointments when you select one to book for your pet, so that its status changes to "not available".

**Tables**:


**Relationships between tables**:

One to one:
Ref: "buildings"."buildingManagerId" - "users"."id"

One to many:
Ref: "buildings"."id" < "classes"."idBuilding"
Ref: "users"."id" < "bookings"."idUser"
Ref: "classes"."id" < "bookings"."idClassroom"
Ref: "classes"."id" < "classesEquipments"."idClass"
Ref: "equipments"."id" < "classesEquipments"."idEquipment"

Many to many:
Ref: classes <> equipments -- 

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

