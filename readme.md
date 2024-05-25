
# Enhanced Authentication API

This project is an enhanced authentication system backend API built with Node.js, featuring a new functionality that allows users to set their profiles as public or private. Admin users can view both public and private profiles, while normal users can only access public profiles.




## Features

- User registration and login
- OAuth login with Google
- Profile management (view, edit, and upload photo)
- Public/private profile settings
- Admin access to all profiles
- Normal user access to public profiles
## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- Passport.js
- JWT (JSON Web Tokens)
## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/Atmalviya/Auth_api.git
    cd yourrepository
    ```

2. Install dependencies:
    ```sh
    npm install
    ```



## Set up environment variables:

Create a `.env` file in the root of the project and add the following variables:

```env
    MONGO_URI=mongodb+srv://Atmalviya:ATV2malviya@cluster0.2dnnddb.mongodb.net/

    JWT_SECRET=ATV2@malviya

    GOOGLE_CLIENT_ID=192495763798-38cc9362hfvbkbglabum4bnbarslf0u3.apps.googleusercontent.com
    
    GOOGLE_CLIENT_SECRET=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
```
## Run Locally
To start the server:

```sh
npm run start
```




 
## API Reference


 **Endpoint:**

### Register a User
```http
POST /api/users/register
```
Request Body:
```
{
    "name": "User Name",
    "email": "user@example.com",
    "password": "userpassword"
}
```

### User Login

```http
POST /api/users/login
```
Request Body:
```
{
    "email": "user@example.com",
    "password": "userpassword"
}
```

### Google OAuth Login
```http
GET /api/users/auth/google
```
Follow the Google login flow. On successful login, you will be redirected to the home page.


### Get User Profile
```http
GET /api/users/profile
```
Headers:
```http
Authorization: Bearer <your_jwt_token>
```

### Update User Profile
```http
PUT /api/users/profile
```
Headers:
```http
Authorization: Bearer <your_jwt_token>
```
Request Body:
```
{
    "name": "Updated Name",
    "email": "updated@example.com",
    "password": "newpassword",
    "photo": "new_photo_url",
    "bio": "new bio",
    "phone": "new phone",
    "isPublic": true
}
```

### Get All Public Profiles
```http
GET /api/users/public
```

## Get All Users (Admin Only)
```http
GET /api/users
```
Headers:
```http
Authorization: Bearer <your_admin_jwt_token>
```
### 🚀 About Me

Hey! I'm Atul Malviya, a software developer and Computer Science graduate from Jabalpur Engineering College. Currently, I'm gaining valuable experience as a Software Developer Trainee at Opensense Labs. Apart from coding, I've served as the TPO of my college and have a passion for karate, having represented India and won three national gold medals. Let's connect and code together! 🚀

Reach me at [email](mailto:atulmalviyawork@gmail.com) or find me on [LinkedIn](https://www.linkedin.com/in/atul-malviya/).


## 🔗 Links

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/atul-malviya/)


