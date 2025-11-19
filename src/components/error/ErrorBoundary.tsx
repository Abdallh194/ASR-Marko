// ErrorBoundary.tsx
import React, { Component } from "react";
import type { ReactNode } from "react";

import Header from "../common/Header/Header";
import Footer from "../common/Footer/Footer";
interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <Header />
          <img
            src="/error-boundery.png"
            className="img-fluid"
            style={{ display: "block", margin: "40px auto" }}
          />
          <h5 style={{ color: "red", textAlign: "center" }}>
            An unexpected error occurred and will be resolved soon.
          </h5>
          <Footer />
        </>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
