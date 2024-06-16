import { useEffect, useState } from 'react'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from './componnents/Header';
import Questions from './componnents/Questions';
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <h1>home</h1>,
    },
    {
      path: "about",
      element: <h1>about</h1>,
    },
    {
      path: "projects",
      element: <Questions  />,
    },
    {
      path: "contact",
      element: <h1>cotact</h1>,
    },
  ]);

  return (
    <>
      <Header />
      <RouterProvider router={router} />

    </>
  )
}

export default App
