export default {
  name: "navigation",
  title: "Navigation",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Navigation Title",
      type: "string",
      description: "For internal reference, e.g. 'Main Navigation'."
    },
    {
      name: "links",
      title: "Links",
      type: "array",
      of: [
        {
          type: "object",
          title: "Link",
          fields: [
            {
              name: "label",
              title: "Link Label",
              type: "string",
              description: "Text that appears in the nav."
            },
            {
              name: "href",
              title: "Link Href",
              type: "string",
              description:
                "Path or URL (e.g. '/about' or 'https://')."
            }
          ],
          preview: {
            select: {
              title: "label"
            }
          }
        }
      ],
      description: "Add or reorder the top-level links here."
    }
  ],
  preview: {
    select: {
      title: "title"
    }
  }
};
