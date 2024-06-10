# School Timetable Management System

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Routes](#routes)
- [Generating Timetables](#generating-timetables)
- [Generating PDF](#generating-pdf)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The School Timetable Management System is a web application that allows school administrators to efficiently manage and generate timetables for classes. The system ensures that teachers are not overbooked and that subjects are evenly distributed across the week.

This project is built using Laravel for the backend and React for the frontend, combined through Inertia.js. MySQL is used for database management, and PDF generation is handled by DOMPDF.

## Features

- Add and manage teachers, classrooms, and subjects.
- Generate weekly timetables based on teacher availability and subject requirements.
- Export generated timetables as a PDF.
- User-friendly interface for managing school schedules.

## Prerequisites

Before you begin, ensure you have the following installed:

- PHP >= 8.0
- Composer
- Node.js and npm
- MySQL
- XAMPP (optional, for easier MySQL and PHP management)

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/school-timetable-management-system.git
    cd school-timetable-management-system
    ```

2. **Install PHP dependencies:**

    ```bash
    composer install
    ```

3. **Install Node.js dependencies:**

    ```bash
    npm install
    ```

4. **Configure environment variables:**

    Copy the `.env.example` file to `.env` and configure the database settings:

    ```bash
    cp .env.example .env
    ```

    Update `.env` with your database details:

    ```env
    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=your_database_name
    DB_USERNAME=your_database_user
    DB_PASSWORD=your_database_password
    ```

5. **Generate application key:**

    ```bash
    php artisan key:generate
    ```

6. **Run migrations:**

    ```bash
    php artisan migrate
    ```

7. **Seed the database (optional):**

    ```bash
    php artisan db:seed
    ```

8. **Build assets:**

    ```bash
    npm run dev
    ```

## Usage

1. **Start the development server:**

    ```bash
    php artisan serve
    ```

2. **Open the application in your browser:**

    Navigate to `http://localhost:8000` to access the application.

## Routes

- **Home**: `GET /`
- **Teachers**: `GET /teachers`
- **Add Teacher**: `GET /teachers/create`
- **Classrooms**: `GET /classrooms`
- **Add Classroom**: `GET /classrooms/create`
- **Subjects**: `GET /subjects`
- **Add Subject**: `GET /subjects/create`
- **Timetables**: `GET /timetable`
- **Generate Timetable**: `POST /timetable/generate`
- **Generate PDF**: `GET /timetable/pdf`

## Generating Timetables

1. Navigate to the Timetable page.
2. Select a classroom from the dropdown.
3. Click on "Generate Timetable" to create a new timetable for the selected classroom.

## Generating PDF

1. After generating a timetable, click on "Generate PDF."
2. The system will generate a PDF file of the timetable, which you can download and print.

## Project Structure

```plaintext
school-timetable-management-system/
│
├── app/                  # Laravel application code
│   ├── Http/             # Controllers and Middleware
│   ├── Models/           # Eloquent models
│   └── Providers/        # Service providers
│
├── resources/
│   ├── js/               # React components and pages
│   └── views/            # Blade templates for PDF
│
├── routes/
│   └── web.php           # Application routes
│
├── database/
│   ├── migrations/       # Database migrations
│   └── seeders/          # Database seeders
│
├── public/               # Public assets
├── storage/              # Log files and uploads
└── .env                  # Environment variables
