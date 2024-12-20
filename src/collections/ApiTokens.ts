import type { CollectionConfig } from 'payload'

export const ApiTokens: CollectionConfig = {
  slug: 'apiTokens',
  auth: {
    useAPIKey: true,
    disableLocalStrategy: true,
  },
  fields: [],
}
