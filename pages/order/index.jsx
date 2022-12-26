import { useState } from "react";
import Navbar from "../../components/Navbar";
import MenuCard from "../../components/MenuCard";
import { dateStr } from "../../utils/getDate";
import { prisma } from "../../lib/prisma";
const Order = ({ dishes }) => {
  const [chooseDish, setChooseDish] = useState(false);
  console.log(dishes);
  return (
    <div className="flex flex-col min-h-screen ">
      <Navbar />
      <div className="flex flex-col justify-center items-center p-6 space-y-6 mt-20">
        <h2 className="text-4xl font-bold w-full text-left">
          Menu for {dateStr}
        </h2>
        <h3 className="text-3xl font-bold w-full text-left">
          Choose Your Plan
        </h3>
        <div className="flex flex-col border-opacity-50 w-full">
          <label
            className="grid h-20 btn bg-base-300 rounded-box place-items-center text-xl font-bold text-accent"
            onClick={() => setChooseDish((prev) => !prev)}
          >
            90元 (三配菜一主菜)
          </label>
          <div className="divider">OR</div>
          <label
            className="grid h-20 btn bg-base-300 rounded-box place-items-center text-xl font-bold text-accent"
            htmlFor="50"
          >
            50元 (三配菜)
          </label>
        </div>

        {chooseDish && (
          <>
            <h2 className="text-4xl font-bold">Choose Your Main Dish</h2>
            <div className="grid md:grid-cols-2 gap-6 md:gap-4">
              {dishes.map((dish) => (
                <MenuCard
                  id={dish.id}
                  name={dish.name}
                  ingredients={dish.ingredients}
                  type={dish.type}
                  image={dish.image}
                />
              ))}
            </div>
          </>
        )}
      </div>
      {/* modal for $50 */}
      <input type="checkbox" id="50" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Check Your Order</h3>
          <p className="py-4">50元 (三配菜)</p>
          <div className="modal-action">
            <label htmlFor="50" className="btn">
              Confirm
            </label>
            <label htmlFor="50" className="btn">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;

export async function getServerSideProps() {
  const dishes = await prisma.dish.findMany();
  return {
    props: {
      dishes,
    },
  };
}
