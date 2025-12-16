"use client";

import React, { useState } from "react";
import { DoctorBlogAPI } from "@/services/api";

interface CommentsFormProps {
  articleIdOrSlug: number | string;
  onCommentAdded?: (comment: any) => void;
}

const CommentsForm: React.FC<CommentsFormProps> = ({ articleIdOrSlug, onCommentAdded }) => {
  const [formData, setFormData] = useState({
    author_name: "",
    author_email: "",
    content: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    setSuccess(false);

    try {
      const newComment = await DoctorBlogAPI.createArticleComment(articleIdOrSlug, {
        author_name: formData.author_name,
        author_email: formData.author_email,
        content: formData.content,
      });

      setSuccess(true);
      setFormData({ author_name: "", author_email: "", content: "" });

      if (onCommentAdded) {
        onCommentAdded(newComment);
      }

      // Reset success message after 3 seconds
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to post comment");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <div className="comment-respond">
        <h3 className="comment-reply-title">Leave a Reply</h3>

        {success && (
          <div className="alert alert-success" role="alert">
            Your comment has been submitted successfully!
          </div>
        )}

        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}

        <form className="comment-form" onSubmit={handleSubmit}>
          <div className="comment-notes">
            <span id="email-notes">
              Your email address will not be published.
            </span>
            Required fields are marked <span className="required">*</span>
          </div>

          <div className="comment-form-comment mb-3">
            <label>Comment</label>
            <textarea
              name="content"
              id="comment"
              rows={5}
              value={formData.content}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="comment-form-author mb-3">
            <label>
              Name <span className="required">*</span>
            </label>
            <input
              type="text"
              id="author"
              name="author_name"
              value={formData.author_name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="comment-form-email mb-3">
            <label>
              Email <span className="required">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="author_email"
              value={formData.author_email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-submit">
            <input
              type="submit"
              name="submit"
              id="submit"
              className="submit"
              value={submitting ? "Submitting..." : "Post A Comment"}
              disabled={submitting}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default CommentsForm;
