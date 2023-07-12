import { Form } from "react-router-dom";
import { Button, Frame, TextInput } from "react95";
import { v4 as uuidv4 } from "uuid";

function CreateContact() {
  return (
    <Form className="contact-form" method="post">
      <input type="hidden" name="id" value={uuidv4().toString()} />
      <div className="form-input">
        <label htmlFor="name">Name</label>
        <TextInput type="text" id="name" name="name" />
      </div>
      <div className="form-input">
        <label htmlFor="address">Address</label>
        <TextInput type="text" id="address" name="address" />
      </div>
      <div className="form-input">
        <label htmlFor="phone">Phone Number</label>
        <TextInput type="tel" id="phone" name="phone" />
      </div>
      <div className="form-input">
        <label htmlFor="email">Email</label>
        <TextInput type="email" id="email" name="email" />
      </div>
      <div className="form-input">
        <label htmlFor="category">Category</label>
        <TextInput type="text" id="category" name="category" />
      </div>
      <Button primary={true} type="submit" className="create-button">
        Create
      </Button>
    </Form>
  );
}

export default CreateContact;
