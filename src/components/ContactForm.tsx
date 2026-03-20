"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";

function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 10);
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateZip(zip: string): boolean {
  return /^\d{5}$/.test(zip.trim());
}

interface FieldError {
  name?: string;
  email?: string;
  phone?: string;
  zipCode?: string;
}

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    zipCode: "",
    address: "",
    comments: "",
  });
  const [errors, setErrors] = useState<FieldError>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [serverError, setServerError] = useState("");

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    const newValue = name === "phone" ? formatPhone(value) : value;
    setForm((prev) => ({ ...prev, [name]: newValue }));

    // Clear error on change
    if (errors[name as keyof FieldError]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function handleBlur(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    validateField(name);
  }

  function validateField(name: string) {
    const newErrors: FieldError = {};

    switch (name) {
      case "name":
        if (form.name.trim().length < 2) newErrors.name = "Please enter your name";
        break;
      case "email":
        if (!validateEmail(form.email)) newErrors.email = "Please enter a valid email";
        break;
      case "phone":
        if (form.phone.replace(/\D/g, "").length < 10) newErrors.phone = "Please enter a valid phone number";
        break;
      case "zipCode":
        if (!validateZip(form.zipCode)) newErrors.zipCode = "Please enter a 5-digit zip code";
        break;
    }

    setErrors((prev) => ({ ...prev, ...newErrors, ...(Object.keys(newErrors).length === 0 ? { [name]: undefined } : {}) }));
    return Object.keys(newErrors).length === 0;
  }

  function validateAll(): boolean {
    const newErrors: FieldError = {};
    if (form.name.trim().length < 2) newErrors.name = "Please enter your name";
    if (!validateEmail(form.email)) newErrors.email = "Please enter a valid email";
    if (form.phone.replace(/\D/g, "").length < 10) newErrors.phone = "Please enter a valid phone number";
    if (!validateZip(form.zipCode)) newErrors.zipCode = "Please enter a 5-digit zip code";

    setErrors(newErrors);
    setTouched({ name: true, email: true, phone: true, zipCode: true });
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validateAll()) return;

    setStatus("submitting");
    setServerError("");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
      } else {
        setServerError(data.error || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setServerError("Unable to submit. Please check your connection and try again.");
      setStatus("error");
    }
  }

  // Success state
  if (status === "success") {
    return (
      <div className="bg-white rounded-xl border border-border p-8 md:p-10 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-heading text-2xl font-bold text-primary mb-3">Thank You!</h3>
        <p className="text-lg text-text-main mb-2">
          Your request has been received. A specialist will contact you within <strong>24 hours</strong>.
        </p>
        <p className="text-text-light">
          Need immediate help? Call{" "}
          <a href="tel:8587768700" className="font-bold text-primary no-underline hover:underline">
            (858) 776-8700
          </a>
        </p>
      </div>
    );
  }

  const inputBase =
    "w-full px-4 py-3 border rounded-lg font-body text-base text-text-main bg-white transition-colors focus:outline-none focus:border-primary-light focus:ring-2 focus:ring-primary-light/20";
  const inputError = "border-red-400";
  const inputNormal = "border-border";

  return (
    <form onSubmit={handleSubmit} noValidate className="bg-white rounded-xl border border-border p-6 md:p-8 lg:p-10">
      <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-2">
        Request a Free Consultation
      </h2>
      <p className="text-text-light mb-8">
        Fill out the form below and a specialist will be in touch shortly.
      </p>

      <div className="space-y-5">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-text-main mb-1.5">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            value={form.name}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Your full name"
            className={`${inputBase} ${touched.name && errors.name ? inputError : inputNormal}`}
            aria-invalid={touched.name && !!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {touched.name && errors.name && (
            <p id="name-error" className="text-red-500 text-sm mt-1" role="alert">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-text-main mb-1.5">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="you@example.com"
            className={`${inputBase} ${touched.email && errors.email ? inputError : inputNormal}`}
            aria-invalid={touched.email && !!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {touched.email && errors.email && (
            <p id="email-error" className="text-red-500 text-sm mt-1" role="alert">{errors.email}</p>
          )}
        </div>

        {/* Phone + Zip row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-text-main mb-1.5">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              value={form.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="(858) 776-8700"
              className={`${inputBase} ${touched.phone && errors.phone ? inputError : inputNormal}`}
              aria-invalid={touched.phone && !!errors.phone}
              aria-describedby={errors.phone ? "phone-error" : undefined}
            />
            {touched.phone && errors.phone && (
              <p id="phone-error" className="text-red-500 text-sm mt-1" role="alert">{errors.phone}</p>
            )}
          </div>
          <div>
            <label htmlFor="zipCode" className="block text-sm font-semibold text-text-main mb-1.5">
              Zip Code <span className="text-red-500">*</span>
            </label>
            <input
              id="zipCode"
              name="zipCode"
              type="text"
              inputMode="numeric"
              required
              autoComplete="postal-code"
              maxLength={5}
              value={form.zipCode}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="92029"
              className={`${inputBase} ${touched.zipCode && errors.zipCode ? inputError : inputNormal}`}
              aria-invalid={touched.zipCode && !!errors.zipCode}
              aria-describedby={errors.zipCode ? "zip-error" : undefined}
            />
            {touched.zipCode && errors.zipCode && (
              <p id="zip-error" className="text-red-500 text-sm mt-1" role="alert">{errors.zipCode}</p>
            )}
          </div>
        </div>

        {/* Address (optional) */}
        <div>
          <label htmlFor="address" className="block text-sm font-semibold text-text-main mb-1.5">
            Address <span className="text-text-light font-normal">(optional)</span>
          </label>
          <input
            id="address"
            name="address"
            type="text"
            autoComplete="street-address"
            value={form.address}
            onChange={handleChange}
            placeholder="Your street address"
            className={`${inputBase} ${inputNormal}`}
          />
        </div>

        {/* Comments (optional) */}
        <div>
          <label htmlFor="comments" className="block text-sm font-semibold text-text-main mb-1.5">
            Comments / Questions <span className="text-text-light font-normal">(optional)</span>
          </label>
          <textarea
            id="comments"
            name="comments"
            rows={3}
            value={form.comments}
            onChange={handleChange}
            placeholder="Tell us about your project or any questions you have..."
            className={`${inputBase} ${inputNormal} resize-none`}
          />
        </div>

        {/* Server error */}
        {status === "error" && serverError && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700 text-sm" role="alert">
            {serverError}
          </div>
        )}

        {/* Submit button */}
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full px-8 py-4 bg-primary text-white font-bold text-lg rounded-lg border-2 border-primary hover:bg-primary-hover hover:border-primary-hover transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {status === "submitting" ? (
            <>
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Submitting...
            </>
          ) : (
            "Submit My Request"
          )}
        </button>

        {/* SMS Compliance */}
        <p className="text-xs text-text-light leading-relaxed">
          By clicking &ldquo;Submit my request&rdquo;, I am providing my e-signature and agree
          that Aging-In-Place Remodeling may call or text me using an automatic dialing
          system to arrange a convenient phone or in-home estimate or for other marketing
          purposes related to home improvement. I understand consent is not required as a
          condition of purchase, and that I may revoke my consent at any time. Msg / data
          rates may apply.
        </p>
      </div>
    </form>
  );
}
