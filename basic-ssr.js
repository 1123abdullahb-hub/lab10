
export default function BasicSSR({ joke }) {
    return (
      <main style={{ padding: "30px", fontFamily: "Arial" }}>
        <h1>Basic Server-Side Rendering</h1>
        <h2>{joke.setup}</h2>
        <p>{joke.punchline}</p>
        <p>Type: {joke.type}</p>
        <button onClick={() => window.location.reload()}>
          Get Another Joke
        </button>
      </main>
    );
  }
  
  export async function getServerSideProps() {
    try {
      const response = await fetch(
        "https://official-joke-api.appspot.com/random_joke"
      );
  
      if (!response.ok) {
        throw new Error("Failed to fetch joke");
      }
  
      const joke = await response.json();
  
      return {
        props: { joke },
      };
    } catch (error) {
      return {
        props: {
          joke: {
            setup: "Why do programmers prefer dark mode?",
            punchline: "Because light attracts bugs!",
            type: "Programming",
          },
        },
      };
    }
  }
  