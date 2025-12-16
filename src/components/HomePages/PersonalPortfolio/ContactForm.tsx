"use client";

import React, { useState } from "react";
import Image from "next/image";

import contactImg from "../../../../public/images/personal-portfolio/learn-Quran.png";

interface FormState {
  name: string;
  email: string;
  number: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    number: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    // Reset form data after submission if needed
    setFormData({
      name: "",
      email: "",
      number: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
      <div className="pp-contact-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="contact-img">
                <Image
                  src={contactImg}
                  alt="Contact"
                  width={800}
                  height={567}
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="contact-form">
                <div className="contact-title">
                  <h2>Hire Me!</h2>
                  <p>
                    I am available for freelancing work. Please connect with me
                    via phone:{" "}
                    <a href="tel:+441372278462">+44 1372 278462</a> or email:{" "}
                    <a href="mailto:hello@new-beginning.com">hello@new-beginning.com</a>
                  </p>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="contact-form-box">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            className="form-control"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="form-control"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="tel"
                            name="number"
                            placeholder="Phone number"
                            className="form-control"
                            value={formData.number}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            className="form-control"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <textarea
                            name="message"
                            cols={30}
                            rows={6}
                            placeholder="Write your message..."
                            className="form-control"
                            value={formData.message}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-lg-12 col-sm-12">
                        <button type="submit" className="btn btn-primary">
                          Send Message
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
