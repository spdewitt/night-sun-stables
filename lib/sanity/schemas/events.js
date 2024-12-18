export default {
  name: "events",
  title: "Events Page",
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
      title: "Birthday Parties",
      type: "text",
      description: "A short paragraph introducing Boarding."
    },
    {
      name: "paragraphOne",
      title: "Party Details",
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
    }
  ],
  preview: {
    select: {
      title: "title"
    }
  }
};
