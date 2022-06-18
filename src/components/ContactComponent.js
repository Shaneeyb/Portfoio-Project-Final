import React, { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";

function Contact() {

useEffect(() =>{
  Aos.init({duration: 1000})
}, []);


  return (
    <div id="contact" data-aos="fade-right">
      <Form
        data-netlify="true"
        method="post"
        name="contact form"
        onSubmit="submit"
        style={{
          padding: "40px",
        }}
      >
        <input type="hidden" name="form-name" value="contact" />

        <Form.Group className="mb-6" controlId="contactForm">
          <Form.Label>Name</Form.Label>
          <Form.Control
          name="name"
            type="text"
            className="input mb-3 p-2"
            placeholder="Obi Wan Kenobi"
            style={{
              color: "#FFFAF3",
              backgroundColor: "#454545",
              border: "black 1px solid"
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="contactForm">
          <Form.Label>Email address</Form.Label>
          <Form.Control
          name="email"
            type="email"
            className="input mb-3 p-2"
            placeholder="ObiWanKenobi@TheJediCouncel.com"
            style={{
              color: "#FFFAF3",
              backgroundColor: "#454545",
              border: "black 1px solid"
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="contactForm">
          <Form.Label>Comments</Form.Label>
          <Form.Control
          name="message"
            as="textarea"
            className="input"
            rows={3}
            placeholder="Write your comment here!"
            style={{
              color: "#FFFAF3",
              backgroundColor: "#454545",
              border: "black 1px solid"
            }}
          />
        </Form.Group>
        <Button type="submit" className="mb-2 p-2">
          Submit
        </Button>
      </Form>
    </div>
  );
}
export default Contact;
