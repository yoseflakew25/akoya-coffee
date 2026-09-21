const QUOTES = [
  {
    text: 'Akoya Coffee has transformed our sourcing experience with their commitment to quality and sustainability. Highly recommend their services!',
    name: 'Getnet Assefa',
  },
  {
    text: 'The flavor profiles of their Ethiopian coffee are simply unmatched. Akoya Coffee is my go-to supplier!',
    name: 'Mohamed Nasr',
  },
  {
    text: 'Exceptional service and outstanding coffee quality. Akoya Coffee truly understands what it means to deliver perfection.',
    name: 'Emily Johnson',
  },
];

export default function Testimonials() {
  return (
    <section className="clients" id="clients" aria-label="What our clients say">
      <div className="wrap">
        <header className="shead shead--center" data-reveal>
          <p className="shead__eyebrow"><span className="tick" /> Testimonials</p>
          <h2 className="shead__title shead__title--sm"><span className="hollow">What our</span><br />clients say.</h2>
        </header>
        <p className="vlede">Roasters, importers and cafes who buy from us, in their own words.</p>

        <div className="cgrid" data-reveal>
          {QUOTES.map((q) => (
            <figure key={q.name} className="ccard">
              <div className="ccard__stars" aria-label="Rated five out of five">
                <span aria-hidden="true">&#9733;</span>
                <span aria-hidden="true">&#9733;</span>
                <span aria-hidden="true">&#9733;</span>
                <span aria-hidden="true">&#9733;</span>
                <span aria-hidden="true">&#9733;</span>
              </div>
              <blockquote className="ccard__quote">{q.text}</blockquote>
              <figcaption className="ccard__name">{q.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
