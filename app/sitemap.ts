import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://productfeedbackappfm.netlify.app/',
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: 'https://productfeedbackappfm.netlify.app/product',
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: 'https://productfeedbackappfm.netlify.app/roadmap',
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: 'https://productfeedbackappfm.netlify.app/create-product',
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: 'https://productfeedbackappfm.netlify.app/edit-product',
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: 'https://productfeedbackappfm.netlify.app/sign-in',
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: 'https://productfeedbackappfm.netlify.app/sign-up',
      lastModified: new Date(),
      priority: 0.8,
    },
  ]
}