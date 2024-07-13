import { Link } from "react-router-dom";

const SingleCard = ({ value }) => {
  const {
    image,
    estate_title,
    segment_name,
    description,
    price,
    location,
    id,
  } = value;
  return (
    <div className="grid grid-cols-2">
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{estate_title}</h2>
          <h2 className="text-2xl font-bold text-green-300">{segment_name}</h2>
          <p>{description}</p>

          <div className="flex justify-between">
            <Link to={`/Data/${id}`}>
              <div className="badge badge-secondary badge-outline p-6">
                About details
              </div>
            </Link>

            <Link>
              <div className="badge badge-secondary badge-outline p-6">
              Contact now
              </div>
            </Link>
          </div>

          <div className="flex justify-between">
            <div>{price}</div>
            <div>{location}</div>
          </div>
          <div className="card-actions justify-end">
            <button className="btn w-full btn-primary "> about Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
