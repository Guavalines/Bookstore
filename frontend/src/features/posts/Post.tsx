import React, { useState } from 'react';
import ButtonGroup from '.ButtonGroup';

function Post(props:any){
    const [title, setTitle] = useState(props.post.title);
    const [body, setBody] = useState(props.post.body);

    const titleElement = <h2 className="title text-start">{props.post.title}</h2>;
    const bodyElement = <p className="card-text text-start">{props.post.body}</p>;

    const editableTitle = <input
                            type="text"
                            className="form-control text-start"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}/>;
  return <div>
    <div className="row">
      <div className="col-8">
        {titleElement}
      </div>
      <div className="col-4">
        <ButtonGroup
          post_id={props.post.id}
          dispatch={props.dispatch}
        />

      </div>
    </div>
      <div className="row">
        <div className="col-8">
          {bodyElement}
        </div>
      </div>
      <div className="row">
        <div className="col-2">
            {/** Edit Submit Button */}
        </div>
      </div>
  </div>;
}

export default Post;
