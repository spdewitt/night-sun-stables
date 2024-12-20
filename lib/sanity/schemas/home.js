export default {
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [
    // Hero Section
    {
      name: "heroTitle",
      title: "Hero Title",
      type: "string",
      description: "Main heading in the hero section."
    },
    {
      name: "heroDescription",
      title: "Hero Description",
      type: "text",
      description: "Subheading/description under the main heading."
    },
    {
      name: "heroButtonText",
      title: "Hero Button Text",
      type: "string",
      description: "Text for the call-to-action button."
    },
    {
      name: "heroButtonLink",
      title: "Hero Button Link",
      type: "string",
      description:
        "URL or anchor link for the hero button (e.g. '#contact-form')."
    },

    // Service Cards
    {
      name: "services",
      title: "Services",
      type: "array",
      of: [
        {
          type: "object",
          title: "Service",
          fields: [
            {
              name: "image",
              title: "Service Image",
              type: "image",
              description: "Image for the service card."
            },
            {
              name: "title",
              title: "Service Title",
              type: "string",
              description:
                "Title of the service (e.g., Interior Painting)."
            },
            {
              name: "description",
              title: "Service Description",
              type: "text",
              description: "Short description of the service."
            },
            {
              name: "link",
              title: "Service Link",
              type: "string",
              description: "URL path to the service page."
            }
          ],
          preview: {
            select: {
              title: "title",
              subtitle: "description",
              media: "image"
            }
          }
        }
      ],
      description: "Three service cards displayed on the homepage."
    },
    {
      name: "additionalServices",
      title: "Additional Services",
      type: "array",
      of: [
        {
          type: "object",
          title: "Service",
          fields: [
            {
              name: "image",
              title: "Service Image",
              type: "image",
              description: "Image for the service card."
            },
            {
              name: "title",
              title: "Service Title",
              type: "string",
              description:
                "Title of the service (e.g., Interior Painting)."
            },
            {
              name: "description",
              title: "Service Description",
              type: "text",
              description: "Short description of the service."
            },
            {
              name: "link",
              title: "Service Link",
              type: "string",
              description: "URL path to the service page."
            }
          ],
          preview: {
            select: {
              title: "title",
              subtitle: "description",
              media: "image"
            }
          }
        }
      ],
      description:
        "Two additional service cards displayed on the homepage."
    },
    {
      name: "aboutTitle",
      title: "About Section Title",
      type: "string",
      description: "Title for the about section."
    },
    {
      name: "aboutDescription",
      title: "About Description",
      type: "text",
      description:
        "A paragraph describing Carmen's background and approach."
    },
    {
      name: "aboutQuote",
      title: "About Quote",
      type: "text",
      description: "Quote from Carmen Hurley."
    },

    // Contact Form Section Intro
    {
      name: "contactTitle",
      title: "Contact Form Title",
      type: "string",
      description: "Heading for the contact form section."
    },
    {
      name: "contactDescription",
      title: "Contact Form Description",
      type: "text",
      description: "Introductory text before the contact form."
    },

    // Work Directly Section
    {
      name: "workDirectlyTitle",
      title: "Work Directly Section Title",
      type: "string",
      description:
        "Title for the 'Work Directly with Carmen' section."
    },
    {
      name: "workDirectlyDescription",
      title: "Work Directly Section Description",
      type: "text",
      description:
        "Paragraph for the 'Work Directly with Carmen' section."
    },

    // Serving Communities Section
    {
      name: "servingTitle",
      title: "Serving Communities Title",
      type: "string",
      description: "Title for the serving communities section."
    },
    {
      name: "servingDescription",
      title: "Serving Communities Description",
      type: "text",
      description: "Paragraph describing the service areas."
    },
    {
      name: "servingButtonText",
      title: "Serving Communities Button Text",
      type: "string",
      description: "Text for the button linking to the contact form."
    },
    {
      name: "servingButtonLink",
      title: "Serving Communities Button Link",
      type: "string",
      description: "Anchor link for the serving communities button."
    }
  ],
  preview: {
    select: {
      title: "heroTitle"
    }
  }
};
