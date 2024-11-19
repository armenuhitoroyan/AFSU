import React, { useState } from "react";
// import { useForm } from "react-hook-form";
import "../../style/Menu.css";
import RoundedSelect from "../Form/SelectOption";

const Menu = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    home: "",
    service: "",
    portfolio: "",
    blog: "",
    page: "",
    contact: "",
  });

  const [setErrors] = useState({});

  const homePagesOptions = [
    { value: "", label: "Home" },
    { value: "home1", label: "Home 1" },
    { value: "home2", label: "Home 2" },
    { value: "home3", label: "Home 3" },
    { value: "home4l", label: "Home 4 (Light)" },
    { value: "home4d", label: "Home 4 (Dark)" },
  ];

  const servicesOptions = [
    { value: "", label: "Services" },
    { value: "servicesDetails", label: "Services Details" },
  ];

  const portfoliosOptions = [
    { value: "", label: "Portfolio" },
    { value: "portfolio1", label: "Portfolio 1" },
    { value: "portfolio2", label: "Portfolio 2" },
    { value: "portfolio3", label: "Portfolio 3" },
  ];

  const blogsOptions = [
    { value: "", label: "Blog" },
    { value: "ourBlog", label: "Our Blog" },
    { value: "blog1", label: "Blog Details 1" },
    { value: "blog2", label: "Blog Details 2" },
  ];

  const pagesOptions = [
    { value: "", label: "About" },
    { value: "page1", label: "Pricing Price" },
    { value: "page2", label: "404" },
  ];

  const contact = [{ value: "", label: "Contact" }];

  const validateForm = () => {
    const newErrors = {};
    if (!formData.home) newErrors.home = "Home page is required";
    if (!formData.service) newErrors.service = "service is required";
    if (!formData.portfolio) newErrors.portfolio = "Portfolio is required";
    if (!formData.page) newErrors.page = "Page is required";
    if (!formData.contact) newErrors.contact = "Contact is required";

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
        home: "",
        service: "",
        portfolio: "",
        blog: "",
        page: "",
        contact: "",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="w-full flex flex-col md:flex-row gap-4">
        <RoundedSelect
          name="home"
          value={formData.home}
          onChange={handleChange}
          options={homePagesOptions}
          //   error={errors.home}
          className="header-menu"
        />
        <RoundedSelect
          name="service"
          value={formData.service}
          onChange={handleChange}
          options={servicesOptions}
          className="header-menu"
        />
        <RoundedSelect
          name="portfolio"
          value={formData.portfolio}
          onChange={handleChange}
          options={portfoliosOptions}
          className="header-menu"
        />
        <RoundedSelect
          name="blog"
          value={formData.blog}
          onChange={handleChange}
          options={blogsOptions}
          className="header-menu"
        />
        <RoundedSelect
          name="page"
          value={formData.page}
          onChange={handleChange}
          options={pagesOptions}
          className="header-menu"
        />
        <RoundedSelect
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          options={contact}
          className="header-menu"
        />
      </div>
    </form>
  );
};

export default Menu;
