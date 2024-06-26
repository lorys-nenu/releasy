# Releasy

# Releasy

Releasy is a micro-SaaS application designed to help you create and share cool release notes with your users effortlessly. This MVP version includes a landing page, user authentication, organization management, and release notes in Markdown format.

## Features

- Landing page
- User authentication (sign-up, login)
- Organization and user management
- Release notes creation and viewing in Markdown format

## Tech Stack

- **Frontend**: Next.js 14, Tailwind CSS
- **Backend**: Node.js, Next.js API routes
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Authentication**: NextAuth.js
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- PostgreSQL
- Git

### Installation

1. **Clone the repository**
  ```bash
  git clone https://github.com/your-username/releasy.git
  cd releasy
  ```

2. **Install dependencies**
  ```bash
  npm install
  ```

3. **Set up environment variables**

Create a .env file in the root directory and add the following environment variables:

```env
DATABASE_URL=postgresql://user:password@localhost:5432/releasy
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret
EMAIL_SERVER=smtp://user:password@smtp.mailtrap.io:2525
EMAIL_FROM=noreply@releasy.com
```

4. **Set up Prisma**

Generate Prisma client and run migrations to set up the database schema:

```bash
npx prisma generate
npx prisma migrate dev --name init
```

5. **Running the App**

Start the development server:

```bash
npm run dev
```

Open the app in your browser:

```bash
http://localhost:3000
```

### License

This project is licensed under the MIT License.