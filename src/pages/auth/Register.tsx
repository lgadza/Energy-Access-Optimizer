import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import validators from "../../utils/validators";
import { CheckboxInput, TextInput } from "../../components/common";
import Button from "../../components/common/Button";

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!validators.isValidEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (!validators.isStrongPassword(formData.password)) {
      newErrors.password =
        "Password must be at least 8 characters long, contain uppercase, lowercase, number and special character";
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    if (!formData.acceptTerms) {
      newErrors.acceptTerms = "You must accept the terms and conditions";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      // Add your registration logic here
      await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulated API call
    } catch (error) {
      console.error("Registration failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col w-[100vw] bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-extrabold text-slate-200">
              Create your account
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              Join us to optimize your energy access
            </p>
          </div>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-2xl bg-slate-800/50 backdrop-blur-xl p-8 shadow-lg ring-1 ring-slate-700/50 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <TextInput
                  label="First Name"
                  name="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={handleChange}
                  error={errors.firstName}
                  required
                />
                <TextInput
                  label="Last Name"
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={handleChange}
                  error={errors.lastName}
                  required
                />
              </div>

              <TextInput
                label="Email address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                required
              />

              <TextInput
                label="Password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                error={errors.password}
                required
              />

              <TextInput
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                error={errors.confirmPassword}
                required
              />

              <CheckboxInput
                label="I accept the terms and conditions"
                name="acceptTerms"
                checked={formData.acceptTerms}
                onChange={handleChange}
                error={errors.acceptTerms}
              />

              <Button
                type="submit"
                isLoading={isLoading}
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="w-full"
              >
                Sign up
              </Button>
            </div>
          </form>

          <p className="mt-4 text-center text-sm text-slate-400">
            Already have an account?{" "}
            <Link to="/login" className="text-cyan-500 hover:text-blue-400">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
