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
