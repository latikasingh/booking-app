
# Booking App

## Summary
The Booking App is a web application built with Next.js, TypeScript, Tailwind CSS, and Appwrite. It allows users to book meeting or conference rooms, manage bookings, and authenticate users. 

The app provides pages for user registration, login, room management, and booking details. Admins can add rooms, while users can view available rooms and their bookings. The app uses Appwrite for backend services, including authentication and data storage.

## Features
- **Home Page**: Landing page.
- **Login & Register**: User authentication.
- **Sign Out**: Logs the user out.
- **Room Management**: View, add, and manage rooms.
- **Booking Details**: View and manage bookings.
- **404 Page**: Handles unknown routes.
- **No Data & Loading Pages**: Shows appropriate messages when no data or loading is present.

## Tech Stack
- **Next.js**: React framework for server-rendered apps.
- **TypeScript**: Static typing for JavaScript.
- **Tailwind CSS**: Utility-first CSS framework.
- **Appwrite**: Backend-as-a-service platform for authentication and data storage.
- **Luxon**: Date-time handling.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/latikasingh/booking-app.git
   cd booking-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   Create a `.env.local` file in the root directory and add the following environment variables:

   ```bash
   NEXT_PUBLIC_APPWRITE_ENDPOINT=<your-appwrite-endpoint>
   NEXT_PUBLIC_APPWRITE_PROJECT_ID=<your-appwrite-project-id>
   NEXT_PUBLIC_APPWRITE_DATABASE_ID=<your-appwrite-database-id>
   NEXT_PUBLIC_APPWRITE_USER_COLLECTION_ID=<your-user-collection-id>
   NEXT_PUBLIC_APPWRITE_ROOM_COLLECTION_ID=<your-room-collection-id>
   NEXT_PUBLIC_APPWRITE_BOOKING_COLLECTION_ID=<your-booking-collection-id>
   ```

## Scripts

- **dev**: Starts the development server with turbopack:

  ```bash
  npm run dev
  ```

- **build**: Builds the application for production:

  ```bash
  npm run build
  ```

- **start**: Starts the production server:

  ```bash
  npm run start
  ```

- **lint**: Lints the project:

  ```bash
  npm run lint
  ```
  
## Contributing

Feel free to open issues or submit pull requests for improvements or bug fixes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Enjoy building your room booking app! 🚀