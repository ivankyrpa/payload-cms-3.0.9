import type { CollectionConfig } from 'payload'

export const BlockTests: CollectionConfig = {
  slug: 'blockTests',
  fields: [
    {
      name: 'text',
      type: 'text',
      localized: true,
    },
    {
      name: 'content',
      type: 'blocks',
      localized: true,
      blocks: [
        {
          slug: 'text',
          fields: [
            {
              name: 'text',
              type: 'text',
            },
          ],
        },
      ],
    },
  ],
}
