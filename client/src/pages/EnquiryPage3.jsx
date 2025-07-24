import { useForm } from "react-hook-form";
import {
  Email,
  Phone,
  LocationOn,
  AttachMoney,
  Message,
  CalendarToday,
  Person,
  House,
  CheckCircleOutline,
  HomeWork,
  Landscape,
  Garage,
  Balcony,
  BedroomParent,
  Pool,
} from "@mui/icons-material";
import { useState } from "react";

export default function EnquiryForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      reset();
    }, 4000);
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 flex flex-col items-center font-sans">
      {/* Top Banner Image */}
      <div className="w-full max-w-[100vw] md:h-[600px] overflow-hidden">
        <img
          src="/dreamhome.jpg"
          alt="Dream Home"
          className="w-full h-full object-cover object-center rounded-2xl"
        />
      </div>

      {/* Form Section */}
      <div className="w-full flex flex-col lg:flex-row px-4 md:px-8 mt-[-80px] relative z-10">
        {/* Left: Form */}
        <div className="w-full lg:w-5/7 bg-white p-6 md:p-10 rounded-xl shadow-xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
            🏡 Let's Find Your Dream Home!
          </h2>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-semibold text-blue-700 mb-2">
                  <Person className="inline-block mr-1 text-base align-middle" />
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  {...register("fullName", {
                    required: "Full name is required",
                  })}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-blue-700 mb-2">
                  <Email className="inline-block mr-1 text-base align-middle" />
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/,
                      message: "Invalid email format",
                    },
                  })}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-blue-700 mb-2">
                  <Phone className="inline-block mr-1 text-base align-middle" />
                  Mobile Number <span className="text-red-500">*</span>
                </label>
                <input
                  {...register("phone", {
                    required: "Phone number is required",
                    minLength: { value: 10, message: "Minimum 10 digits" },
                  })}
                  placeholder="Enter your mobile number"
                  className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              {/* Preferred City */}
              <div>
                <label className="block text-sm font-semibold text-blue-700 mb-2">
                  <LocationOn className="inline-block mr-1 text-base align-middle" />
                  Your Preferred City <span className="text-red-500">*</span>
                </label>
                <select
                  {...register("location", {
                    required: "Location is required",
                  })}
                  className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                >
                  <option value="">Select Your Preferred City</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Pune">Pune</option>
                  <option value="Delhi">Delhi</option>
                </select>
                {errors.location && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.location.message}
                  </p>
                )}
              </div>
            </div>

            {/* Amenities (span two columns) */}
            <div className="md:col-span-2 mb-2.5">
              <p className="mb-3 font-semibold">
                What amenities do you dream of?
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  {
                    label: "Garden",
                    icon: <Landscape className="text-green-600" />,
                  },
                  {
                    label: "Balcony",
                    icon: <Balcony className="text-orange-600" />,
                  },
                  {
                    label: "Parking",
                    icon: <Garage className="text-blue-600" />,
                  },
                  { label: "Pool", icon: <Pool className="text-blue-400" /> },
                ].map((item) => (
                  <label key={item.label} className="flex items-center gap-2">
                    <input
                      {...register("amenities")}
                      type="checkbox"
                      value={item.label}
                      className="accent-green-600"
                    />
                    {item.icon} {item.label}
                  </label>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Home Type */}
              <div>
                <label className="block text-sm font-semibold text-blue-700 mb-2">
                  <House className="inline-block mr-1 text-base align-middle" />
                  Property Type<span className="text-red-500">*</span>
                </label>

                <select
                  {...register("homeType", {
                    required: "Please select home type",
                  })}
                  className="w-full p-3 border rounded-lg"
                >
                  <option value="">Select Home Type</option>
                  <option value="Apartment">Apartment</option>
                  <option value="Villa">Villa</option>
                  <option value="Studio">Studio</option>
                  <option value="Plot">Residential Plot</option>
                </select>
              </div>
              {errors.homeType && (
                <p className="text-red-500">{errors.homeType.message}</p>
              )}

              {/* Bedrooms */}
              <div>
                <label className="block text-sm font-semibold text-blue-700 mb-2">
                  <BedroomParent className="inline-block mr-1 text-base align-middle" />
                  Bedrooms
                </label>

                <select
                  {...register("bedrooms", {
                    required: "Select bedrooms required",
                  })}
                  className="w-full p-3 border rounded-lg"
                >
                  <option value="">Number of Bedrooms</option>
                  <option value="1 BHK">1 BHK</option>
                  <option value="2 BHK">2 BHK</option>
                  <option value="3 BHK">3 BHK</option>
                  <option value="4+ BHK">4+ BHK</option>
                </select>
              </div>
              {errors.bedrooms && (
                <p className="text-red-500">{errors.bedrooms.message}</p>
              )}

              {/* Budget */}
              <div>
                <label className="block text-sm font-semibold text-blue-700 mb-2">
                  <AttachMoney className="inline-block mr-1 text-base align-middle" />
                  Budget <span className="text-red-500">*</span>
                </label>
                <select
                  {...register("budget", {
                    required: "Select your budget range",
                  })}
                  className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                >
                  <option value="">Select Your Budget</option>
                  <option value="20-40 Lakhs">₹20-40 Lakhs</option>
                  <option value="40-60 Lakhs">₹40-60 Lakhs</option>
                  <option value="60-80 Lakhs">₹60-80 Lakhs</option>
                  <option value="80L-1Cr">₹80L - ₹1 Cr</option>
                  <option value="1Cr+">₹1 Cr+</option>
                </select>
                {errors.budget && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.budget.message}
                  </p>
                )}
              </div>
            </div>

            {/* Loan Requirement */}
            <div className="flex items-center gap-3">
              <label className="flex items-center gap-2  text-sm font-medium mb-2">
                <HomeWork className="inline-block mr-1 text-base  text-blue-700 align-middle" />
                <input
                  type="checkbox"
                  {...register("needLoan")}
                  className="accent-green-600"
                />
                Require Home Loan Assistance?
              </label>
            </div>

            {/* Planning to Buy */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-blue-700 mb-2">
                Planning to Buy <span className="text-red-500">*</span>
              </label>
              <div className="flex flex-wrap gap-4">
                {["Within 1 Month", "Within 3 Months", "After 3 Months"].map(
                  (option) => (
                    <label
                      key={option}
                      className="flex items-center gap-2 text-sm text-gray-700"
                    >
                      <input
                        type="radio"
                        value={option}
                        {...register("timeline")}
                        className="accent-green-600"
                      />
                      {option}
                    </label>
                  )
                )}
              </div>
            </div>

            {/* Additional Message */}
            <div>
              <label className="block text-sm font-semibold text-blue-700 mb-2">
                <Message className="inline-block mr-1 text-base align-middle" />{" "}
                Additional Info
              </label>
              <textarea
                {...register("message")}
                placeholder="Tell us more about your dream home..."
                rows="4"
                className="w-full p-3 border rounded-lg"
              />
            </div>

            {/* Consent */}
            <div className="md:col-span-2">
              <label className="flex items-start gap-2 text-sm text-gray-600 mt-4">
                <input
                  type="checkbox"
                  defaultChecked
                  className="accent-green-600 mt-1"
                />
                <span>
                  By submitting your details, you agree to be contacted by PoPT
                  and its partners via call, SMS, WhatsApp, or email regarding
                  this property and related services.
                </span>
              </label>
            </div>

            {/* Submit */}
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md text-lg font-medium transition"
              >
                Submit Enquiry
              </button>
            </div>
          </form>

          {/* Success Modal */}
          {submitted && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
              <div className="bg-white rounded-xl p-8 shadow-lg text-center max-w-md mx-auto">
                <CheckCircleOutline className="text-green-500 text-5xl mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800">
                  Enquiry Submitted!
                </h3>
                <p className="text-gray-600 mt-2">
                  Thank you! We’ll get in touch shortly.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Right: Visual */}
        <div className="hidden lg:block lg:w-2/7 pl-6">
          <img
            src="/myhome1.jpg"
            alt="Side Visual"
            className="rounded-xl shadow-md w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}