import React, { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    country: "USA",
    gender: [],
    profession: "",
    email: "",
    mobileNumber: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue =
      type === "checkbox"
        ? checked
          ? [...formData[name], value]
          : formData[name].filter((item) => item !== value)
        : value;

    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length === 0) {
      displayPopup();
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = (data) => {
    const errors = {};

    if (!data.firstName.trim()) {
      errors.firstName = "First Name is required";
    }

    if (!data.lastName.trim()) {
      errors.lastName = "Last Name is required";
    }

    if (!data.dateOfBirth) {
      errors.dateOfBirth = "Date of Birth is required";
    }

    if (!data.profession.trim()) {
      errors.profession = "Profession is required";
    }

    if (!data.email.trim()) {
      errors.email = "Email is required";
    }

    if (!data.mobileNumber.trim()) {
      errors.mobileNumber = "Mobile Number is required";
    }

    if (data.gender.length === 0) {
      errors.gender = "Gender is required";
    }

    return errors;
  };

  const displayPopup = () => {
    const {
      firstName,
      lastName,
      dateOfBirth,
      country,
      gender,
      profession,
      email,
      mobileNumber,
    } = formData;

    const popupContent = `
      First Name: ${firstName}
      Last Name: ${lastName}
      Date of Birth: ${dateOfBirth}
      Country: ${country}
      Gender: ${gender.join(", ")}
      Profession: ${profession}
      Email: ${email}
      Mobile Number: ${mobileNumber}
    `;

    alert(popupContent);

    // Reset the form and clear errors
    setFormData({
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      country: "USA",
      gender: [],
      profession: "",
      email: "",
      mobileNumber: "",
    });
    setErrors({});
  };

  const handleReset = () => {
    setFormData({
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      country: "USA",
      gender: [],
      profession: "",
      email: "",
      mobileNumber: "",
    });
    setErrors({});
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-blue-400">
      <div className="bg-[#00000080] w-[500px] h-[600px] flex flex-col justify-center items-center rounded-2xl">
        <p className="text-white text-2xl font-bold">Customer Survey Form</p>
        <div className="w-44 bg-[#FFFF00] h-1 mx-auto mt-3"></div>
        <form onSubmit={handleSubmit} className="w-max h-max gap-5 p-5">
          <div>
            <label className="text-2xl text-[#FFF] mr-10">First Name:</label>
            <input
              className="border bg-transparent w-full rounded-md"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
            {errors.firstName && (
              <span className="error">{errors.firstName}</span>
            )}
          </div>
          <div>
            <label className="text-2xl text-[#FFF] mr-10">Last Name:</label>
            <input
              className="border bg-transparent w-full rounded-md"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
            {errors.lastName && (
              <span className="error">{errors.lastName}</span>
            )}
          </div>
          <div>
            <label className="text-2xl text-[#FFF] mr-5">Date of Birth:</label>
            <input
              className="border bg-transparent text-[#FFF] w-full rounded-md"
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleInputChange}
              required
            />
            {errors.dateOfBirth && (
              <span className="error">{errors.dateOfBirth}</span>
            )}
          </div>
          <div>
            <label className="text-2xl text-[#FFF] mr-16">Country:</label>
            <select
              className="border bg-transparent text-[#FFF] w-full rounded-md"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              required
            >
              <option value="Select Country">Select Country</option>
              <option value="USA">India</option>
              <option value="USA">USA</option>
              <option value="Canada">Canada</option>
              <option value="UK">UK</option>
            </select>
          </div>
          <div className="text-white">
            <label className="text-2xl text-[#FFF] mr-10">Gender:</label>
            <input
              className="border bg-transparent"
              type="checkbox"
              name="gender"
              value="Male"
              checked={formData.gender.includes("Male")}
              onChange={handleInputChange}
            />{" "}
            Male
            <input
              className="border bg-transparent text-[#FFF]"
              type="checkbox"
              name="gender"
              value="Female"
              checked={formData.gender.includes("Female")}
              onChange={handleInputChange}
            />{" "}
            Female
            <input
              className="border bg-transparent text-[#FFF]"
              type="checkbox"
              name="gender"
              value="Other"
              checked={formData.gender.includes("Other")}
              onChange={handleInputChange}
            />{" "}
            Other
            {errors.gender && <span className="error">{errors.gender}</span>}
          </div>
          <div>
            <label className="text-2xl text-[#FFF]">Profession:</label>
            <input
              className="border bg-transparent w-full rounded-md"
              type="text"
              name="profession"
              value={formData.profession}
              onChange={handleInputChange}
              required
            />
            {errors.profession && (
              <span className="error">{errors.profession}</span>
            )}
          </div>
          <div>
            <label className="text-2xl text-[#FFF]">Email:</label>
            <input
              className="border bg-transparent w-full rounded-md"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div>
            <label className="text-2xl text-[#FFF]">Mobile Number:</label>
            <input
              className="border bg-transparent w-full rounded-md"
              type="tel"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleInputChange}
              required
            />
            {errors.mobileNumber && (
              <span className="error">{errors.mobileNumber}</span>
            )}
          </div>
          <div className="flex gap-2 mt-3">
            <button
              type="submit"
              className={` w-44 block text-white hover:text-black border
            text-md rounded-md px-3 md:px-5 py-1 md:py-2 text-center mr-2
            
              
                ? "cursor-not-allowed bg-[#aaa]"
                : "cursor-pointer  border-[#DFD7A8] shadow-[#BA8B1D] shadow-sm hover:bg-amber-300 "
            }`}
            >
              Submit
            </button>
            <button
              type="button"
              onClick={handleReset}
              className={` w-44 block text-white hover:text-black border
            text-md rounded-md px-3 md:px-5 py-1 md:py-2 text-center mr-2
            
              
                ? "cursor-not-allowed bg-[#aaa]"
                : "cursor-pointer  border-[#DFD7A8] shadow-[#BA8B1D] shadow-sm hover:bg-amber-300 "
            }`}
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
    // </div>
  );
};

export default App;
