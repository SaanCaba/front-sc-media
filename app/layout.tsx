import React from 'react'
import NavBar from './components/NavBar'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body>
      <NavBar />
        {children}
        </body>
    </html>
  )
}