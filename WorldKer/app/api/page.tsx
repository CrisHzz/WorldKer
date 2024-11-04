import React from "react";
import CompanyRegistrationForm from "@/app/components/CompanyRegistrationForm";
import UserRegistrationForm from "@/app/components/UserRegistrationForm";
import TokenForm from "@/app/components/SendTokenForm";

const EmailPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Enviar Correos</h1>

      <div className="mb-8">
        <CompanyRegistrationForm />
      </div>

      <div className="mb-8">
        <UserRegistrationForm />
      </div>

      <div className="mb-8">
        <TokenForm />
      </div>
    </div>
  );
};

export default EmailPage;
