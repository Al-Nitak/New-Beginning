"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";
import { AuthService } from "@/services/api";
import "./styles.css";

function ConfirmEmailContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const token = searchParams.get("confirmation_token");

  const [status, setStatus] = useState<"pending" | "success" | "error" | "checking">(
    token ? "checking" : "pending"
  );
  const [message, setMessage] = useState<string>("");
  const [resending, setResending] = useState(false);

  useEffect(() => {
    // If token is provided, automatically confirm
    if (token) {
      handleConfirm(token);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  const handleConfirm = async (confirmationToken: string) => {
    setStatus("checking");
    try {
      const response = await AuthService.confirmEmail(confirmationToken);
      setStatus("success");
      setMessage(response.message || "Email confirmed successfully!");

      // Redirect to sign in after 3 seconds
      setTimeout(() => {
        router.push("/auth/sign-in");
      }, 3000);
    } catch (error) {
      setStatus("error");
      if (error instanceof Error) {
        setMessage(error.message);
      } else {
        setMessage("Email confirmation failed. The link may be invalid or expired.");
      }
    }
  };

  const handleResend = async () => {
    if (!email) {
      setMessage("Email address is required to resend confirmation.");
      return;
    }

    setResending(true);
    setMessage("");
    try {
      await AuthService.resendConfirmation(email);
      setMessage("Confirmation email sent! Please check your inbox.");
    } catch (error) {
      if (error instanceof Error) {
        setMessage(error.message);
      } else {
        setMessage("Failed to resend confirmation email. Please try again.");
      }
    } finally {
      setResending(false);
    }
  };

  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Confirm Your Email"
        BGImage="/images/page-banner1.jpg"
      />

      <div className="auth-section pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8">
              <div className="auth-form-wrapper">
                <div className="auth-header">
                  <h2>Email Confirmation</h2>
                </div>

                {status === "checking" && (
                  <div className="alert alert-info">
                    <i className="fa-solid fa-spinner fa-spin"></i>
                    <span>Confirming your email...</span>
                  </div>
                )}

                {status === "success" && (
                  <div className="alert alert-success">
                    <i className="fa-solid fa-check-circle"></i>
                    <div>
                      <strong>Email Confirmed!</strong>
                      <p>{message}</p>
                      <p className="mt-3">Redirecting to sign in page...</p>
                    </div>
                  </div>
                )}

                {status === "error" && (
                  <div className="alert alert-error">
                    <i className="fa-solid fa-exclamation-circle"></i>
                    <div>
                      <strong>Confirmation Failed</strong>
                      <p>{message}</p>
                    </div>
                  </div>
                )}

                {status === "pending" && (
                  <div className="confirmation-pending">
                    <div className="icon-wrapper">
                      <i className="fa-solid fa-envelope-circle-check"></i>
                    </div>
                    <h3>Check Your Email</h3>
                    <p>
                      We&apos;ve sent a confirmation email to{" "}
                      <strong>{email || "your email address"}</strong>
                    </p>
                    <p>
                      Please click the confirmation link in the email to activate your account.
                    </p>

                    {message && (
                      <div className={`alert ${message.includes("sent") ? "alert-success" : "alert-info"}`}>
                        <i className="fa-solid fa-info-circle"></i>
                        <span>{message}</span>
                      </div>
                    )}

                    <div className="resend-section">
                      <p>Didn&apos;t receive the email?</p>
                      <button
                        type="button"
                        onClick={handleResend}
                        className="default-btn auth-btn"
                        disabled={resending || !email}
                      >
                        {resending ? (
                          <>
                            <i className="fa-solid fa-spinner fa-spin"></i> Sending...
                          </>
                        ) : (
                          <>
                            <i className="fa-solid fa-paper-plane"></i> Resend Confirmation Email
                          </>
                        )}
                      </button>
                    </div>

                    <div className="auth-footer">
                      <p>
                        Already confirmed?{" "}
                        <Link href="/auth/sign-in">Sign in here</Link>
                      </p>
                    </div>
                  </div>
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

export default function ConfirmEmail() {
  return (
    <Suspense fallback={
      <div>
        <Navbar />
        <PageBanner
          pageTitle="Confirm Your Email"
          BGImage="/images/page-banner1.jpg"
        />
        <div className="auth-section pt-100 pb-70">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-8">
                <div className="auth-form-wrapper">
                  <div className="alert alert-info">
                    <i className="fa-solid fa-spinner fa-spin"></i>
                    <span>Loading...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    }>
      <ConfirmEmailContent />
    </Suspense>
  );
}

