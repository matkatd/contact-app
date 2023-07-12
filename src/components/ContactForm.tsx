import { Form } from "react-router-dom"
import { TextInput } from 'react95';
import { Button } from 'react95';
import { v4 as uuidv4 } from "uuid";

function ContactForm({ name, address, category, phone, email }: { name: string, address: string, category: string, phone: string, email: string }) {
    return (
        <Form className="contact-form" method="post">
            <input type="hidden" name="id" value={uuidv4().toString()} />
            <div className="form-input">
                <label htmlFor="name">Name</label>
                <TextInput type="text" id="name" name="name" defaultValue={name} />
            </div>
            <div className="form-input">
                <label htmlFor="address">Address</label>
                <TextInput type="text" id="address" name="address" defaultValue={address} />
            </div>
            <div className="form-input">
                <label htmlFor="phone">Phone Number</label>
                <TextInput type="tel" id="phone" name="phone" defaultValue={phone} />
            </div>
            <div className="form-input">
                <label htmlFor="email">Email</label>
                <TextInput type="email" id="email" name="email" defaultValue={email} />
            </div>
            <div className="form-input">
                <label htmlFor="category">Category</label>
                <TextInput type="text" id="category" name="category" defaultValue={category} />
            </div>
            <Button square={false} primary={true} type="submit" className="create-button">
                {name === "" ? "Create" : "Update"}
            </Button>
        </Form>
    )
}

export default ContactForm