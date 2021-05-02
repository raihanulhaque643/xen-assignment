In the project directory, you can run: `npm start`

- The signup feature and send OTP to phone/email feature uses manual delays to show functionality. (no api calls)

- The login feature calls a postman mock server api that will return a {"email": "dummy@gmail.com"} for any given inputs. This email is then saved to the redux store and controls if user can access the profile page.

- The logout feature calls the same mock api as login and on successul response, it removes the dummy email from redux store.


