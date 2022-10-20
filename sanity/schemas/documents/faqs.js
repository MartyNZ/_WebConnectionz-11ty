import {FaRegQuestionCircle} from 'react-icons/fa'

export default {
  name:'faqs',
  title:'Frequently Asked Questions',
  icon:FaRegQuestionCircle,
  type:'document',
  __experimental_actions: [
    'create',
    // 'delete',
    'update',
    'publish'
  ],
  fields:[
    {
      name:'title',
      title:'Title',
      type:'string',
      initialValue:'F.A.Q\'s'
    },
    {
      name:'subtitle',
      title:'Subtitle',
      type:'string',
      initialValue:'Frquently Asked Questions',
    },
    {
      name:'questions',
      title:'Questions',
      type:'array',
      of:[
        {
          name:'QandA',
          title:'Questions and Answers',
          type:'object',
          fields:[
            {
              name:'question',
              title:'Question',
              type:'string'
            },
            {
              name:'answer',
              title:'Answer',
              type:'portableText'
            },
            {
              name:'listNumber',
              title:'List Number',
              type:'string',
              description:'Place the question in one of the two available lists',
              options:{
                list:[
                  {value:'1', title:'List One'},
                  {value:'2', title:'List Two'}
                ],
                layout:'dropdown'
              }
            }
          ]
        }
      ]
    }
  ]
}