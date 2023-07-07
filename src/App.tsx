/*App.js*/
import React, { Component } from "react";
import "./App.css";
//Import all needed Component for this tutorial
import { json, createBrowserRouter, RouterProvider } from "react-router-dom";
import PersonCard from "./components/PersonCard";
import CreateContact from "./components/CreateContact";
import ContactList from "./components/ContactList";
import { v4 as uuidv4 } from "uuid";
import Root from "./routes/Root";

function getData(id: string): string | null {
  return id === "" ? null : localStorage.getItem("id");
}
function getAllData() {
  return { ...localStorage };
}

function setData(id: string, data: any) {
  localStorage.setItem(id, data);
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,

    children: [
      {
        path: "list",
        element: <ContactList />,
        loader: async () => {
          return json(getAllData());
        },
      },
      {
        path: "new",
        element: <CreateContact />,
        action: async ({ request }) => {
          const formData = await request.formData();
          setData(uuidv4(), Object.fromEntries(formData.entries()));
          return null;
        },
      },
      {
        path: "person/:personId",
        element: <PersonCard />,
        loader: async ({ params }) => {
          const personId: string = params.id ? params.id : "";
          const data = getData(personId);
          return json(data);
        },
      },
    ],
  },
]);

class App extends Component {
  render() {
    return <RouterProvider router={router} />;
  }
}

export default App;
