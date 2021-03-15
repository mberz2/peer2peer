# MERN: Full-stack Chat Application "Peer2Peer"

#### Introduction

This chat application makes use of the MERN Stack, consisting of **Mongo DB**, **Express.js**, **Node.js**, and **React.js**.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

The application makes use of Firebase for login/authentication.

### Features
* Authentication using Firebase (currently only setup for Google).
* Ability to add and join custom channels with real-time updates via Axios.
* Full-chat history using database stored messages via mongoDB.
* Real-time updates to the channel list and conversations using Pusher.

### In Progress
* Delete Channel (API is built)
* User list
* Private messaging
* Modify Profile

### Installation
1. Clone this repo.
2. Install dependencies with `npm install`. This must be done for both the server and client.
3. Configure mongoURI in `\server\server.js`
4. Configure firebase credentials in `\client\firebase.js`
5. Start up the server with `nodemon`
6. Start up the client with `npm start`
