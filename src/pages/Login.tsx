import React, { useState } from "react";
// import { useDispatch } from "react-redux";

interface LoginProps {
  // Define any additional props if required
}

const Login: React.FC<LoginProps> = () => {
  // const dispatch = useDispatch();
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [verificationCode, setVerificationCode] = useState("");


  const handleSendOTP = () => {
    // Set up reCAPTCHA verifier
    // const verifier = new RecaptchaVerifier('recaptcha-container', {
    //   size: 'invisible', // Adjust as per your UI requirement
    //   callback: (_response: any) => {
    //     // reCAPTCHA solved, continue with sign-in
    //     // You can handle this callback if needed
    //   },
    //   defaultCountry: +91, // Optional: set default country code
    // });

    // setRecaptchaVerifier(verifier); // Save the verifier in state

    // // Send OTP
    // firebase
    //   .auth()
    //   .signInWithPhoneNumber(phoneNumber, verifier)
    //   .then((_confirmationResult) => {
    //     // Store confirmationResult for later use
    //     // e.g., confirmationResult.confirm(verificationCode)
    //     console.log('OTP sent successfully');
    //   })
    //   .catch((error) => {
    //     // Handle error while sending OTP
    //     console.error('Error sending OTP:', error);
    //   });
  };

  const handleLogin = () => {
    // Handle the login functionality with verification code
    // You need to have the confirmationResult from phone number verification
    // Example: confirmationResult?.confirm(verificationCode).then(() => { /* Handle success */ }).catch(() => { /* Handle failure */ });
  };

  // Add your form submission logic if required
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Implement form submission logic if needed
  };

  return (
    <div className="w-full max-w-md mx-auto mt-10">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-semibold ">Login</h1>
        <p className="mt-4 ">
          Get access to your Orders, Wishlist, and Recommendations
        </p>
      </div>

      <form className="flex flex-col mt-8" onSubmit={handleSubmit}>
        <input
          type="tel"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:border-blue-500"
        />
        <button
          type="button"
          onClick={handleSendOTP}
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-md mb-4"
        >
          Send OTP
        </button>
        <input
          type="text"
          placeholder="Verification Code"
          value={verificationCode}
          onChange={(e) => setVerificationCode(e.target.value)}
          className="p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:border-blue-500"
        />
        <button
          type="button"
          onClick={handleLogin}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
        >
          Login
        </button>
      </form>
    </div>

  );
};

export default Login 
