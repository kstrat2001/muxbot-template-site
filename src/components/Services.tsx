// What you offer, as a numbered list. Add, remove or rename items here.
const services = [
  {
    title: 'First thing you offer',
    text: 'Describe it in a sentence or two. Say who it is for and what they get.',
  },
  {
    title: 'Second thing you offer',
    text: 'Keep each one about the same length so the list reads evenly.',
  },
  {
    title: 'Third thing you offer',
    text: 'Three is a good number to start with. You can always add more later.',
  },
]

export default function Services() {
  return (
    <section id="services" className="services" aria-labelledby="services-title">
      <div className="container split">
        <p className="eyebrow">Services</p>
        <div>
          <h2 id="services-title">What we do</h2>
          <ol className="service-list">
            {services.map((service, index) => (
              <li key={service.title} className="service">
                <span className="service-number">{String(index + 1).padStart(2, '0')}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
