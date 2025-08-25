#Project Overview
A responsive website for Genesis 2025, the flagship event of IIC (Institution's Innovation Council), featuring registration functionality, admin dashboard, and email confirmations.
#Tech Stack
###Frontend
HTML5 - Structure and semantics
CSS3 - Styling with custom properties and Flexbox/Grid
JavaScript (Vanilla) - Interactivity and DOM manipulation
Font Awesome - Icons
Google Fonts (Poppins) - Typography

###Backend
Node.js - Runtime environment
Express.js - Web framework
MongoDB - Database
Mongoose - ODM for MongoDB
Nodemailer - Email functionality
CORS - Cross-origin resource sharing
dotenv - Environment variables

#Setup Instructions
###Prerequisites
Node.js (v14 or higher)
MongoDB (local installation or MongoDB Atlas account)
Git

###1. Clone the Repository
git clone https://github.com/SAKTHIM-collab/iicsih.git
cd iicsih
###2. Backend Setup
####Navigate to backend directory
cd backend
####Install dependencies
npm install
Set up environment variables
Create a .env file with the following content:
MONGODB_URI=mongodb://localhost:27017/genesis
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password

Start the server
npm start

###3. Frontend Setup
http://localhost:3000

###4. Database Setup
Install MongoDB locally or use MongoDB Atlas
The server will automatically create the "genesis" database
Registrations are stored in the "registrations" collection

###5. Email Configuration (Optional)
Enable 2-factor authentication on your Gmail account
Generate an app password (not your regular password)
Add the credentials to your .env file

###6. Admin Access
http://localhost:3000/admin.html

#Features
##User Features
Responsive design for all devices
Dark/light mode toggle
Animated sections and smooth scrolling
Registration form with validation
Success confirmation messages
Admin Features
View all registrations in a table
Export data to CSV
Real-time data refresh
##Technical Features
MongoDB database integration
RESTful API architecture
Email confirmation system
Duplicate registration prevention
CORS enabled for cross-origin requests

#Deployment
##Local Deployment
Follow the setup instructions above
Ensure MongoDB is running
Start the server with npm start
Access at http://localhost:3000

##Production Deployment
Set up a MongoDB Atlas cluster
Update the MONGODB_URI in your environment variables

#API Endpoints
POST /api/register - Submit registration
GET /api/registrations - Get all registrations (admin)

#gdrive link of working : https://drive.google.com/file/d/190rvZHSWNXgW0XCkPdHXqlQYQ9N40pyP/view?usp=drivesdk

##THANK YOU!
