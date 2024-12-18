export default {
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
      description: 'The main heading displayed at the top of the About page.',
    },
    {
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'Section',
          fields: [
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              description: 'The image displayed in this section.',
            },
            {
              name: 'altText',
              title: 'Alt Text',
              type: 'string',
              description: 'A short description of the image for accessibility.',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              description: 'The paragraph text associated with this image.',
            },
          ],
          preview: {
            select: {
              title: 'altText',
              media: 'image',
              subtitle: 'description',
            },
          },
        },
      ],
      description: 'Add multiple sections, each with an image and a descriptive paragraph.',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
}
