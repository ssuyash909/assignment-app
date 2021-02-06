export const addpost =(newPost) =>{
    return{
        type:'ADDPOST',
        newp : newPost,
    };
};

export const addcomment =(index,newComment) =>{
    return{
        type:'ADDCOMMENT',
        newc : newComment,
        indx: index
    };
};

export const addlike =(index) =>{
    return{
        type:'ADDLIKE',
        indx: index,
    };
};

export const editpost =(index,newtext) =>{
    return{
        type:'EDITPOST',
        indx: index,
        nt : newtext
    };
};

export const deletepost =(index) =>{
    return{
        type:'DELETEPOST',
        indx: index
    };
};

