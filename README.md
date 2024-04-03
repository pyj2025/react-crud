# Joon's React-Crud App

This project demonstrates a basic React app that connects to an API with dummy data. The app fetches data from the API ([reqres.in](https://reqres.in/)), displays it in a table, and allows for post, edit, and delete operations.

## Getting Started

1. Clone this repository to your local machine.
2. Install dependencies using `yarn`.
3. Run the app locally with `yarn start`.

## Features

### Fetching Data

The app fetches data from the [reqres.in](https://reqres.in/) API and displays it. The data includes user information such as name and email.

### Displaying Data

The fetched data is presented in a table format. 

### CRUD Operations

The app supports the following CRUD operations:

1. **Create**: Add new users to the table.
2. **Read**: Display existing user data.
3. **Update**: Edit user information.
4. **Delete**: Remove users from the table.

## Code Structure

The main components of the app are:

- `MainApp.tsx`: The main component that fetches data and renders the table.
- `UserList.tsx`: Displays the list of users.
- `UserAddForm.tsx`: Allows to add a new user.
- `UserEditForm.tsx`: Allows to update selected user.

## Deployment

The app is deployed on GitHub Pages. You can find the live version here: [GitHub Pages Demo](https://pyj2025.github.io/react-crud/)

## Conclusion

This simple React app demonstrates how to connect to an API, fetch data, and perform CRUD operations. Feel free to explore the code and adapt it for your own projects!

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn deploy`

Deploys the updates on GitHub page
