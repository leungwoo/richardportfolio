const skills ={
    name:'skills',
    title:'Skills',
    type: 'document',
    fields:[
        
        {
            name:'imgUrl',
            title:'ImgUrl',
            type: 'array',
            of:[{ type: 'image',
                    options: {
                      hotspot: true,
                    },
                }]
        },
        
    ]
}
export default skills;