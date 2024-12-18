export default {
  name: "youthCamps",
  title: "Youth Camps Page",
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
      title: "Youth Camp Intro",
      type: "text",
      description: "A short paragraph introducing Youth Camps."
    },
    {
      name: "paragraphOne",
      title: "Youth Camp Description",
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
    },
    {
      name: "imageFive",
      title: "Image Five",
      type: "image",
      description: "The fifth image displayed on the page.",
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
      name: "imageSix",
      title: "Image Six",
      type: "image",
      description: "The sixth image displayed on the page.",
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
