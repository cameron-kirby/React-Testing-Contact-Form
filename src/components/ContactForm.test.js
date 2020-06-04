import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";
import { act } from "react-dom/test-utils";

test("renders correctly", () => {
  render(<ContactForm />);
});

test("Input form correct", () => {
    const { getByLabelText, getByRole, findAllByText } = render(<ContactForm />);
    // query for the form inputs
    const firstNameInput = getByLabelText(/first name/i);
    const lastNameInput = getByLabelText(/last name/i);
    const emailInput = getByLabelText(/email/i);
    const messageInput = getByLabelText(/message/i);
    const submitButton = getByRole(/button/i);

    fireEvent.change(firstNameInput, {
        target: { name: "firstName", value: "Bob" }
    });
    fireEvent.change(lastNameInput, {
        target: { name: "lastName", value: "Snyder" }
    });
    fireEvent.change(emailInput, {
        target: { name: "emailName", value: "bob.snyder@gmail.com" }
    });
    fireEvent.change(messageInput, {
        target: { name: "message", value: "Hello! Nice to get in contact with you again" }
    });
    
    fireEvent.click(submitButton);
    fireEvent.click(submitButton);
    
    // Assertion
    findAllByText(/bob/i);
});

