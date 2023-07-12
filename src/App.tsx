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
import { getData, setData } from "./utils";
import EditContact from "./components/EditContact";



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
          const currentData: Array<Contact> = getData("contacts");
          currentData.push(Object.fromEntries(formData.entries()) as unknown as Contact);
          setData("contacts", JSON.stringify(currentData));
          return redirect("/list");
        },
      },
      {
        path: "person/:personId",
        element: <PersonCard />,
        loader: async ({ params }) => {
          const personId: string = params.personId ? params.personId : "";
          const data: Array<Contact> = getData("contacts");
          const contact: Array<Contact> = data.filter((e: Contact) => {
            return e.id === personId;
          });
          return json(contact[0]);
        },
      },
      {
        path: "person/:personId/edit",
        element: <EditContact />,
        loader: async ({ params }) => {
          const personId: string = params.personId ? params.personId : "";
          const data: Array<Contact> = getData("contacts");
          const contact: Array<Contact> = data.filter((e: Contact) => {
            return e.id === personId;
          });
          return json(contact[0]);
        },
        action: async ({ params, request }) => {
          const formData = await request.formData();
          const currentData: Array<Contact> = getData("contacts");
          const personId: string = params.personId ? params.personId : "";
          const contacts: Array<Contact> = currentData.filter((e: Contact) => {
            return e.id !== personId
          })
          contacts.push(Object.fromEntries(formData.entries()) as unknown as Contact);
          setData("contacts", JSON.stringify(contacts));
          return redirect("/list");
        },
      },
      {
        path: "person/:personId/delete",
        loader: async ({ params }) => {
          const personId: string = params.personId ? params.personId : "";
          const data: Array<Contact> = getData("contacts");
          const contacts: Array<Contact> = data.filter((e: Contact) => {
            return e.id !== personId;
          });
          setData("contacts", JSON.stringify(contacts));
          return redirect("/list");
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
