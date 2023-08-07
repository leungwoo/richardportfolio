const recommendations = {
    name: 'recommendations',
    title: 'Recommendations',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string',
        },
        {
            name: 'recommendations',
            title: 'Recommendations',
            type: 'string',
        },
        {
            name: 'img',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        
    ],
}
export default recommendations;