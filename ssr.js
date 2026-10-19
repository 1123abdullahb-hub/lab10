
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
  
  export async function getServerSideProps() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
  
    if (!response.ok) {
      return { notFound: true };
    }
  
    const post = await response.json();
  
    return {
      props: { post },
    };
  }
  