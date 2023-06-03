

function Card( props ) {
  return (
    <div className="card-wrapper">
      <div className="card" style={{width: "18rem"}}>
        {props.children}
      </div>
    </div>
  );
}

export default Card;
