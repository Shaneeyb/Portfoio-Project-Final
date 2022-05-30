import React from 'react';
import {
  MDBFooter,
  MDBContainer,
} from 'mdb-react-ui-kit';
import { MDBIcon} from 'mdbreact'
import '@fortawesome/fontawesome-free/css/all.min.css';

function Footer() {
  return (
    <MDBFooter className="bg-dark text-center text-white">
      <MDBContainer className="p-4 pb-0">
        <section className="mb-4">
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="https://www.linkedin.com/in/shane-burke-809811195/"
            role="button"
            alt="Linkedin"
          >
            <MDBIcon fab icon="linkedin" />
          </a>

          <a
            className="btn btn-outline-light btn-floating m-1"
            href="https://github.com/Shaneeyb"
            role="button"
            alt="GitHub"
          >
            <MDBIcon fab icon="github" />
          </a>
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="https://www.instagram.com/shaneeyb/"
            role="button"
            alt="Instagram"
          >
            <MDBIcon fab icon="instagram" />
          </a>
        </section>
      </MDBContainer>

      <div
        className="p-3 text-center"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2022 Copyright: Shane Burke
      </div>
    </MDBFooter>
  );
}

export default Footer;