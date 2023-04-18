# BOOKSTORE API

## Description
This is a bare bones web app built with React, Redux, and TypeScript on the front-end, and Ruby on Rails 7 on the back-end, using an API for communication.

## Features

- Users may perform basic CRUD operations for blog posts.

- Built using TypeScript for static typing, which makes the codebase more robust and easier to maintain.

- Follows best practices and is structured in a modular manner, making it easier to understand and debug.

- The Redux store has two reducers, counterReducer and postsReducer, and is configured with configureStore(). The store has three types defined: AppDispatch, RootState, and AppThunk.

- contains a posts table, which has the columns title, body, created_at, and updated_at.

![Screen Shot 2023-03-24 at 10 59 32 PM](https://user-images.githubusercontent.com/100665876/227699851-968e3c01-dcaf-4742-81a0-f1b6594f7878.jpeg)

![Screen Shot 2023-03-24 at 10 59 39 PM](https://user-images.githubusercontent.com/100665876/227699878-4427a32f-57ea-4199-a2ce-2b0b5a3c96f7.jpeg)

- The React front-end has a Post component that can display a post's title and body and can be edited using a form. The component is also capable of deleting the post. The PostForm component is used to create new posts. The postSlice file contains the Redux slice for handling the posts state, including creating, reading, updating, and deleting posts.


![Screen Shot 2023-03-24 at 10 59 22 PM](https://user-images.githubusercontent.com/100665876/227699826-4eb4646d-4bb5-4486-8a66-2b082348f132.jpeg)





## Please initialize these before starting the app:

### Versions


![Ruby](https://img.shields.io/badge/Ruby-CC342D?style=for-the-badge&logo=ruby&logoColor=white) 3.0.3p157 (2021-11-24 revision 3fb7d2cadc) [x86_64-linux]
![Ruby on Rails](https://img.shields.io/badge/Ruby_on_Rails-CC0000?style=for-the-badge&logo=ruby-on-rails&logoColor=white) 


```
 git clone git@github.com:guavalines/bookstore.git
 cd bookstore
 rails db:create db:migrate db:seed:replant
 bundle install
 yarn install
 rails server
 ```
 
 Open your browser and visit localhost:3000
 To run the React side of things run npm start in your terminal
