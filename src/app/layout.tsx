
import React from "react";
import "./globals.css";
import Header from "@/components/layout/Header";



export default function RootLayout({children}:{children:React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}
