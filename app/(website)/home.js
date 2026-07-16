"use client";

import Link from "next/link";
import Container from "@/components/container";
import Image from "next/image";
import HeroSlider from "@/components/HeroSlider";
import FacebookFeed from "@/components/facebookFeed";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function HomePage({ data, facebookPosts }) {
  const {
    heroTitle,
    heroDescription,
    heroButtonText,
    heroButtonLink,
    heroSlider,
    additionalServices,
    services,
    aboutTitle,
    aboutDescription,
    aboutQuote,
    contactTitle,
    contactDescription,
    workDirectlyTitle,
    workDirectlyDescription,
    servingTitle,
    servingDescription,
    servingButtonText,
    servingButtonLink,
    authorImage
  } = data;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm({
    mode: "onTouched"
  });

  // For displaying success/error states
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState("");

  const onSubmit = async formData => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        setMessage(
          data.message || "Thank you! Your message has been sent."
        );
        reset(); // Reset the form on success
      } else {
        setIsSuccess(false);
        setMessage(data.message || "Oops! Something went wrong.");
      }
    } catch (err) {
      setIsSuccess(false);
      setMessage(
        "An unexpected error occurred. Please try again later."
      );
    }
  };

  return (
    <>
      <Container>
        {/* Hero Section */}
        <section className="mt-4 flex flex-col items-center text-center">
          <div className="w-full overflow-hidden rounded-2xl shadow-md ring-1 ring-cream-300">
            <HeroSlider sliderData={heroSlider} />
          </div>

          <h1 className="mt-8 max-w-3xl text-3xl font-bold md:text-4xl">
            {heroTitle}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-gray-600">
            {heroDescription}
          </p>
          <Link href={heroButtonLink} className="btn-primary my-6">
            {heroButtonText}
          </Link>
        </section>

        {/* Three Service Cards Section */}
        <section className="mt-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {services &&
              services.map((service, i) => (
                <Link
                  href={service.link}
                  key={i}
                  className="group block">
                  <div className="card h-full">
                    {service.imageUrl && (
                      <Image
                        src={service.imageUrl}
                        alt={service.title}
                        width={310}
                        height={288}
                        loading="lazy"
                        className="h-72 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    )}
                    <div className="p-5">
                      <h2 className="text-xl font-semibold text-barn-800 transition-colors group-hover:text-forest-700">
                        {service.title}
                      </h2>
                      <p className="mt-2 text-gray-600">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </section>

        {/* About Section */}
        <section className="section-band mx-auto mt-12 max-w-4xl p-8">
          {/* Title: Full Width */}
          <h3 className="mb-4 text-2xl font-semibold">
            {aboutTitle}
          </h3>

          {/* Row with Image (left) and Paragraph (right) */}
          <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-12">
            {/* Image Column */}
            <div className="relative col-span-12 h-48 w-full flex-shrink-0 md:col-span-3">
              {authorImage?.asset?.url && (
                <Image
                  src={authorImage.asset.url}
                  alt="Carmen Hurley"
                  fill
                  loading="lazy"
                  className="rounded-md object-cover"
                  sizes="(max-width: 768px) 100vw, 200px"
                />
              )}
            </div>

            {/* Paragraph Column */}
            <p className="col-span-12 mb-3 leading-relaxed text-gray-700 md:col-span-9">
              {aboutDescription}
            </p>
          </div>

          {/* Quote: Full Width on Its Own Row */}
          <blockquote className="border-l-4 border-forest-600 pl-4 italic text-gray-700">
            {aboutQuote}
          </blockquote>
        </section>

        <section className="mt-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {additionalServices &&
              additionalServices.map((service, i) => (
                <Link
                  href={service.link}
                  key={i}
                  className="group block">
                  <div className="card h-full">
                    {service.imageUrl && (
                      <Image
                        src={service.imageUrl}
                        alt={service.title}
                        width={478}
                        height={288}
                        loading="lazy"
                        className="h-72 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    )}
                    <div className="p-5">
                      <h3 className="text-xl font-semibold text-barn-800 transition-colors group-hover:text-forest-700">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-gray-600">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </section>

        {/* Latest from Facebook */}
        <FacebookFeed posts={facebookPosts} />

        {/* Contact Form Section */}
        <div
          id="contact-form"
          className="mx-auto mt-12 max-w-4xl rounded-2xl border border-cream-300 bg-cream-100 p-8 shadow-sm dark:border-stone-800 dark:bg-stone-900">
          <h3 className="mb-4 text-2xl font-semibold text-barn-800">
            {contactTitle}
          </h3>
          <p className="mb-6 text-gray-700">{contactDescription}</p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="mb-2 block font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 2,
                    message: "Name must be at least 2 characters long"
                  },
                  maxLength: {
                    value: 50,
                    message: "Name cannot exceed 50 characters"
                  },
                  pattern: {
                    value: /^[A-Za-zÀ-ÖØ-öø-ÿ'’ -]+$/,
                    message:
                      "Name can only contain letters, spaces, and basic punctuation"
                  }
                })}
                className="w-full rounded border border-gray-300 p-2 focus:border-forest-600 focus:outline-none"
              />
              {errors.name && (
                <span className="text-sm text-red-600">
                  {errors.name.message}
                </span>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    // A slightly more robust email pattern
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Please enter a valid email address"
                  }
                })}
                className="w-full rounded border border-gray-300 p-2 focus:border-forest-600 focus:outline-none"
              />
              {errors.email && (
                <span className="text-sm text-red-600">
                  {errors.email.message}
                </span>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label
                htmlFor="phone"
                className="mb-2 block font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                {...register("phone", {
                  required: "Phone number is required",
                  validate: {
                    length: value => {
                      // Remove non-digit characters
                      const digits = value.replace(/\D/g, "");
                      if (digits.length < 10) {
                        return "Phone number must have at least 10 digits";
                      }
                      if (digits.length > 15) {
                        return "Phone number cannot exceed 15 digits";
                      }
                      return true;
                    }
                  },
                  pattern: {
                    value: /^[0-9+\-() ]+$/,
                    message:
                      "Please enter a valid phone number using digits, spaces, () or +"
                  }
                })}
                className="w-full rounded border border-gray-300 p-2 focus:border-forest-600 focus:outline-none"
              />
              {errors.phone && (
                <span className="text-sm text-red-600">
                  {errors.phone.message}
                </span>
              )}
            </div>

            {/* Preferred Method of Contact */}
            <div>
              <span className="mb-2 block font-medium text-gray-700">
                Preferred Method of Contact
              </span>
              <div className="mb-2 flex items-center">
                <input
                  type="radio"
                  id="contactEmail"
                  value="Email"
                  {...register("preferredContact", {
                    required: "Please select a contact method"
                  })}
                  className="mr-2"
                />
                <label htmlFor="contactEmail">Email</label>
              </div>
              <div className="mb-2 flex items-center">
                <input
                  type="radio"
                  id="contactCall"
                  value="Call"
                  {...register("preferredContact")}
                  className="mr-2"
                />
                <label htmlFor="contactCall">Call</label>
              </div>
              <div className="mb-2 flex items-center">
                <input
                  type="radio"
                  id="contactText"
                  value="Text"
                  {...register("preferredContact")}
                  className="mr-2"
                />
                <label htmlFor="contactText">Text</label>
              </div>
              {errors.preferredContact && (
                <span className="text-sm text-red-600">
                  {errors.preferredContact.message}
                </span>
              )}
            </div>

            {/* Services Interested In */}
            <div>
              <span className="mb-2 block font-medium text-gray-700">
                Which services are you interested in?
              </span>
              <div className="mb-2 flex items-center">
                <input
                  type="checkbox"
                  id="interior"
                  value="Horseback Riding Lessons"
                  {...register("services")}
                  className="mr-2"
                />
                <label htmlFor="interior">
                  Horseback Riding Lessons
                </label>
              </div>
              <div className="mb-2 flex items-center">
                <input
                  type="checkbox"
                  id="exterior"
                  value="Youth Camps"
                  {...register("services")}
                  className="mr-2"
                />
                <label htmlFor="exterior">Youth Camps</label>
              </div>
              <div className="mb-2 flex items-center">
                <input
                  type="checkbox"
                  id="murals"
                  value="Boarding & Leasing Services"
                  {...register("services")}
                  className="mr-2"
                />
                <label htmlFor="murals">
                  Boarding & Leasing Services
                </label>
              </div>
              <div className="mb-2 flex items-center">
                <input
                  type="checkbox"
                  id="fineArt"
                  value="Birthday Parties"
                  {...register("services")}
                  className="mr-2"
                />
                <label htmlFor="fineArt">Birthday Parties</label>
              </div>
              <div className="mb-2 flex items-center">
                <input
                  type="checkbox"
                  id="other"
                  value="Other"
                  {...register("services")}
                  className="mr-2"
                />
                <label htmlFor="other">Other</label>
              </div>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="mb-2 block font-medium text-gray-700">
                If you have a specific question, you can ask it here,
                otherwise we will contact you ASAP.
              </label>
              <textarea
                id="message"
                rows="5"
                {...register("message", {
                  required: "Please enter a message",
                  minLength: {
                    value: 10,
                    message: "Message must be at least 10 characters"
                  },
                  maxLength: {
                    value: 1000,
                    message: "Message cannot exceed 1000 characters"
                  },
                  validate: {
                    notEmpty: value =>
                      value.trim().length > 0 ||
                      "Message cannot be empty or just whitespace"
                  }
                })}
                className="w-full rounded border border-gray-300 p-2 focus:border-forest-600 focus:outline-none"
              />
              {errors.message && (
                <span className="text-sm text-red-600">
                  {errors.message.message}
                </span>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary disabled:opacity-60">
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
          {/* Success or Error Messages */}
          {isSuccess && message && (
            <div className="mt-4 rounded bg-green-100 p-3 text-green-800">
              {message}
            </div>
          )}
          {!isSuccess && message && (
            <div className="mt-4 rounded bg-red-100 p-3 text-red-800">
              {message}
            </div>
          )}
        </div>

        <section className="section-band mt-12 p-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h4 className="mb-3 text-2xl font-semibold">
                {workDirectlyTitle}
              </h4>
              <p className="leading-relaxed text-gray-600">
                {workDirectlyDescription}
              </p>
            </div>
            <div>
              <h4 className="mb-3 text-2xl font-semibold">
                {servingTitle}
              </h4>
              <p className="leading-relaxed text-gray-600">
                {servingDescription}
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <Link
              href={servingButtonLink}
              className="btn-primary mt-8">
              {servingButtonText}
            </Link>
          </div>
        </section>
      </Container>
    </>
  );
}
