
import React from "react";

export async function getServerSideProps(context) {
  const { id } = context.params;

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  if (!res.ok) {
    return { notFound: true };
  }

  const post = await res.json();

  return {
    props: {
      post,
    },
  };
}

export default function SSRPage({ post }) {
  return (
    <main style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>Server-Side Rendering (SSR)</h1>

      <h2>{post.title}</h2>
      <p>{post.body}</p>

      <p>Post ID: {post.id}</p>
      <p>User ID: {post.userId}</p>
    </main>
  );
}
