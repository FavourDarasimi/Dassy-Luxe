import { defineType, defineField } from "sanity";

export const product = defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Product Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),

    defineField({
      name: "image",
      title: "Product Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "available",
      title: "Available",
      type: "boolean",
      initialValue: true,
    }),
    
    defineField( {
      name: 'sku',
      type: 'string',
      title: 'SKU / Product ID',
      readOnly: true,
      initialValue: ({ document }) => {
        const name = document?.name || 'ITEM';
        const prefix = name.substring(0, 3).toUpperCase();
        const random = Math.random().toString(36).substring(2, 6).toUpperCase();
        return `${prefix}-${random}`;
      }
    })
  ],
});
