import React from "react";
import { Alert } from "react-bootstrap";
import "./TooManyRequestPage.style.css";

function TooManyRequestPage() {
  return (
    <div className="error-page">
      <Alert variant="danger">
        Too Many Request: api 요청 횟수를 초과했습니다.
      </Alert>
    </div>
  );
}

export default TooManyRequestPage;
