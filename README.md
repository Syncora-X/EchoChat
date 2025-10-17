# Real-Time Chat Application

A fully functional real-time chat web application built with React, TypeScript, Supabase, and Tailwind CSS. Features include user authentication, real-time messaging, online status indicators, and a beautiful responsive UI.

## Features

- **User Authentication**: Email/password authentication via Supabase Auth
- **Real-Time Messaging**: Instant message delivery using Supabase Realtime
- **Online Status**: Live online/offline indicators for all users
- **Message History**: Complete chat history between users
- **Read Receipts**: Track message read status
- **Responsive Design**: Fully mobile-friendly interface
- **Animations**: Smooth transitions and message animations using Framer Motion
- **Beautiful UI**: Modern, clean design with Tailwind CSS

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Database & Auth**: Supabase (PostgreSQL + Row Level Security)
- **Real-time**: Supabase Realtime
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Project Structure

```
project/
├── src/
│   ├── components/
│   │   ├── AuthForm.tsx          # Login/Signup form
│   │   ├── ChatApp.tsx            # Main chat application
│   │   ├── ChatWindow.tsx         # Chat conversation view
│   │   └── UserList.tsx           # Users sidebar
│   ├── contexts/
│   │   └── AuthContext.tsx        # Authentication context
│   ├── lib/
│   │   └── supabase.ts            # Supabase client config
│   ├── App.tsx                    # Root component
│   ├── main.tsx                   # Application entry
│   └── index.css                  # Global styles
├── .env                           # Environment variables
├── .env.example                   # Environment variables template
└── package.json                   # Dependencies
```

## Database Schema

### Tables

**profiles**
- `id` (uuid, primary key, references auth.users)
- `name` (text) - User's display name
- `email` (text) - User's email
- `avatar_url` (text, optional) - Profile picture URL
- `is_online` (boolean) - Online status
- `last_seen` (timestamptz) - Last activity timestamp
- `created_at` (timestamptz) - Account creation time

**messages**
- `id` (uuid, primary key)
- `sender_id` (uuid) - Message sender
- `receiver_id` (uuid) - Message recipient
- `content` (text) - Message text
- `is_read` (boolean) - Read status
- `created_at` (timestamptz) - Message timestamp

### Security

Row Level Security (RLS) is enabled on all tables with the following policies:

**Profiles**:
- Users can view all profiles
- Users can only update their own profile

**Messages**:
- Users can only see messages where they are sender or receiver
- Users can only send messages as themselves
- Users can update read status on received messages

## Setup Instructions

### Prerequisites

- Node.js 18+ installed
- A Supabase account (free tier works fine)

### 1. Clone and Install

```bash
# Install dependencies
npm install
```

### 2. Supabase Setup

The database schema has already been created with the following structure:
- User profiles table with online status tracking
- Messages table with read receipts
- Row Level Security policies for data privacy
- Automatic profile creation on user signup

Your Supabase credentials are already configured in the `.env` file.

### 3. Environment Variables

Your `.env` file is already set up with:

```env
VITE_SUPABASE_URL=https://jhadticoaljkebgatpal.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

### 4. Run the Application

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The application will be available at `http://localhost:5173`

## Deployment to Vercel

### Quick Deploy

1. **Install Vercel CLI** (optional):
```bash
npm install -g vercel
```

2. **Deploy**:
```bash
# Using CLI
vercel

# Or push to GitHub and import in Vercel dashboard
```

3. **Set Environment Variables in Vercel**:
   - Go to your Vercel project settings
   - Navigate to Environment Variables
   - Add the following:
     - `VITE_SUPABASE_URL`
     - `VITE_SUPABASE_ANON_KEY`

### GitHub Integration

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Add environment variables
6. Deploy!

## Usage

### Creating an Account

1. Open the application
2. Click "Sign up" on the login page
3. Enter your name, email, and password (minimum 6 characters)
4. Click "Sign Up"

### Logging In

1. Enter your email and password
2. Click "Sign In"

### Sending Messages

1. Select a user from the left sidebar
2. Type your message in the input box at the bottom
3. Press Enter or click the send button
4. Your message will appear instantly for both users

### Features in Action

- **Online Status**: Green dot indicates when users are online
- **Real-time Updates**: Messages appear instantly without refresh
- **Read Receipts**: Messages are marked as read automatically
- **Date Separators**: Messages are organized by date
- **Responsive Design**: Works seamlessly on mobile and desktop
- **Smooth Animations**: Messages slide in with elegant animations

## Development

### Available Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
npm run lint       # Lint code
npm run typecheck  # Type check TypeScript
```

### Code Structure

- **Components**: Modular, reusable React components
- **Context**: Centralized authentication state management
- **Type Safety**: Full TypeScript coverage
- **Security**: Row Level Security on all database operations
- **Real-time**: Supabase channels for live updates

## Security Best Practices

- All database access is protected by Row Level Security
- Authentication tokens are managed securely by Supabase
- Users can only access their own data
- Passwords are hashed and never stored in plain text
- Environment variables are never exposed to the client

## Troubleshooting

### Authentication Issues

- Ensure your Supabase URL and anon key are correct
- Check that email confirmation is disabled in Supabase Auth settings
- Verify Row Level Security policies are properly configured

### Real-time Not Working

- Check browser console for connection errors
- Verify Supabase Realtime is enabled for your tables
- Ensure you're subscribed to the correct channels

### Build Errors

- Run `npm install` to ensure all dependencies are installed
- Check for TypeScript errors with `npm run typecheck`
- Clear the cache: `rm -rf node_modules .vite && npm install`

## License

MIT

## Support

For issues or questions, please open an issue on the GitHub repository.
