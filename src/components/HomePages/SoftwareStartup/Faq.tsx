"use client";

import React, { useState } from "react";
import Image from "next/image";

// Define TypeScript interface for FAQ items
interface FaqItem {
  id: string;
  question: string;
  answer: string[];
}

interface FaqContent {
  subTitle: string;
  title: string;
}

// Define the FAQ data
const faqData: FaqItem[] = [
  {
    id: "a",
    question: "How many team members can I invite?",
    answer: [
      'You can invite up to <strong>10 team members</strong> on the basic plan. For more, check our <a href="#" target="_blank">pricing page</a>.',
      "Need more? We offer flexible plans for growing teams.",
    ],
  },
  {
    id: "b",
    question: "What is the maximum file upload size?",
    answer: [
      "You can upload files up to 500MB. For larger uploads, contact support or upgrade your plan.",
    ],
  },
  {
    id: "c",
    question: "How do I reset my password?",
    answer: [
      "Go to the login page and click 'Forgot password'. A reset link will be emailed to you instantly.",
    ],
  },
  {
    id: "d",
    question: "Can I cancel my subscription?",
    answer: [
      "Yes, you can cancel anytime from your account settings. No hidden fees or commitments.",
    ],
  },
  {
    id: "e",
    question: "Can I pay via an invoice?",
    answer: [
      "Yes, invoice billing is available for annual plans or enterprise clients upon request.",
    ],
  },
  {
    id: "f",
    question: "Can I cancel my subscription?",
    answer: [
      "Yes, you may cancel at any time. Your access will remain until the end of your billing cycle.",
    ],
  },
];

// Define section title data
const sectionTitle: FaqContent = {
  subTitle: "Frequently Ask & Question",
  title: "Dedicated to help anything people’s needs",
};

const Faq: React.FC = () => {
  // State to manage open accordion item
  const [openItem, setOpenItem] = useState<string>("a");

  // Toggle accordion item
  const toggleItem = (id: string) => {
    setOpenItem((prev) => (prev === id ? "" : id));
  };

  return (
    <>
      <div className="pb-100">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">{sectionTitle.subTitle}</span>
            <h2>{sectionTitle.title}</h2>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="faq-accordion software-faq">
                {faqData.map((faq) => (
                  <div key={faq.id} className="accordion-item">
                    <div
                      className="accordion-button"
                      onClick={() => toggleItem(faq.id)}
                      role="button"
                      aria-expanded={openItem === faq.id}
                      aria-controls={`panel-${faq.id}`}
                    >
                      <div className="d-flex align-items-center justify-content-between gap-3">
                        {faq.question}
                        <i
                          className={`fa-solid ${
                            openItem === faq.id
                              ? "fa-chevron-down"
                              : "fa-chevron-right"
                          }`}
                        ></i>
                      </div>
                    </div>

                    <div
                      id={`panel-${faq.id}`}
                      className={`accordion-panel ${
                        openItem === faq.id ? "open" : "closed"
                      }`}
                      role="region"
                      aria-labelledby={`button-${faq.id}`}
                    >
                      {faq.answer.map((paragraph, index) => (
                        <p
                          key={index}
                          dangerouslySetInnerHTML={{ __html: paragraph }}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-6">
              <div
                className="faq-img pl-30"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <Image
                  src="/images/software/faq-img.png"
                  alt="Image"
                  width={744}
                  height={744}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
