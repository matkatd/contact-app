import { useLoaderData } from "react-router-dom";
import ContactCard from "./ContactCard";
import Contact from "../types/Contact";
import { ScrollView } from "react95";

function ContactList() {
  const contacts: any = useLoaderData();
  console.log(contacts);

  return (
    <ScrollView style={{ height: "80vh" }}>
      <div className="contact-list">
        <ul>
          {contacts?.map((contact: Contact) => {
            return (
              <ContactCard key={contact.id} id={contact.id} name={contact.name} />
            );
          })}
        </ul>
      </div>
    </ScrollView>
  );
}
export default ContactList;
// {"name":"David Thompson","address":"669 E 800 N","phone":"2082709308","email":"matkatdavid@gmail.com","category":"new"},
