"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";
import { AuthService } from "@/services/api";
import "./styles.css";

export default function SignUp() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const [errors, setErrors] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors([]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors([]);
    setLoading(true);
    setSuccess(false);

    // Validation
    if (formData.password !== formData.password_confirmation) {
      setErrors(["Passwords do not match"]);
      setLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setErrors(["Password must be at least 6 characters"]);
      setLoading(false);
      return;
    }

    try {
      await AuthService.signUp({
        email: formData.email,
        password: formData.password,
        password_confirmation: formData.password_confirmation,
        name: formData.name || undefined,
      });

      setSuccess(true);
      // Redirect to confirmation page after 3 seconds
      setTimeout(() => {
        router.push(`/auth/confirm-email?email=${encodeURIComponent(formData.email)}`);
      }, 3000);
    } catch (error) {
      if (error instanceof Error) {
        setErrors([error.message]);
      } else {
        setErrors(["Registration failed. Please try again."]);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Create Account"
        BGImage="/images/page-banner1.jpg"
      />

      <div className="auth-section pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8">
              <div className="auth-form-wrapper">
                <div className="auth-header">
                  <h2>Join Our Community</h2>
                  <p>Create your account to access exclusive content and resources</p>
                </div>

                {success ? (
                  <div className="alert alert-success">
                    <i className="fa-solid fa-check-circle"></i>
                    <div>
                      <strong>Registration Successful!</strong>
                      <p>Please check your email to confirm your account. Redirecting...</p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="auth-form">
                    {errors.length > 0 && (
                      <div className="alert alert-error">
                        <i className="fa-solid fa-exclamation-circle"></i>
                        <ul>
                          {errors.map((error, index) => (
                            <li key={index}>{error}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="form-group">
                      <label htmlFor="name">Full Name (Optional)</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Enter your email"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="password">Password *</label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Enter your password (min. 6 characters)"
                        required
                        minLength={6}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="password_confirmation">Confirm Password *</label>
                      <input
                        type="password"
                        id="password_confirmation"
                        name="password_confirmation"
                        value={formData.password_confirmation}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Confirm your password"
                        required
                        minLength={6}
                      />
                    </div>

                    <button
                      type="submit"
                      className="default-btn auth-btn"
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <i className="fa-solid fa-spinner fa-spin"></i> Creating Account...
                        </>
                      ) : (
                        <>
                          <i className="fa-solid fa-user-plus"></i> Create Account
                        </>
                      )}
                    </button>

                    <div className="auth-footer">
                      <p>
                        Already have an account?{" "}
                        <Link href="/auth/sign-in">Sign in here</Link>
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

