import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
 
import Slider from "../Component/Slider";
import Carsol from '../Component/Carsol';
 

const Home = () => {
 
  return (
    <div>
       

      <Slider />
      <div className='text-6xl text-center mt-8'>
        <h1><span className='text-green-400'>For</span> Sale</h1>
        </div>
    <div className='pt-30'> 
      
       <Carsol/>
       </div>
    
 
      {/* <div className="bg-red"
       data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-offset="0">
      <h1 > Hel      sjdfkajdfsjalksfjdlkadjfklajdsfkjsdakfjakdfj</h1>
</div> */}
      
    </div>
  );
};

export default Home;
