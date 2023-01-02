'use client'
import React from 'react'
import { Provider } from 'react-redux'
import store from '../redux/store'
import NavBar from './components/NavBar'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Provider store={store}>
        <body>
          <NavBar />
            {children}
        </body>
      </Provider>
    </html>
  )
}