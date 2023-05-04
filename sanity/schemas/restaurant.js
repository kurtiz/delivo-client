import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'restaurant',
    title: 'Restaurant',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Restaurant Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'short_description',
            title: 'Short Description',
            type: 'string',
            validation: (Rule) => Rule.max(200),
        }),
        defineField({
            name: 'image',
            title: 'Image of Restaurant',
            type: 'image',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'lat',
            title: 'Latitude',
            type: 'number',
        }),
        defineField({
            name: 'long',
            title: 'longitude',
            type: 'string',
        }),
        defineField({
            name: 'address',
            title: 'Address',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'rating',
            title: 'Enter a rating from (1-5 stars)',
            type: 'string',
            validation: (Rule) => Rule.required()
                .min(1)
                .max(5)
                .error("Please enter a valid rating (1 - 5)")
        }),
        defineField({
            name: 'type',
            title: 'Category',
            type: 'reference',
            to: [{
                type: "category"
            }]
        }),
        defineField({
            name: 'dish',
            title: 'Dish',
            type: 'array',
            of: [{
                type: "reference",
                to: [{
                    type: "dish"
                }]
            }]
        }),
    ]

})
