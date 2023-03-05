import React from 'react';

function Post(props:any){
    const [title, setTitle] = useState(props.post.title);
    const [body, setBody] = useState(props.post.body);
  return <div>Post</div>;
}

export default Post;
