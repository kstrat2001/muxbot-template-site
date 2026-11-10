// A short introduction: one large sentence, then a little more detail.
export default function About() {
  return (
    <section id="about" className="about" aria-labelledby="about-title">
      <div className="container split">
        <p className="eyebrow">About</p>
        <div>
          <h2 id="about-title" className="statement">
            Say who you are and what you do in a sentence or two, the way you would to
            someone you just met.
          </h2>
          <div className="about-text">
            <p>
              Use this space for the longer story: how you got started, what you care about,
              and what makes your work different.
            </p>
            <p>
              Keep it short and specific. A few honest details do more than a page of big
              claims.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
