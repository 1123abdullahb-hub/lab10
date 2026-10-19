export default async function SSR() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
  
    const post = await response.json();
  
    return (
      <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    );
  }