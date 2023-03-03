import React, { useEffect } from 'react';
import { useAppSelector } from "../../app/hooks";
import { fetchPostsAsync, selectPosts, Statuses } from './postSlice';

function Posts() {
  const posts = useAppSelector(selectPosts);
  const status = useAppSelector(selectStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPostsAsync());
  }, [dispatch])

  let contents;

  if (status !== Statuses.upToDate) {}

  return <div><h1>Posts</h1></div>;
}

export default Posts;
