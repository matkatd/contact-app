import { Form } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

function CreateContact() {
  return (
    <Form className="contact-form" method="post">
      <input type="hidden" name="id" value={uuidv4().toString()}></input>
      <div className="form-input">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" />
      </div>
      <div className="form-input">
        <label htmlFor="address">Address</label>
        <input type="text" id="address" name="address" />
      </div>
      <div className="form-input">
        <label htmlFor="phone">Phone Number</label>
        <input type="tel" id="phone" name="phone" />
      </div>
      <div className="form-input">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
      </div>
      <div className="form-input">
        <label htmlFor="category">Category</label>
        <input type="text" id="category" name="category" />
      </div>
      <button type="submit" className="create-button">
        Create
      </button>
    </Form>
  );
}

export default CreateContact;
