# Introduction 
Project to learn React and Redux frameworks. Movie finder with a favorites page to store your favorite movies. It includes a user menu and an option to store your opinion about the movies from the favorites page. A responsive website.

It includes a mock login system that stores the username in sessionStorage and recover it fron there when user refresh page. To log in, enter the user "general user". To store favorite movies I use the browser's localStorage. As a database API to find the movies, I use the REST API http://www.omdbapi.com.


# Getting Started
1.	Installation process
    - yarn install
    - yarn start 
2.	Software dependencies
    - react and react-dom v.16.13.1
    - react-router v.5.2.0
    - connected-react-router v.6.8.0
    - react-redux v.7.2.1
    - redux v.4.0.5
    - redux-thunk v.2.3.0
    - node-sass v.4.14.1
3.	Build
    - yarn build

# Latest updates
- Mock users.json and feedback message on login page if user does not exist
- Use react hooks to learn: useState, custom hook, useSelector and useDispatch.
- Add toast and dispatch toast actions on favorite button click on homepage and on opinion update on favorites page.
