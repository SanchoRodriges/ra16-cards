function CardBody( {data} ) {
  return (
    <div className="card-body">
      <h5 className="card-title">{data.title}</h5>
      <p className="card-text">{data.text}</p>
      <a href={data.btnLink} className="btn btn-primary">{data.btnText}</a>
    </div>
  );
}

export default CardBody;
