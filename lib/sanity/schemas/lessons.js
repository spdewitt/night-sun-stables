export default {
  name: "lessons",
  title: "Lessons Page",
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
      title: "Intro Paragraph",
      type: "text",
      description:
        "A short paragraph introducing horseback riding lessons."
    },
    {
      name: "paragraphOne",
      title: "Paragraph One",
      type: "text",
      description:
        "The first main paragraph of the lesson description."
    },
    {
      name: "paragraphTwo",
      title: "Paragraph Two",
      type: "text",
      description:
        "The second main paragraph of the lesson description."
    },
    {
      name: "paragraphThree",
      title: "Paragraph Three",
      type: "text",
      description:
        "The third main paragraph of the lesson description."
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
      name: "imageFour",
      title: "Image Four",
      type: "image",
      description: "The fourth image displayed on the page.",
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
