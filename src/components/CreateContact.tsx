import { Form } from "react-router-dom";

function CreateContact() {
  return (
    <Form className="contact-form" method="post">
      <div className="form-input">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />
      </div>
      <div className="form-input">
        <label htmlFor="address">Address</label>
        <input type="text" id="address" />
      </div>
      <div className="form-input">
        <label htmlFor="phone">Phone Number</label>
        <input type="tel" id="phone" />
      </div>
      <div className="form-input">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
      </div>
      <div className="form-input">
        <label htmlFor="category">Category</label>
        <input type="text" id="category" />
      </div>
      <button className="create-button">Create</button>
    </Form>
  );
}

export default CreateContact;
