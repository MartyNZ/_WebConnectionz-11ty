import { BsStars } from 'react-icons/bs'

export default {
  name: 'testimonials',
  title: 'Testimonials',
  type: 'document',
  icon: BsStars,
  __experimental_actions: [
    'create',
    // 'delete',
    'update',
    'publish'],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue:'Testimonials',
      readOnly:true,
      hidden:true
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string'
    },
    {
      name: 'testimonial',
      title: 'Testimonial',
      type: 'array',
      of:[{type:'testimonial'}]
    }
  ]
}