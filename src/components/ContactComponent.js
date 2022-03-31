import React from "react";
import { Button, Form } from "react-bootstrap";

function Contact() {
  return (
    <div id="contact">
      <Form
        style={{
          padding: "40px",
        }}
      >
        <Form.Group className="mb-6" controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="email"
            className="w-50 p-2"
            placeholder="Obi Wan Kenobi"
            style={{
              //hex color not working for placeholder text
              color: "#FFFAF3",
              backgroundColor: "#454545",
              border: "black 1px solid",
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            className="w-50 p-2"
            placeholder="ObiWanKenobi@TheJediCouncel.com"
            style={{
              //hex color not working for placeholder text
              color: "#FFFAF3",
              backgroundColor: "#454545",
              border: "black 1px solid"
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Comments</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Write your comment here!"
            style={{
              //hex color not working for placeholder text
              color: "#FFFAF3",
              backgroundColor: "#454545",
              border: "black 1px solid",
            }}
          />
        </Form.Group>
        <Button type="submit" className="mb-2">
          Submit
        </Button>
      </Form>
    </div>
  );
}
export default Contact;
