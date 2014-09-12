# System Description

## Arichitecture

### Model-View-Controller

- Model: MongoDB schema
    - patients
        - _id: unique identifier
        - username: used for logging
        - salt: random string used for generating password
        - password: hashed by MD5
        - reminders: reminder
        - drugs: drugs he is taking or took
        - name: his own name
        - info: description of himself
        - year: birth date year
        - month: birth date month
        - day: birth date day
        - gender: male/female
        - img: path to his image
    - doctors(Administrator)
        - _id: unique identifier
        - username: used for logging
        - salt: random string used for generating password
        - password: hashed by MD5
    - reminders
        - _id: unique identifier
        - drug
        - takingTime
        - unit
        - surplus
        - switchStatus: the reminder is currently on or off
    - drugs
        - _id: unique identifier
        - name: drug's name
        - description
        - sideEffects: added by patients
        - reviews: added by patients
        - img: path to drug's image
    - sideEffects
        - _id: unique identifier
        - content
        - patient: patient who added this piece of sideEffect
    - reviews
        - _id: unique identifier
        - content
        - patient: patient who added this piece of review
- View: Jade view template
    - layout
        - main: default layout consists of basic HTML
    - page
        - index
        - about
        - contact
        - categories
- Controller: Express routing
    - '/': index page
    - '/login': post log in information
    - '/logout': logout
    - '/about': about page
    - '/contact': contact page
    - '/categories': categories page

## Implementation

- Preparation
    1. Design database models
    2. Design routing
- Programming
    1. Implement database model schema(see `models/` in detail)
    2. Implement routing(see `routes.js` in detail): send infomation to corresponding page, and render them
    3. Write main layout(see `layouts/main.jade` in detail)
    4. Write every page's template
- Quality Assurance
    1. Page testing: write automatic test to ensure every page has its own title, has loaded css and js files, has fully functioned.
    2. Logic testin: test only javascript, disconnected for any presentation functionality.
    3. Linting: eliminating potential errors, identifying areas could represent possible errors, or fragile constructs that could lead to errors in the future.
    4. Link checking: make sure that there are no broken links.

## Platform

- OS: Linux Ubuntu 14.04 LTS
- Runtime environment: Node.js 0.10
- Framework: Express 4.0
- Database: MongoDB

