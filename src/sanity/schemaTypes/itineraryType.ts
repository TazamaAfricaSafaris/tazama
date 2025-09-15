import { defineField, defineType } from 'sanity'

export const itineraryType = defineType({
  name: 'itinerary',
  title: 'Itinerary',
  type: 'document',
  fields: [
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'itineraryName',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'itineraryName',
      title: 'Itinerary Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subHeading',
      title: 'Sub Heading',
      type: 'string',
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
    }),
    defineField({
      name: 'coverImg',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        }
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    }),
    defineField({
      name: 'itineraryType',
      title: 'Itinerary Type',
      type: 'string',
      options: {
        list: [
          { title: 'Trekking', value: 'trekking' },
          { title: 'Safaris and Tours', value: 'safaris-and-tours' },
          { title: 'Beach Holidays', value: 'beach-holidays' },
        ],
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'locationAndDuration',
      title: 'Location and Duration',
      type: 'object',
      fields: [
        {
          name: 'location',
          title: 'Location',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'duration',
          title: 'Duration (days)',
          type: 'number',
          validation: (Rule) => Rule.required().positive(),
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'itineraryDetails',
      title: 'Itinerary Details',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'day',
              title: 'Day',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'description',
              title: 'Description',
              type: 'blockContent',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'mealPlan',
              title: 'Meal Plan',
              type: 'array',
              of: [{ type: 'string' }],
            },
            {
              name: 'accommodation',
              title: 'Accommodation',
              type: 'string',
            },
            // New: Optional note per day
            defineField({
              name: 'note',
              title: 'Note',
              type: 'text',
            }),
            // New: Accommodation images
            defineField({
              name: 'accommodationGallery',
              title: 'Accommodation Gallery',
              type: 'array',
              of: [
                {
                  type: 'image',
                  options: { hotspot: true },
                  fields: [
                    { name: 'alt', type: 'string', title: 'Alternative Text' }
                  ]
                }
              ]
            }),
            // New: Hotel's description (used in dropdown)
            defineField({
              name: 'hotelDescription',
              title: "Hotel's Description",
              type: 'text',
            }),
            // New: Amenities as chips
            defineField({
              name: 'amenities',
              title: 'Amenities',
              type: 'array',
              of: [{ type: 'string' }],
              options: {
                layout: 'tags',
                list: [
                  { title: 'WiFi', value: 'WiFi' },
                  { title: 'Swimming Pool', value: 'Swimming Pool' },
                  { title: 'Laundry service', value: 'Laundry service' },
                  { title: 'Wildlife area', value: 'Wildlife area' },
                  { title: 'Spa', value: 'Spa' },
                  { title: 'Restaurant', value: 'Restaurant' },
                ]
              }
            }),
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'includes',
      title: 'Includes',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excludes',
      title: 'Excludes',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'itineraryName',
      subtitle: 'itineraryType',
      media: 'coverImg',
    },
  },
})