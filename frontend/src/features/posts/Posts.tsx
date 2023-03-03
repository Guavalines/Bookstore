import React, { useEffect } from 'react';
import { useAppSelector } from "../../app/hooks";
import { fetchPostsAsync, selectPosts } from './postSlice';

function Posts(){
  const posts = useAppSelector(selectPosts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPostsAsync());
  })
  return <div><h1>Posts</h1></div>;
}

export default Posts;
