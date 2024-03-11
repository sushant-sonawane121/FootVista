import "../styles/Card.css";
const Card = () => {
  return (
    <>
      <div className="mycard">
        <div className="mycard-body p-2">
          <div className="card-img">
            <img src="card_shoe1.jpg" alt="this is card" />
          </div>
          <div className="card-info p-2">
            <div className="title">
              <h4>This is sport shoe for men</h4>
            </div>
            <div className="card-price">
              <p>
                Rs. 899{" "}
                <span>
                  {" "}
                  <s>Rs.1500</s>
                </span>
              </p>
            </div>
            <div className="buttons text-center">
              <button className="btn btn-success rounded fs-5 w-50">Buy now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
