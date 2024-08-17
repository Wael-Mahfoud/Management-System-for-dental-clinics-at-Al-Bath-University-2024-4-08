'use client';

import { Inter } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import Route from '@/component/route';
const inter = Inter({ subsets: ['latin'] });
import { UserProvider } from '@/logic/UserContext';
export default function RootLayout({ children }) {

  useEffect(() => {
    typeof document !== undefined ? require('bootstrap/dist/js/bootstrap.bundle.min.js') : null;
  }, []);

  return (
    <html lang="en">
      <head>
        <title>Dental Clinic</title>
        <link rel="stylesheet" href="/font-awesome.css" />
        <link rel="stylesheet" href="/styles/font-awesome.min.css" />
        <meta name="description" content="Welcome to our dental clinic" />
        <link rel="stylesheet" href="/cardStyle.css" />

      </head>
      <body className={inter.className}>
        <UserProvider>
          <div className="bg-light">

            <main className="mt-5 pt-5">
              <Route />
              {children}
            </main>
          </div>
        </UserProvider>
      </body>
    </html>
  );
}
