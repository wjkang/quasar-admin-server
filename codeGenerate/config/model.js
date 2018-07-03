export default {
    name:"roleUser",
    Name:"RoleUser",
    humpName:"roleUser",
    properties:[
        {
            key:"name",
            title:"角色名称",
            type:"string",//标准json schema type
            search:true,//是否作为查询条件
            table:true,//是否列表中显示,
            edit:false,//是否可编辑
        },
        {
            key:"code",
            title:"角色编码",
            type:"string",//标准json schema type
            search:true,//是否作为查询条件
            table:true,//是否列表中显示,
            edit:true,//是否可编辑
        }
    ]
}

// properties:[
//     {
//         key:"name",
//         title:"角色名称",
//         type:"string",//标准json schema type
//         search:true,//是否作为查询条件
//         table:true,//是否列表中显示,
//         edit:true,//是否可编辑
//     }
// ]