// A few kind words from someone you have worked with.
export default function Quote() {
  return (
    <section className="quote" aria-label="What people say">
      <div className="container">
        <figure>
          <blockquote>
            <p>
              A kind word from a customer or a friend goes here. One or two sentences in
              their own voice is plenty.
            </p>
          </blockquote>
          <figcaption>
            <strong>Their name</strong>
            <span>Who they are</span>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
