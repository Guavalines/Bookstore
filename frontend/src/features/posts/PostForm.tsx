import React from 'react';

function PostForm(){
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  function submitHandler() {

  }

  function resetState() {
    setTitle('');
    setBody('');
  }

  return <div>
    <h1>PostForm</h1>
    <form
      input="text"
      className="form-control text-start"
      name="title"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      />
    </form>
  </div>;
}

export default PostForm;
