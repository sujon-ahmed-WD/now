import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

import Slider from "../Component/Slider";
import Carsol from "../Component/Carsol";
import { useLoaderData } from "react-router-dom";
import SingleCard from "../Component/SingleCard";

const Home = () => {
  const Card=useLoaderData()
   return (
    <div>
      <Slider />
      <div className="text-4xl mb-4 text-center mt-8">
        <h1>
          <span className="text-green-400">For</span> Sale
        </h1>
      </div>
      <div className=" pt-30">
        <Carsol />
      </div>
      <div  >
        <h1 className="text-center text-4xl mb-3">Showcase <span className="text-green-400">Properties</span></h1>
        <div className="grid sm:grid-cols-1  md:grid-cols-3 mb-3 gap-3 mx-auto   border">
            {
              Card.map(cards=><SingleCard key={cards.id} value={cards} ></SingleCard>)
            }
        </div>
      </div>
    </div>
  );
};

export default Home;
