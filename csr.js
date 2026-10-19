
import { useEffect, useState } from "react";

export default function CSRPage() {
  const [post, setPost] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Request failed");
        }
        return response.json();
      })
      .then((data) => setPost(data))
      .catch(() => setError(true));
  }, []);

  return (
    <main style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>Client-Side Rendering (CSR)</h1>

      {error ? (
        <p>Failed to load post.</p>
      ) : post ? (
        <>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <p>Post ID: {post.id}</p>
        </>
      ) : (
        <p>Loading post...</p>
      )}
    </main>
  );
}
