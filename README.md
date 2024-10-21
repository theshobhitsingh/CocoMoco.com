# CocoMoco Blog Application
A dynamic blog application built with Node.js, Express, and EJS, allowing users to perform all CRUD operations: create, view, edit, and delete posts.

## Features

- Create new posts
- View a list of posts
- Edit existing posts
- Delete posts
- Display posts with usernames and content

  Home Page <br> <img src= "https://github.com/theshobhitsingh/CocoMoco.com/blob/main/Images%20of%20Project/Home%20Page.png?raw=true"> <br>
  Detailed Post <br> <img src = "https://github.com/theshobhitsingh/CocoMoco.com/blob/main/Images%20of%20Project/Edit%20Post.png?raw=true">  <br>
  Edit Post <br> <img src = "https://github.com/theshobhitsingh/CocoMoco.com/blob/main/Images%20of%20Project/Detailed%20Post.png?raw=true"> 

## Technologies Used

- **Node.js**: JavaScript runtime for server-side development
- **Express**: Web framework for Node.js
- **EJS**: Templating engine for rendering HTML pages
- **UUID**: Library for generating unique identifiers

## Getting Started

### Prerequisites

- Node.js installed on your machine
- A package manager like npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   
2. Install dependencies:

   ```bash
   npm install
   
3. Start the server:

   ```bash
   node /index.js

4. Open your browser and go to http://localhost:8080 to view the application.

## Routes

- **GET /** - Render the homepage displaying all posts
- **GET /posts** - Render the homepage displaying all posts
- **GET /posts/new** - Render the form to create a new post
- **POST /posts** - Handle the creation of a new post
- **GET /posts/:id** - Render a detailed view of a post
- **GET /posts/:id/edit** - Render the edit form for a post
- **PATCH /posts/:id** - Handle updating a post
- **DELETE /posts/:id** - Handle deleting a post

## File Structure
/public <br>
└── style.css <br>
/views <br>
  ├── edit.ejs <br>
  ├── index.ejs <br>
  ├── new.ejs <br>
  └── show.ejs <br>
index.js

## Contributing
Contributions are welcomed! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## Developer
This project is built by me ***Shobhit Singh***
