"use client";

import React, { useState } from "react"; // Import useState
import { Label, Select } from "flowbite-react";

export default function Dropdown({ question, handleChange }) {
  const [selectedValue, setSelectedValue] = useState("0"); // Default value is 0

  // Handle the change event for the select dropdown
  const handleSelectChange = (e) => {
    const value = e.target.value;
    setSelectedValue(value); // Update the selected value state
    handleChange(question, value); // Notify the parent component with the new value
  };

  return (
    <div className="mb-4">
      <Label htmlFor={question} value={question} className="block text-gray-700 mb-2" />
      <Select
        id={question}
        required
        value={selectedValue} // Bind the selected value to state
        onChange={handleSelectChange} // Handle the change event
      >
        <option value="0">0 - None</option>
        <option value="1">1 - Mild</option>
        <option value="2">2 - Moderate</option>
        <option value="3">3 - Severe</option>
      </Select>
    </div>
  );
}
