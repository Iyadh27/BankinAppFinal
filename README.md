Here's an updated and enhanced README for your Functional Banking System project:

---

# Functional Banking System

## Description
This project is a comprehensive implementation of a functional banking system, developed as part of a Database Systems course. The system is designed to efficiently manage various banking operations, focusing on a robust database architecture, effective data management, and a secure transaction environment. The front end is crafted using HTML and EJS, while the backend is powered by Node.js with Express.js. Our database is normalized to the second normal form, and we've employed functions and stored procedures to safeguard against SQL injections. Additionally, transactions are used to ensure that all operations adhere to the ACID properties, maintaining data integrity and consistency.

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Technologies Used](#technologies-used)
4. [Features](#features)
5. [Screenshots](#screenshots)
6. [Database Schema](#database-schema)

## Installation

1. **Clone the Repository**: Start by cloning the repository to your local system. Ensure that Git is installed.

   ```bash
   git clone https://github.com/Thejas0604/banking_system_G4.git
   ```

2. **Install Node Modules**: Navigate to the `B_App` directory in your terminal and install the required Node modules. Ensure that Node.js and npm are installed.

   ```bash
   npm install
   ```

3. **Setup Database**: Install MySQL Workbench (or any suitable client). Create a database using the SQL dump provided in the `/Sql_Datbase/database.sql` directory.

4. **Configure Environment Variables**: In the `/B_App` directory, create a `.env` file with your database credentials.

   ```
   DB_HOST=your_host_name
   DB_USER=your_username
   DB_PASS=your_password
   DB_NAME=your_database_name
   ```

5. **Start the Server**: Use the following command to start the server.

   ```bash
   nodemon app.js
   ```

## Usage

Once the server is up and running, you can access the application via your web browser. The application allows users to perform various banking operations securely and efficiently.

## Technologies Used

- **Front End**: HTML, EJS
- **Back End**: Node.js, Express.js
- **Database**: MySQL
- **Security**: SQL Injection Prevention using Stored Procedures and Functions
- **Data Integrity**: ACID Compliance through Transaction Management

## Features

- **User Management**: Secure handling of user data with authentication mechanisms.
- **Account Operations**: Perform standard banking operations such as deposits, withdrawals, and balance inquiries.
- **Transaction Safety**: Ensures all operations are processed safely, adhering to the ACID properties.
- **Data Normalization**: The database is normalized to the second normal form to eliminate redundancy and ensure data consistency.
- **Security Measures**: Utilizes stored procedures and functions to prevent SQL injections and ensure data integrity.

## Screenshots

![Banking System Home](https://github.com/Thejas0604/banking_system_G4/assets/109301978/ffc5c5be-8ec4-4dba-a0ce-35a0ac25bdee)
![Account Dashboard](https://github.com/Thejas0604/banking_system_G4/assets/109301978/d438004e-1296-4509-837f-050412a80acb)

## Database Schema

The following is the database schema used in this project, designed to optimize performance and maintain data integrity:

![Database Schema](https://github.com/Thejas0604/banking_system_G4/assets/109301978/dcd89c23-7708-4676-bafa-baaec30e28e8)

---

This project exemplifies how modern web applications can be securely built with a focus on maintaining data integrity and providing a seamless user experience. Feel free to contribute or fork the repository to further enhance its capabilities!
