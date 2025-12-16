"use client";

import React, { useState } from "react";

interface NewsletterFormState {
  email: string;
}

const NewsletterForm: React.FC = () => {
  const [formData, setFormData] = useState<NewsletterFormState>({
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData.email);
    // Reset form data after submission if needed
    setFormData({ email: "" });
  };

  return (
    <form className="newsletter-form" onSubmit={handleSubmit}>
      <input
        type="email"
        className="input-newsletter"
        placeholder="Enter your email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        autoComplete="off"
      />
      <button type="submit" className="default-btn-two">
        Subscribe
      </button>
    </form>
  );
};

export default NewsletterForm;
