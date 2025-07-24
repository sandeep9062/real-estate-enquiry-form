import { useForm } from "react-hook-form";
import axios from "axios";
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
import { toast } from "sonner";

export default function EnquiryForm2() {
  const [submitted, setSubmitted] = useState(false);
  //const[issubmitting,isSetSubmitting]=useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
   //const toastId = toast.loading("Submitting enquiry...");

    try {
     
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND}/api/v1/enquiry`,
        data
      );

      if (response.status === 201 || response.status === 200) {
        //toast.success("Enquiry submitted successfully! ✅");

        setSubmitted(true);
        reset();

        setTimeout(() => {
          setSubmitted(false);
        }, 4000);
      }
    } catch (error) {
     // toast.dismiss(toastId);

      if (error.response?.status === 409) {
        toast.error("Email or Phone already exists!");
      } else {
        console.error("Submission error:", error);
        toast.error("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <div className="w-full min-h-screen m-0 pb-4 bg-gray-50 flex flex-col items-center font-sans">
      {/* Banner Image */}
      <div className="w-full md:h-[600px] overflow-hidden">
        <img
          src="/dreamhome.jpg"
          alt="Dream Home"
          className="w-full h-full object-cover object-center rounded-b-xl"
        />
      </div>

      {/* Form Container */}
      <div className="w-full px-4 md:px-8 -mt-20 relative z-10">
        <div className="w-full bg-white p-6 md:p-10 rounded-2xl shadow-2xl max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            🏡 Let’s Find Your Dream Home!
          </h2>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-8"
          >
            {/* Top Grid Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label className="block mb-1 text-blue-700 font-semibold">
                  <Person className="inline mr-1" />
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  {...register("fullName", {
                    required: "Full name is required",
                  })}
                  placeholder="Your name"
                  className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block mb-1 text-blue-700 font-semibold">
                  <Email className="inline mr-1" />
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
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
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
  <label className="block mb-1 text-blue-700 font-semibold">
    <Phone className="inline mr-1" />
    Mobile Number <span className="text-red-500">*</span>
  </label>
  <input
    {...register("phone", {
      required: "Phone is required",
      minLength: { value: 10, message: "Minimum 10 digits" },
      maxLength: { value: 10, message: "Maximum 10 digits" },
      pattern: {
        value: /^[0-9]{10}$/,
        message: "Only digits allowed",
      },
    })}
    type="tel"
    placeholder="Phone number"
    inputMode="numeric"
    maxLength={10} // Enforce max length at the HTML level
    onInput={(e) => {
      e.target.value = e.target.value.replace(/\D/g, "").slice(0, 10);
    }}
    className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
  />
  {errors.phone && (
    <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
  )}
</div>


              {/* Preferred City */}
              <div>
                <label className="block mb-1 text-blue-700 font-semibold">
                  <LocationOn className="inline mr-1" />
                  Preferred City <span className="text-red-500">*</span>
                </label>
                <select
                  {...register("location", {
                    required: "Location is required",
                  })}
                  className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select City</option>

                  <option>Chandigarh</option>
                  <option>New Chandigarh (Mullapur)</option>
                  <option>Panchkula</option>
                  <option>Mohali</option>
                  <option>Kharar</option>
                  <option>Mumbai</option>
                  <option>Delhi</option>
                  <option>Pune</option>
                  <option>Bangalore</option>
                  <option>Hyderabad</option>
                  <option>Ahmedabad</option>
                  <option>Chennai</option>
                  <option>Kolkata</option>
                  <option>Jaipur</option>
                  <option>Lucknow</option>
                  <option>Indore</option>
                  <option>Surat</option>
                  <option>Bhopal</option>
                  <option>Noida</option>
                  <option>Gurgaon</option>
                  <option>Faridabad</option>
                  <option>Thane</option>
                </select>
                {errors.location && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.location.message}
                  </p>
                )}
              </div>
            </div>

            {/* Property Preferences */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Property Type */}
              <div>
                <label className="block mb-1 text-blue-700 font-semibold">
                  <House className="inline mr-1" />
                  Property Type <span className="text-red-500">*</span>
                </label>
                <select
                  {...register("propertyType", {
                    required: " Property Type is required",
                  })}
                  className="w-full p-3 border rounded-md"
                >
                  <option value="">Select</option>

                  <option>Flat/Apartment</option>
                  <option>Independent House</option>
                  <option>Villa</option>
                  <option>Penthouse</option>
                  <option>Farmhouse</option>
                  <option>Studio</option>
                  <option>Plot / Land</option>
                </select>
                {errors.propertyType && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.propertyType.message}
                  </p>
                )}
              </div>

              {/* Bedrooms */}
              <div>
                <label className="block mb-1 text-blue-700 font-semibold">
                  <BedroomParent className="inline mr-1" />
                  Bedrooms
                </label>
                <select
                  {...register("bedrooms")}
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
                <label className="block mb-1 text-blue-700 font-semibold">
                  <AttachMoney className="inline mr-1" />
                  Budget <span className="text-red-500">*</span>
                </label>
                <select
                  {...register("budget", { required: "Budget is required" })}
                  className="w-full p-3 border rounded-md"
                >
                  <option value="">Select</option>
                  <option>Less than ₹1 Crore</option>
                  <option>₹1 Crore - ₹2 Crores</option>

                  <option>₹2 Crores - ₹5 Crores</option>
                  <option>₹5 Crores & Above</option>
                </select>

                {errors.budget && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.budget.message}
                  </p>
                )}
              </div>
            </div>

            {/* Buyer Profile */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Income */}
              <div>
                <label className="block mb-1 text-blue-700 font-semibold">
                  <MonetizationOn className="inline mr-1" />
                  Annual Income
                </label>
                <select
                  {...register("income")}
                  className="w-full p-3 border rounded-md"
                >
                  <option value="">Select</option>
                  <option>Below ₹5 LPA</option>
                  <option>₹5-10 LPA</option>
                  <option>₹10-20 LPA</option>
                  <option>₹20+ LPA</option>
                </select>
              </div>

              {/* Purchase Purpose */}
              <div>
                <label className="block mb-1 text-blue-700 font-semibold">
                  <Work className="inline mr-1" />
                  Purpose of Purchase
                </label>
                <select
                  {...register("purchasePurpose")}
                  className="w-full p-3 border rounded-md"
                >
                  <option value="">Select</option>
                  <option>Self-Use</option>
                  <option>Investment</option>
                  <option>For Parents</option>
                  <option>Gift</option>
                </select>
              </div>

              {/* Loan */}
              <div>
                <label className="block mb-1 text-blue-700 font-semibold">
                  <VerifiedUser className="inline mr-1" />
                  Pre-approved Loan?
                </label>
                <select
                  {...register("preApprovedLoan")}
                  className="w-full p-3 border rounded-md"
                >
                  <option value="">Select</option>

                  <option>Yes - with Bank</option>
                  <option>Yes - with NBFC</option>
                  <option>No</option>
                  <option>Need Help</option>
                </select>
              </div>

              {/* Callback */}
              <div>
                <label className="block mb-1 text-blue-700 font-semibold">
                  <Schedule className="inline mr-1" />
                  Preferred Callback Time
                </label>
                <select
                  {...register("callbackTime")}
                  className="w-full p-3 border rounded-md"
                >
                  <option value="">Anytime</option>
                  <option>Morning</option>
                  <option>Afternoon</option>
                  <option>Evening</option>
                </select>
              </div>
            </div>

            {/* Amenities */}
            <div>
              <p className="text-blue-700 font-semibold mb-2">
                {" "}
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
                    icon: <Garage className="text-slate-600" />,
                  },
                  { label: "Pool", icon: <Pool className="text-blue-400" /> },
                ].map((item) => (
                  <label
                    key={item.label}
                    className="flex items-center gap-2 text-sm"
                  >
                    <input
                      type="checkbox"
                      {...register("amenities")}
                      value={item.label}
                      className="accent-green-600"
                    />
                    {item.icon}
                    {item.label}
                  </label>
                ))}
              </div>
            </div>

            <div className="md:col-span-2">
              <p className="text-blue-700 font-semibold mb-2">
                Carpet Area Preference (in sq.ft)
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="number"
                  {...register("carpetAreaMin")}
                  placeholder="Min Carpet Area"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="number"
                  {...register("carpetAreaMax")}
                  placeholder="Max Carpet Area"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Timeline */}
            <div>
              <label className="text-blue-700 font-semibold block mb-2">
                <CalendarToday className="inline mr-1" />
                Planning to Buy <span className="text-red-500">*</span>
              </label>
              <div className="flex flex-wrap gap-4">
                {["Within 1 Month", "Within 3 Months", "After 3 Months"].map(
                  (t) => (
                    <label key={t} className="flex items-center gap-2 text-sm">
                      <input
                        type="radio"
                        className="accent-green-600"
                        value={t}
                        required
                        {...register("timeline")}
                      />
                      {t}
                    </label>
                  )
                )}
              </div>
            </div>

            {/* Message & Source */}
            <div className="grid grid-cols-1 gap-3">
              <div>
                <label className="text-blue-700 font-semibold block mb-1">
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
              <div>
                <label className="text-blue-700 font-semibold block mb-1">
                  <Campaign className="inline mr-1" />
                  How did you hear about us?
                </label>
                <select
                  {...register("source")}
                  className="w-full p-3 border rounded-md"
                >
                  <option value="">Select</option>
                  <option>Google</option>
                  <option>Instagram</option>
                  <option>LinkedIn</option>
                  <option>Friend</option>
                  <option>Ad</option>
                </select>
              </div>
            </div>

            {/* Consent */}
            <div className="flex flex-col items-start gap-2 text-sm text-gray-600">
              <label className="flex items-center gap-2 text-sm text-gray-600">
                <input
                  type="checkbox"
                  {...register("needLoanAssistance")}
                  className="accent-green-600"
                />
                I’d like help with home loan options and eligibility.
              </label>

              <label className="flex items-center gap-2 text-sm text-gray-600">
                <input
                  type="checkbox"
                  {...register("reraOnly")}
                  className="accent-green-600"
                />
                I only want to see RERA-registered properties.
              </label>

              <label className="flex items-center gap-2 text-sm text-gray-600">
                <input
                  type="checkbox"
                  required
                  defaultChecked
                  {...register("consentGiven", { required: true })}
                  className="accent-green-600"
                />
                By submitting your details, you agree to be contacted via call,
                SMS, WhatsApp, or email by PoPT and its partners regarding your
                enquiry.
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-md text-lg font-medium transition"
            >
              Submit Enquiry
            </button>
          </form>

          {/* Success Modal */}
          {submitted && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-100 backdrop-blur-sm">
              <div className="bg-white rounded-2xl p-8 shadow-2xl text-center max-w-md mx-4 animate-fade-in">
                <CheckCircleOutline className="text-green-500 text-6xl mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-800">
                  Enquiry Submitted!
                </h3>
                <p className="text-gray-600 mt-3">
                  Thank you for your interest in your dream home.
                  <br />
                  Our team will reach out to you shortly.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
