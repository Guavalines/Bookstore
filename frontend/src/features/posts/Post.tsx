import React from 'react';

function Post(props:any){
    const [title, setTitle] = useState(props.post.title);
    const [body, setBody] = useState(props.post.body);

    const titleElement = <h2 className="title text-start">{props.post.title}</h2>;
    const bodyElement = <p className="card-text text-start">{props.post.body}</p>;
  return <div>Post</div>;
}

export default Post;
