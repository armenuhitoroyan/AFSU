import React, { useState } from "react";
import RoundedInput from "../Form/RoundedInput";
import RoundedTextArea from "../Form/TextArea";
import RoundedSelect from "../Form/SelectOption";
import RoundedButton from "../Form/RoundedButton";
import "../../style/InputContainer.css";

const AddUser = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const departmentOptions = [
    { value: "", label: "Select Topic" },
    { value: "sales", label: "Select Topic1" },
    { value: "support", label: "Select Topic2" },
    { value: "hr", label: "Select Topic3" },
    { value: "it", label: "Select Topic4" },
  ];

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phone) newErrors.phone = "Phone is required";
    if (!formData.department) newErrors.department = "Department is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Submitted", formData);
      onAdd(formData);
      setFormData({
        name: "",
        email: "",
        phone: "",
        department: "",
        message: "",
      });
    }
  };

  return (
    <form className="Question" onSubmit={handleSubmit}>
      <div className="space-y-6">
        <div className="w-full flex flex-col items-center space-y-2">
          {errors.name && (
            <p className="self-start text-red-500 text-sm">{errors.name}</p>
          )}
          <RoundedInput
            type="text"
            placeholder="Your Name *"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
          />
        </div>

        <div className="w-full flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-1/2 space-y-2">
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
            <RoundedInput
              type="email"
              placeholder="Your Email *"
              name="email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
            />
          </div>

          <div className="w-full md:w-1/2 space-y-2">
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone}</p>
            )}
            <RoundedInput
              type="text"
              placeholder="Your Phone *"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              error={errors.phone}
            />
          </div>
        </div>

        <div className="w-full space-y-2">
          {errors.department && (
            <p className="text-red-500 text-sm">{errors.department}</p>
          )}
          <RoundedSelect
            name="department"
            value={formData.department}
            onChange={handleChange}
            options={departmentOptions}
            error={errors.department}
          />
        </div>

        <div className="w-full space-y-2">
          <RoundedTextArea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        <RoundedButton
          text="Send Message"
          type="submit"
          className="rounded-button"
        />
      </div>
    </form>
  );
};

export default AddUser;
