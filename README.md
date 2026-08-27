# Todoe-NodeJs-Backend
User can register, login and then create and manage his own task notes.

## Table of Contents

- [Todoe-NodeJs-Backend](#todoe-nodejs-backend)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Features](#features)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Hierarchy](#hierarchy)
  - [API](#api)
    - [Register User](#register-user)
    - [Login User](#login-user)
    - [Create a New Note](#create-a-new-note)
    - [Get Notes](#get-notes)
    - [Update a Note](#update-a-note)
    - [Delete a Note](#delete-a-note)
  - [Contributing](#contributing)
  - [License](#license)

## Introduction

An api project for managing user's task notes. User can register, login and then create and manage his own task notes.


## Features

- User can register, login and then create and manage his own task notes.

## Prerequisites

Node Version: v16.13.1

## Installation

1. Clone the repository

```bash
git clone <repo-url>
```

2. Install dependencies

```bash
npm install
```

3. Start the server

```bash
npm start
```

## Hierarchy

```
Project: Todoe-NodeJs-Backend
│   app.ts
│   types.d.ts
├───controllers
├───middlewares
├───models
└───routes
```

## API

The project provides the following APIs:

### Register User

- Method: POST
- Endpoint: /register
- Description: Register a new user.
- Request Body:
  - username: string (required)
  - password: string (required)
- Response:
  - Status: 200 OK
  - Body: User object

### Login User

- Method: POST
- Endpoint: /login
- Description: Log in an existing user.
- Request Body:
  - username: string (required)
  - password: string (required)
- Response:
  - Status: 200 OK
  - Body: User object

### Create a New Note

- Method: POST
- Endpoint: /
- Description: Create a new note.
- Authentication Required: Yes
- Request Body:
  - title: string (required)
  - content: string (required)
- Response:
  - Status: 200 OK
  - Body: Created note object

### Get Notes

- Method: GET
- Endpoint: /
- Description: Get notes with pagination.
- Authentication Required: Yes
- Query Parameters:
  - page: number (optional, default: 1)
  - limit: number (optional, default: 10)
- Response:
  - Status: 200 OK
  - Body: Array of notes, total count, and total pages

### Update a Note

- Method: PUT
- Endpoint: /:id
- Description: Update a note by ID.
- Authentication Required: Yes
- Request Body:
  - title: string
  - content: string
- Response:
  - Status: 200 OK
  - Body: Updated note object

### Delete a Note

- Method: DELETE
- Endpoint: /:id
- Description: Delete a note by ID.
- Authentication Required: Yes
- Response:
  - Status: 200 OK
  - Body: Deleted note object

## Contributing

Anyone is welcome to contribute to the project. 

## License

Specify the project's license and any relevant copyright or attribution information.
