## Overview
This project is a simple full-stack web application with a frontend for user registration and a backend for storing user data in MongoDB.

## Project Demo 
 [Click Here for Demo] (https://mini-project-eta-lime.vercel.app/)

## Backend 
### Technologies
- Node.js
- Express.js
- MongoDB (MongoDB Atlas)
- Mongoose (ODM)
### Setup Instructions
- Navigate to the backend directory: cd backend
- Install dependencies: npm install
- Create a .env file with your MongoDB connection string: MONGODB_URI=your_mongodb_connection_string
- Start the server: node index.js
### API Endpoints
- POST /submit
- Creates a new user
- Request body: { "name": "string", "email": "string" }
- Response: JSON object with success status and message


## Frontend 
### Technologies
- HTML5
- CSS3
- Vanilla JavaScript
- Font Awesome (for icons)
### Features
- Responsive design
- Form validation
- Background video
- Social media login options (UI only)
### Setup Instructions
1. Open index.html directly in a web browser, or
2. Use a local server:
   - Using Python: python -m http.server 8000
   - Using Node.js: npx http-server -p 8000
3. Access the application at http://localhost:8000

## Deployment
### Backend
The backend can be deployed to services like:
- Render
- Heroku
- AWS
- DigitalOcean
- Frontend
### The frontend can be deployed to:
- GitHub Pages
- Netlify
- Vercel
- Any static site hosting service

## Environment Variables
### Backend requires the following environment variables:
- MONGODB_URI: MongoDB connection string

## Dependencies
### Backend
- express: ^4.17.1
- mongoose: ^6.0.0
- cors: ^2.8.5
- dotenv: ^10.0.0

## Troubleshooting
### Common Issues
#### 1. CORS Errors:
   - Make sure to enable CORS in the backend
   - Use a local server instead of opening the HTML file directly
#### 2. Database Connection Issues:
   - Verify your MongoDB connection string
   - Ensure MongoDB Atlas has your IP address whitelisted
#### 3. Form Submission Fails:
   - Check browser console for errors
   - Verify backend server is running
   - Ensure the fetch URL in script.js matches your backend URL

## Future Enhancements
1. Add user authentication
2. Implement email verification
3. Add password reset functionality
4. Implement user dashboard
5. Add form validation on the backend
