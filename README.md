# Guide

## Quick description

Ths following stack has been used:
- Vue.js
- Node.js

## Start up

The following commands should be typed in the terminal.

### Backend
In the **./back** folder: `node main.js`

### Frontend
In the **./front** folder: `vue-cli-service serve`

## Current state of the application

Due to time constraints, only the following sections has been implemented:

- login (no actual checking, just a redirect after click the login button)
- admin/employees
  - list
  - view
  - edit
  - delete

## Desired implementation

### Backend
For this test I used **Node.js** because it should be present in any web-developer environment.

Personally I would use **Golang** server side.
It's easy to learn, very performant and only need the binary file to run on the server (no need to have a whole environment implemented to run the app like Java, Ruby, etc...).

### Frontend

#### Styles

The current style methodology used is **SCSS (SASS)**.
Ideally, variables should be used to maintain common asset values (colors, commmon spacing, etc...).

Also considering different clients, **media queries** should be implemented.

#### Vue.js

For the moment only one element (admin navigation) has been turned into a component. To easily maintain the application, common elements should be converted to component.

#### Database

Due to time constraint, the data is currently hard coded in the Node.js `main.js` script.
For performance, de-duplication of data, cache strategy, load balancing, etc... should be ideally implemented.


### API

To implement the API, **Swagger** (https://swagger.io/) could be used to centralize the maintenance and documentation.


### Testing

- e2e testing: I like using Cypress (for the moment limited to Chrome).

- Unit testing: the Jasmine framework is an all-in-one tool that works well. Chai/Mocha is an alternative.


## Final thoughts

This is only a partial implementation, so it does not reflect the quality of a final product.
I like clean and simple code that is easy to maintain for a team. Even for people who just jump in the project.
That is why I use separation of concerns as much as possible.

Performance and reliability is also quite important.
A lot of developers forget that sites are also loaded on small devices (smartphones) or in conditions where network might be quite slow. For that reason I believe that it is often better to offload heavy logic to the backend side to keep the frontend side as light as possible.

I appreciated the fact that this test actually test frontend skills.