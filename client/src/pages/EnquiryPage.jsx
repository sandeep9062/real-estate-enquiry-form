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
  Work,
  Schedule,
  MonetizationOn,
  Campaign,
  VerifiedUser,
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
      <div className="w-full max-w-[100vw] md:h-[600px] overflow-hidden">
        <img
          src="/dreamhome.jpg"
          alt="Dream Home"
          className="w-full h-full object-cover object-center rounded-2xl"
        />
      </div>

      <div className="w-full flex flex-col lg:flex-row px-4 md:px-8 mt-[-80px] relative z-10">
        <div className="w-full lg:w-5/7 bg-white p-6 md:p-10 rounded-xl shadow-xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
            🏡 Let’s Find Your Dream Home!
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label className="text-blue-700 font-semibold">
                  <Person className="inline mr-1" />
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  {...register("fullName", { required: "Full name is required" })}
                  placeholder="Your name"
                  className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="text-blue-700 font-semibold">
                  <Email className="inline mr-1" />
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
                  placeholder="Email"
                  className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="text-blue-700 font-semibold">
                  <Phone className="inline mr-1" />
                  Mobile Number <span className="text-red-500">*</span>
                </label>
                <input
                  {...register("phone", {
                    required: "Phone is required",
                    minLength: { value: 10, message: "Minimum 10 digits" },
                  })}
                  placeholder="Phone number"
                  className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                )}
              </div>

              {/* Preferred City */}
              <div>
                <label className="text-blue-700 font-semibold">
                  <LocationOn className="inline mr-1" />
                  Preferred City <span className="text-red-500">*</span>
                </label>
                <select
                  {...register("location", { required: "Location is required" })}
                  className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select City</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Pune">Pune</option>
                  <option value="Bangalore">Bangalore</option>
                </select>
                {errors.location && (
                  <p className="text-red-500 text-sm mt-1">{errors.location.message}</p>
                )}
              </div>
            </div>

            {/* Additional Select Fields */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Property Type */}
              <div>
                <label className="text-blue-700 font-semibold">
                  <House className="inline mr-1" />
                  Property Type <span className="text-red-500">*</span>
                </label>
                <select
                  {...register("propertyType", { required: "Required" })}
                  className="w-full p-3 border rounded-md"
                >
                  <option value="">Select</option>
                  <option>Apartment</option>
                  <option>Villa</option>
                  <option>Studio</option>
                  <option>Plot</option>
                </select>
              </div>

              {/* Bedrooms */}
              <div>
                <label className="text-blue-700 font-semibold">
                  <BedroomParent className="inline mr-1" />
                  Bedrooms
                </label>
                <select
                  {...register("bedrooms", { required: "Required" })}
                  className="w-full p-3 border rounded-md"
                >
                  <option value="">Select</option>
                  <option>1 BHK</option>
                  <option>2 BHK</option>
                  <option>3 BHK</option>
                  <option>4+ BHK</option>
                </select>
              </div>

              {/* Budget */}
              <div>
                <label className="text-blue-700 font-semibold">
                  <AttachMoney className="inline mr-1" />
                  Budget <span className="text-red-500">*</span>
                </label>
                <select
                  {...register("budget", { required: "Required" })}
                  className="w-full p-3 border rounded-md"
                >
                  <option value="">Select</option>
                  <option>₹20-40 Lakhs</option>
                  <option>₹40-60 Lakhs</option>
                  <option>₹60-80 Lakhs</option>
                  <option>₹80L - ₹1 Cr</option>
                  <option>₹1 Cr+</option>
                </select>
              </div>
            </div>

            {/* Additional Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Income */}
              <div>
                <label className="text-blue-700 font-semibold">
                  <MonetizationOn className="inline mr-1" />
                  Annual Income
                </label>
                <select {...register("income")} className="w-full p-3 border rounded-md">
                  <option value="">Select Income Range</option>
                  <option>Below ₹5 LPA</option>
                  <option>₹5-10 LPA</option>
                  <option>₹10-20 LPA</option>
                  <option>₹20+ LPA</option>
                </select>
              </div>

              {/* Purchase Purpose */}
              <div>
                <label className="text-blue-700 font-semibold">
                  <Work className="inline mr-1" />
                  Purpose of Purchase
                </label>
                <select {...register("purchasePurpose")} className="w-full p-3 border rounded-md">
                  <option value="">Select</option>
                  <option>Self-Use</option>
                  <option>Investment</option>
                  <option>For Parents</option>
                  <option>Gift</option>
                </select>
              </div>

              {/* Pre-approved Loan */}
              <div>
                <label className="text-blue-700 font-semibold">
                  <VerifiedUser className="inline mr-1" />
                  Do you have a pre-approved loan?
                </label>
                <select {...register("preApprovedLoan")} className="w-full p-3 border rounded-md">
                  <option value="">Select</option>
                  <option>Yes</option>
                  <option>No</option>
                  <option>Applying Soon</option>
                </select>
              </div>

              {/* Callback Time */}
              <div>
                <label className="text-blue-700 font-semibold">
                  <Schedule className="inline mr-1" />
                  Preferred Callback Time
                </label>
                <select {...register("callbackTime")} className="w-full p-3 border rounded-md">
                  <option value="">Anytime</option>
                  <option>Morning</option>
                  <option>Afternoon</option>
                  <option>Evening</option>
                </select>
              </div>
            </div>

            {/* Amenities */}
            <div>
              <p className="font-semibold mb-2">Amenities</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { label: "Garden", icon: <Landscape /> },
                  { label: "Balcony", icon: <Balcony /> },
                  { label: "Parking", icon: <Garage /> },
                  { label: "Pool", icon: <Pool /> },
                ].map((item) => (
                  <label key={item.label} className="flex items-center gap-2">
                    <input type="checkbox" {...register("amenities")} value={item.label} />
                    {item.icon}
                    {item.label}
                  </label>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div>
              <label className="font-semibold text-blue-700 mb-2 block">
                <CalendarToday className="inline mr-1" />
                Planning to Buy
              </label>
              <div className="flex gap-4 flex-wrap">
                {["Within 1 Month", "Within 3 Months", "After 3 Months"].map((t) => (
                  <label key={t} className="flex items-center gap-2">
                    <input type="radio" value={t} {...register("timeline")} />
                    {t}
                  </label>
                ))}
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="text-blue-700 font-semibold">
                <Message className="inline mr-1" />
                Additional Info
              </label>
              <textarea
                {...register("message")}
                rows="4"
                className="w-full p-3 border rounded-md"
                placeholder="Tell us more about your dream home..."
              />
            </div>

            {/* Source */}
            <div>
              <label className="text-blue-700 font-semibold">
                <Campaign className="inline mr-1" />
                How did you hear about us?
              </label>
              <select {...register("source")} className="w-full p-3 border rounded-md">
                <option value="">Select</option>
                <option>Google</option>
                <option>Instagram</option>
                <option>Friend</option>
                <option>Ad</option>
              </select>
            </div>

            {/* Consent */}
            <div className="flex items-start gap-2 text-sm text-gray-600 mt-4">
              <input type="checkbox" defaultChecked className="accent-green-600 mt-1" />
              <span>
                By submitting your details, you agree to be contacted via call, SMS, WhatsApp,
                or email by PoPT and its partners regarding your enquiry.
              </span>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md text-lg font-medium transition mt-4"
            >
              Submit Enquiry
            </button>
          </form>

          {/* Success Modal */}
          {submitted && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
              <div className="bg-white rounded-xl p-8 shadow-lg text-center max-w-md mx-auto">
                <CheckCircleOutline className="text-green-500 text-5xl mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800">Enquiry Submitted!</h3>
                <p className="text-gray-600 mt-2">Thank you! We’ll get in touch shortly.</p>
              </div>
            </div>
          )}
        </div>

        {/* Right Visual */}
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
