📦 Shared ORM Library (shared-orm)

This repository contains the database models (entities), migrations, and database connection setup that will be used by the backend service.

It is built using TypeORM and supports PostgreSQL.
📚 Project Structure

shared-orm/
├── src/
│ ├── entities/
│ │ ├── product.entity.ts
│ │ └── category.entity.ts
│ ├── migrations/
│ │ └── CreateInitialTables.ts
│ └── db/
│ └── database.connection.ts
├── ormconfig.ts
├── .env
├── package.json
└── tsconfig.json

⚙️ Setup Instructions

1. Clone the repository

git clone <repository-url>
cd shared-orm

2. Install dependencies

npm install

3. Create .env file

Create a .env file in the root directory with the following content:

DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=your_database_username
DB_PASSWORD=your_database_password
DB_DATABASE=mystore

Replace with your actual database credentials. 4. Set up the database

Ensure PostgreSQL is running and the database mystore exists.
If not, create it manually:

createdb mystore

5. Run database migrations

npm run migration:run

This will create the products and categories tables in your database.

📜 Available NPM Scripts
Script Description
npm run migration:run Run migrations to create tables
npm run migration:generate Generate a new migration file based on entity changes
npm run typeorm Run TypeORM CLI commands

🏛️ Entities Overview

Product Entity (products)
Field Type Description
id integer Primary Key
productName string Product Name
description string Product Description
price decimal Product Price
stockQuantity integer Stock Quantity
categoryId integer Foreign Key to Category
createdAt timestamp Creation Date
updatedAt timestamp Last Update Date

Category Entity (categories)
Field Type Description
id integer Primary Key
categoryName string Category Name
description string Category Description
isActive boolean Is Active Category
createdAt timestamp Creation Date
updatedAt timestamp Last Update Date

🛠️ Technologies Used

    TypeScript

    TypeORM

    PostgreSQL

    dotenv

📢 Notes

    This repository only contains shared ORM models, migrations, and DB connection logic.

    It is meant to be imported into the backend NestJS project.
