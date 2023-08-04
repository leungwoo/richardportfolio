const projects = {
    name: 'projects',
    title: 'Projects',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        descripton: 'This is the description of the project',
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        link: ' This is the link to the project',
        name: 'link',
        title: 'Link',
        type: 'url',
      },
    
      {
        name: 'technology',
        title: 'Technology',
        type: 'array',
        of:[{ type:'string'}
        ]
      },
      {
        name:"techstack",
        title:"Tech Stack",
        type:"array",
        of:[{type:"image"}]
      },
      {
        name: 'imgUrl',
        title: 'ImageUrl',
        type: 'array',
        of:[{type:"image"}],
        options: {
          hotspot: true,
        },
        store: {
            originalFilename: true
          }
      },  
      {
        name:"slug",
        title:"Slug",
        type:"slug",
        options: {
            source: "title",
          },
    },
    {
        name: "featured",
        title: "Featured",
        type: "boolean",
        description: "Check this box if the product is a featured.",
      },

      {
        name:"problemstatement",
        title:"Problem Statement",
        type:"string",
        description:"What was the problem you were trying to solve?"
      },
    {
        name: 'learningsAndChallenges',
        title: 'Learnings and Challenges',
        type: 'object',
         fields: [
    {
      name: 'learning1',
      title: 'Learning 1',
      type: 'text',
      description: 'What did you learn from this project? (Paragraph 1)',
    },
    {
      name: 'learning2',
      title: 'Learning 2',
      type: 'text',
      description: 'What did you learn from this project? (Paragraph 2)',
    },
    {
      name: 'learning3',
      title: 'Learning 3',
      type: 'text',
      description: 'What did you learn from this project? (Paragraph 3)',
    },
    {
      name: 'challenge1',
      title: 'Challenge 1',
      type: 'text',
      description: 'What challenges did you face while working on this project? (Paragraph 1)',
    },
    {
      name: 'challenge2',
      title: 'Challenge 2',
      type: 'text',
      description: 'What challenges did you face while working on this project? (Paragraph 2)',
    },
    {
      name: 'challenge3',
      title: 'Challenge 3',
      type: 'text',
      description: 'What challenges did you face while working on this project? (Paragraph 3)',
    },
  ],
},
    ],
  };
  export default projects;