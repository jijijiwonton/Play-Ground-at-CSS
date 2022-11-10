function Card(props) {
  return (
    <div>
      <section>
        <div className="container">
          <div className="cards">
            <div className="card">
              <h3>{props.title}</h3>
              <p>{props.description}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Card;
