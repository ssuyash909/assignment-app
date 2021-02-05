const Comment = ({singleComment,indx}) => {
    return (
        <div>
            <h6 className="texts"> Comment :{indx+1} </h6>
            <h6 className="texts">User :{singleComment.cuser} - {singleComment.comment}</h6>
        </div>
    );
};
  
export default Comment
   