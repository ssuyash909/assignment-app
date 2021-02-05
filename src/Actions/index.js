export const addpost =(newPost) =>{
    return{
        type:'ADDPOST',
        newp : newPost
    };
};

export const addcomment =(index,newComment,updpost) =>{
    return{
        type:'ADDCOMMENT',
        newc : newComment,
        indx: index,
        up : updpost
    };
};

export const show =() =>{
    return{
        type:'SHOWCOMMENT'
    }
}