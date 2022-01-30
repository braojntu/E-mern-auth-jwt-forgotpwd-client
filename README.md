### MERN-AUTH-JWT-FORGOTPWD-CLIENT

cd into parent folder and create .env file and add below parameter
REACT_APP_API=https://yournodeserver.herokuapp.com/api

### Install and Run

1. npm install
2. Add proxy server in package.json below the version parameter (this entry should be removed while deploying to netlify)

- "proxy": "http://localhost:5000/"

3. npm start
