import { useLoaderData } from "react-router-dom";
import ContactForm from "./ContactForm";

function EditContact() {
  const data = useLoaderData();

  return (
    <ContactForm
      name={data.name}
      phone={data.phone}
      email={data.email}
      category={data.category}
      address={data.address}
    />
  );
}

export default EditContact;
