---
order: 4
---

# Recovery
This page is a collection of remedies for issues that can occur with ViewTube.

## Lost access to admin account

1. Create a new account you would like to use as an admin
2. Set the environment variable `VIEWTUBE_ADMIN_USER` to your the username of your new account
3. Restart ViewTube

If have registration disabled and cannot create an account, continue reading.

## Disabled registration and lost access to admin account

1. Start a shell session inside the mongodb container  
```bash
docker exec -it <YOUR-MONGODB-CONTAINER-NAME-HERE> bash
```
2. Start the mongo shell
```bash
mongosh
```
3. Select the viewtube database
```bash
use viewtube
```
4. Execute the following command to allow registration
```bash
db['server-settings'].updateOne({version:1},{$set: {registrationEnabled:true}})
```
Now you can create a new admin user according to the topic above.