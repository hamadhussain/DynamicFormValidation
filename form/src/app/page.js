"use client";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import FileUpload from "./FileUpload/page";

export default function Home() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [applyFor, setApplyFor] = useState("");
  const [countryCode, setCountryCode] = useState("+92");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [workedInOtherOrganization, setWorkedInOtherOrganization] = useState(false);
  const [organizationName, setOrganizationName] = useState("");
  const [cnic, setCnic] = useState("");
  const [expectedSalary, setExpectedSalary] = useState("");
  const [errorr, setError] = useState(false);

  const handleOrganizationChange = (e) => {
    setWorkedInOtherOrganization(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let message;

    if (phoneNumber.length !== 11) {
      setError(true);
      toast.error('Phone number must be exactly 11 digits.', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      const formData = {
        fullName,
        email,
        dob,
        applyFor,
        countryCode,
        phoneNumber,
        gender,
        workedInOtherOrganization,
        organizationName,
        cnic,
        expectedSalary,
      };
      message = `
        Full Name: ${formData.fullName}
        Email: ${formData.email}
        Date of Birth: ${formData.dob}
        Apply For: ${formData.applyFor}
        Country Code: ${formData.countryCode}
        Phone Number: ${formData.phoneNumber}
        Gender: ${formData.gender}
        Worked in Other Organization: ${formData.workedInOtherOrganization}
        Organization Name: ${formData.organizationName}
        CNIC: ${formData.cnic}
        Expected Salary: ${formData.expectedSalary}
      `;
      
      toast.info(message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      console.log(formData);
      
      setFullName("");
      setEmail("");
      setDob("");
      setApplyFor("");
      setCountryCode("");
      setPhoneNumber("");
      setGender("");
      setWorkedInOtherOrganization(false);
      setOrganizationName("");
      setCnic("");
      setExpectedSalary("");
    }
  };

  return (
    <>
 
 
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div>
        <video autoPlay loop muted playsInline={true} className="video">
          <source src="/video1.mp4" type="video/mp4" />
        </video>
        <div className="h-screen flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl w-full space-y-8 p-8 rounded-lg bg-opacity-0 text-white shadow-lg">
            <h2 className="text-center text-3xl font-extrabold uppercase">
              Job Application Form
            </h2>
            <form className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6" onSubmit={handleSubmit}>
              <div className="col-span-1 sm:col-span-2 flex gap-4">
                <div className="w-full">
                  <label htmlFor="fullName" className="text-sm">Full Name</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-700 bg-transparent text-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:border-gray-300"
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="email" className="text-sm">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-700 bg-transparent text-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:border-gray-300"
                  />
                </div>
              </div>

              <div className="col-span-1 sm:col-span-2">
                <label htmlFor="dob" className="text-sm">Date of Birth</label>
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  required
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-700 bg-transparent text-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:border-gray-300"
                />
              </div>

              <div className="col-span-1 sm:col-span-2">
                <label htmlFor="applyFor" className="text-sm">Job Position</label>
                <select
                  id="applyFor"
                  name="applyFor"
                  required
                  value={applyFor}
                  onChange={(e) => setApplyFor(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border i border-gray-700 bg-transparent text-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:border-gray-300"
                >
                  <option value="">Select Job Position</option>
                  <option value="Frontend Developer">Frontend Developer</option>
                  <option value="Backend Developer">Backend Developer</option>
                  <option value="Full Stack Developer">Full Stack Developer</option>
                  <option value="Software Engineer">Software Engineer</option>
                  <option value="Data Scientist">Data Scientist</option>
                  <option value="Machine Learning Engineer">Machine Learning Engineer</option>
                  <option value="Web Developer">Web Developer</option>
                  <option value="Mobile Developer">Mobile Developer</option>
                  <option value="DevOps Engineer">DevOps Engineer</option>
                  <option value="Quality Assurance Engineer">Quality Assurance Engineer</option>
                </select>
              </div>

              <div className="col-span-1 sm:col-span-2">
                <label htmlFor="countryCode" className="text-sm">Country Code</label>
                <div className="flex justify-center gap-4 items-end">
                  <select
                    id="countryCode"
                    name="countryCode"
                    required
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    className="block w-fit px-3 h-10 i border border-gray-700 bg-transparent text-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:border-gray-300"
                  >
                    <option value="+92">+92 (Pakistan)</option>
                    <option value="+1">+1 (USA)</option>
                    <option value="+44">+44 (UK)</option>
                    <option value="+91">+91 (India)</option>
                    <option value="+49">+49 (Germany)</option>
                    <option value="+33">+33 (France)</option>
                    <option value="+61">+61 (Australia)</option>
                    <option value="+81">+81 (Japan)</option>
                    <option value="+55">+55 (Brazil)</option>
                    <option value="+34">+34 (Spain)</option>
                    <option value="+39">+39 (Italy)</option>
                  </select>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="mt-1 block w-full px-3 h-10 border border-gray-700 bg-transparent text-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm col-span-2 dark:border-gray-300"
                  />
                </div>
              </div>

              <div className="col-span-1 sm:col-span-2 space-y-2 gap-2">
                <label className="text-sm">Gender</label> 
                <div className="flex space-x-5">
                  <div className="radio-wrapper-15 flex items-center gap-2">
                    <input
                      type="radio"
                      id="male"
                      name="gender"
                      value="male"
                      required
                      checked={gender === "male"}
                      onChange={(e) => setGender(e.target.value)}
                      className="radio-input"
                    />
                    <span className="ml-2 text-sm">Male</span>
                  </div>
                  <div className="radio-wrapper-15 flex items-center gap-2">
                    <input
                      type="radio"
                      id="female"
                      name="gender"
                      value="female"
                      required
                      checked={gender === "female"}
                      onChange={(e) => setGender(e.target.value)}
                      className="radio-input"
                    />
                    <span className="ml-2 text-sm">Female</span>
                  </div>
                  <div className="radio-wrapper-15 flex items-center gap-2">
                    <input
                      type="radio"
                      id="other"
                      name="gender"
                      value="other"
                      required
                      checked={gender === "other"}
                      onChange={(e) => setGender(e.target.value)}
                      className="radio-input"
                    />
                    <span className="ml-2 text-sm">Other</span>
                  </div>
                </div>
              </div>
              <FileUpload/>

              <div className="col-span-1 sm:col-span-2">
                <div className="flex items-center">
                  <div className="checkbox-wrapper-26">
                    <input
                      type="checkbox"
                      id="_checkbox-26"
                      name="workedInOtherOrganization"
                      checked={workedInOtherOrganization}
                      onChange={handleOrganizationChange}
                      className="h-4 w-4 text-indigo-600 rounded-full border-gray-300 focus:ring-indigo-500"
                    />
                    <label htmlFor="_checkbox-26">
                      <div className="tick_mark"></div>
                    </label>
                  </div>
                  <span className="ml-2 text-sm">Have you worked in any other organization?</span>
                </div>
                {workedInOtherOrganization && (
                  <div className="mt-2">
                    <input
                      type="text"
                      id="organizationName"
                      name="organizationName"
                      placeholder="Organization Name"
                      value={organizationName}
                      onChange={(e) => setOrganizationName(e.target.value)}
                      className="mt-1 block w-full px-3 py-2 border border-gray-700 bg-transparent text-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:border-gray-300"
                    />
                  </div>
                )}
              </div>

              <div className="col-span-1 sm:col-span-2">
                <label htmlFor="cnic" className="text-sm">CNIC (Optional)</label>
                <input
                  type="text"
                  id="cnic"
                  name="cnic"
                  pattern="[0-9]{5}-[0-9]{7}-[0-9]{1}"
                  maxLength="15"
                  value={cnic}
                  onChange={(e) => setCnic(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-700 bg-transparent text-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:border-gray-300"
                />
              </div>

              <div className="col-span-1 sm:col-span-2">
                <label htmlFor="expectedSalary" className="text-sm">Expected Salary</label>
                <input
                  type="number"
                  id="expectedSalary"
                  name="expectedSalary"
                  required
                  value={expectedSalary}
                  onChange={(e) => setExpectedSalary(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-700 bg-transparent text-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:border-gray-300"
                />
              </div>

              <div className="col-span-1 sm:col-span-2">
                <button
                  type="submit"
                  className="w-full py-2 px-4 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
