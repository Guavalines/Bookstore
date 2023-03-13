import { PostsState, PostState} from "./postSlice"

const API_URL = "http://localhost:3000";

export async function fetchPosts() {
  return fetch('${API_URL}/posts.json', {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json())
  .catch((error) => {
    console.log("Error: ", error);
    return {} as PostsState;
  });
}

export async function createPosts(payload: PostFormData) {
  const post = payload.post;
  return fetch('${API_URL}/posts.json', {

  })
  .then((response) => response.json())
  .catch((error) => {
    console.log("Error: ", error);
    return {} as PostsState;
  });
}

export async function updatePost(payload: PostFormDate) {
  const post = payload.post;
  return fetch(`${API_URL}/posts/${post.post_id}.json`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      post,
    }),
  })
    .then((response) => response.json())
    .catch((error) => {
      console.log("Error: ", error);
      return {} as PostState,
    });
}

export async function destroyPost(payload: PostDeleteData) {
  const post = payload.post;
  return fetch(`${API_URL}/posts/${post.post_id}.json`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      post,
    }),
  }).then((response) => response.json())
    .catch((error)) => {
      console.log("Error: ", error);
      return {} as PostsState;
    }
}
