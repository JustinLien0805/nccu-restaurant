import React from "react";

const MenuCard = ({ name, ingredients, type, image }) => {
  return (
    <>
      <div className="card bg-base-300 shadow-xl" htmlFor={name}>
        <figure>
          <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-accent badge-outline"> {type}</div>
          </h2>

          <p>內容物: {ingredients}</p>
          <div className="card-actions justify-end">
            <label className="btn btn-primary" htmlFor={name}>
              Select
            </label>
          </div>
        </div>
      </div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id={name} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Check Your Order</h3>
          <p className="py-4">{name}</p>
          <div className="modal-action">
            <label htmlFor={name} className="btn">
              Confirm
            </label>
            <label htmlFor={name} className="btn">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuCard;
