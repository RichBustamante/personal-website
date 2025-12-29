export default function Home() {
  const videoId = "U5cvrqABgpw"
  return (
    <section className="page">
      <h1>Hi, I'm Richard 👋</h1>
      <p>
        Software Engineer specializing in building high-quality web applications.
      </p>
      <a
        href={`https://www.youtube.com/watch?v=${videoId}`}
        target="_blank"
        rel="noopener noreferrer"
        className="youtube-thumbnail"
      >
        <img
          src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
          alt="YouTube video preview"
        />
        <span className="play-button">▶</span>
      </a>      
    </section>
  );
}