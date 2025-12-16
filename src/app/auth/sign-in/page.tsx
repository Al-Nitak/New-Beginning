"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";
import { AuthService } from "@/services/api";
import "./styles.css";

export default function SignIn() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await AuthService.signIn(formData.email, formData.password);

      if (response.user && response.user.confirmed) {
        // Redirect to home page on successful login
        router.push("/");
      } else {
        // User not confirmed, redirect to confirmation page
        router.push(`/auth/confirm-email?email=${encodeURIComponent(formData.email)}`);
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Sign in failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Sign In"
        BGImage="/images/page-banner1.jpg"
      />

      <div className="auth-section pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8">
              <div className="auth-form-wrapper">
                <div className="auth-header">
                  <h2>Welcome Back</h2>
                  <p>Sign in to your account to continue</p>
                </div>

                <form onSubmit={handleSubmit} className="auth-form">
                  {error && (
                    <div className="alert alert-error">
                      <i className="fa-solid fa-exclamation-circle"></i>
                      <span>{error}</span>
                    </div>
                  )}

                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
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
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Enter your password"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <Link href="/auth/forgot-password" className="forgot-password-link">
                      Forgot your password?
                    </Link>
                  </div>

                  <button
                    type="submit"
                    className="default-btn auth-btn"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <i className="fa-solid fa-spinner fa-spin"></i> Signing In...
                      </>
                    ) : (
                      <>
                        <i className="fa-solid fa-sign-in-alt"></i> Sign In
                      </>
                    )}
                  </button>

                  <div className="auth-footer">
                    <p>
                      Don&apos;t have an account?{" "}
                      <Link href="/auth/sign-up">Create one here</Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

