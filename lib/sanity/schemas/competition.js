export default {
  name: "competition",
  title: "Competitions Page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Main Heading",
      type: "string",
      description:
        "The main heading displayed at the top of the page."
    },
    {
      name: "introParagraph",
      title: "Competitions",
      type: "text",
      description: "A short paragraph introducing Competitions."
    },
    {
      name: "paragraphOne",
      title: "Competition Details",
      type: "text",
      description:
        "The first main paragraph of the lesson description."
    },

    {
      name: "imageOne",
      title: "Image One",
      type: "image",
      description: "The first image displayed on the page.",
      options: {
        hotspot: true
      },
      fields: [
        {
          name: "alt",
          title: "Alternative Text",
          type: "string",
          description: "Important for SEO and accessibility."
        }
      ]
    },
    {
      name: "imageTwo",
      title: "Image Two",
      type: "image",
      description: "The second image displayed on the page.",
      options: {
        hotspot: true
      },
      fields: [
        {
          name: "alt",
          title: "Alternative Text",
          type: "string",
          description: "Important for SEO and accessibility."
        }
      ]
    },
    {
      name: "paragraphThree",
      title: "Competition Paragraph",
      type: "text",
      description: "The next paragraph of the compition description."
    },

    {
      name: "imageThree",
      title: "Image Three",
      type: "image",
      description: "The third image displayed on the page.",
      options: {
        hotspot: true
      },
      fields: [
        {
          name: "alt",
          title: "Alternative Text",
          type: "string",
          description: "Important for SEO and accessibility."
        }
      ]
    },
    {
      name: "paragraphFour",
      title: "Final Competition Paragraph",
      type: "text",
      description: "The last paragraph of the compition description."
    },

    {
      name: "imageFour",
      title: "Image Four",
      type: "image",
      description: "The final image displayed on the page.",
      options: {
        hotspot: true
      },
      fields: [
        {
          name: "alt",
          title: "Alternative Text",
          type: "string",
          description: "Important for SEO and accessibility."
        }
      ]
    }
  ],
  preview: {
    select: {
      title: "title"
    }
  }
};
