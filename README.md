# CartIt
Shoppinglist tool made to be used on the fly with minimum gestures.

## Set up
### Hosted version
Hosted version will be up when it's ready to be deployed to production

### Local development
1. Clone the repo to your machine.
2. Start MongoDB or create a free-tier deployment at [www.mlab.com](https://mlab.com/).
3. Include your own MongoDB connection values in *server/dbConfig-example.js* and rename it to *server/dbConfig.js*.
4. Run `npm run start-dev` to start the Express server and the Webpack dev server.
All ready!

## API
If you run the server out of the box, all requests have to be made to http://localhost:3001/api. 
An example query will then become: http://localhost:3001/api/user/597b5e5f2109eb33ae432eb9

```GET /user/<USER ID>``` 
Will return an object of a single user matching the ID.

```POST /user/signin```
Route for logging in to a user account. Returns 200 if the log in was succesful, 400 if the user/password combination does not match.

```POST /user/signup```
Creates a new user. Takes a few arguments in the body: *username*, *email*, *password* - all strings. Will automatically assign creation date, user ID, and a "isPro" status of false.

```PUT /user/<USER ID>```
Updates user profile. Takes a few arguments in the body, like the POST-request for user creation above: *username*, *email*, *password*.

```POST /user/<USER ID>/lists```
Creates a new list for the user with <USER ID>

```GET /user/<USER ID>/lists```
Gets all lists belonging to the user matching <USER ID>

```GET /user/<USER ID>/lists/<LIST ID>```
Gets the contents of the specified list.

```PUT /user/<USER ID>/lists/<LIST ID>```
Update a lists' contents. Accepts an object with the following: *title* (string), *items* (array of objects with *itemName* (string), *order* (integer) and *statusIsDone* (boolean)). Assigns a creation date and ID automatically.