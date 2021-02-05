export const addpost =(newPost) =>{
    return{
        type:'ADDPOST',
        newp : newPost,
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

export const addlike =(index,updpost) =>{
    return{
        type:'ADDLIKE',
        indx: index,
        up : updpost
    };
};

export const editpost =(index,newtext,updpost) =>{
    return{
        type:'EDITPOST',
        indx: index,
        up : updpost,
        nt : newtext
    };
};

export const deletepost =(index,updpost) =>{
    return{
        type:'DELETEPOST',
        indx: index,
        up : updpost,
    };
};

