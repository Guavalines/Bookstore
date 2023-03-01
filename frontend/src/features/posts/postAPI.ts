import { PostState} from "./postSlice"

const API_URL = "http://localhost:3000";

export async function fetchPosts() {
  return fetch('${API_URL}/posts')
}
