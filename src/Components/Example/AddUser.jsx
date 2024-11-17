import React, { useState } from "react";
import RoundedButton from "../Form/RoundedButton";
import RoundedInput from "../Form/RoundedInput";
import RoundedTextArea from "../Form/TextArea";

const AddUser = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phone) newErrors.phone = "Phone is required";

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
        message: "",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-6">
        <div className="w-full flex flex-col items-center space-y-2">
          {/* <label htmlFor="name" className="self-start text-gray-700">
            Name
          </label> */}
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
            {/* <label htmlFor="email" className="block text-gray-700">
              Email
            </label> */}
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
            {/* <label htmlFor="phone" className="block text-gray-700">
              Phone
            </label> */}
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
          <label htmlFor="message" className="block text-gray-700">
            Message
          </label>
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
