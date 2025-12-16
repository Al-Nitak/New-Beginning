"use client";

import React, { useState } from "react";
import Image from "next/image";

// Define TypeScript interface for FAQ items
interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

// Define the FAQ data
const faqData: FaqItem[] = [
  {
    id: "a",
    question: "What access do I have on the free plan?",
    answer:
      "You can access all core features with usage and no credit card required.",
  },
  {
    id: "b",
    question: "What access do I have on a free trial?",
    answer:
      "The free trial unlocks all premium features for a limited time—no restrictions.",
  },
  {
    id: "c",
    question: "Does the price go up as my team gets larger?",
    answer:
      "Yes, pricing scales based on the number of active team members on your account.",
  },
  {
    id: "d",
    question: "How can I cancel/pause my subscription?",
    answer:
      "You can cancel or pause anytime from your account settings—no questions asked.",
  },
  {
    id: "e",
    question: "Can I pay via an invoice?",
    answer:
      "Yes, we support invoice billing for annual plans or enterprise accounts.",
  },
];

const FaqContent: React.FC = () => {
  // State to manage open accordion item
  const [openItem, setOpenItem] = useState<string>("a");

  // Toggle accordion item
  const toggleItem = (id: string) => {
    setOpenItem((prev) => (prev === id ? "" : id));
  };

  return (
    <>
      <div className="faq-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="faq-img">
                <Image
                  src="/images/faq-img.jpg"
                  alt="Image"
                  width={800}
                  height={534}
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="faq-accordion">
                {faqData.map((faq) => (
                  <div key={faq.id} className="accordion-item">
                    <div
                      className="accordion-button"
                      onClick={() => toggleItem(faq.id)}
                      role="button"
                      aria-expanded={openItem === faq.id}
                      aria-controls={`panel-${faq.id}`}
                    >
                      <i
                        className={`fa-solid ${
                          openItem === faq.id
                            ? "fa-chevron-down"
                            : "fa-chevron-right"
                        }`}
                      ></i>{" "}
                      {faq.question}
                    </div>

                    <div
                      id={`panel-${faq.id}`}
                      className={`accordion-panel ${
                        openItem === faq.id ? "open" : "closed"
                      }`}
                      role="region"
                      aria-labelledby={`button-${faq.id}`}
                    >
                      <p dangerouslySetInnerHTML={{ __html: faq.answer }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqContent;
