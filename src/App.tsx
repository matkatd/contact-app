/*App.js*/
import { Component } from "react";
import "./App.css";
//Import all needed Component for this tutorial
import {
  json,
  createBrowserRouter,
  RouterProvider,
  redirect,
} from "react-router-dom";
import PersonCard from "./components/PersonCard";
import CreateContact from "./components/CreateContact";
import ContactList from "./components/ContactList";
import Root from "./routes/Root";
import Contact from "./types/Contact";

function getData(id: string): any {
  if (id === "") {
    return null;
  }
  let data = localStorage.getItem(id);
  if (data === null) {
    localStorage.setItem(id, "[]");
    return [];
  } else {
    return JSON.parse(data);
  }
}

function setData(key: string, data: string) {
  localStorage.setItem("contacts", data);
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
          return getData("contacts");
        },
      },
      {
        path: "new",
        element: <CreateContact />,
        action: async ({ request }) => {
          const formData = await request.formData();
          const currentData = getData("contacts");
          currentData.push(Object.fromEntries(formData.entries()));
          setData("contacts", JSON.stringify(currentData));
          return redirect("/list");
        },
      },
      {
        path: "person/:personId",
        element: <PersonCard />,
        loader: async ({ params }) => {
          const personId: string = params.personId ? params.personId : "";
          const data = getData("contacts");
          const contact = data.filter((e: Contact) => {
            return e.id === personId;
          });
          return json(contact[0]);
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
