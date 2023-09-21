import './Main.css';
import Image from '../../Images/food.jpg'
//import AnimationOnScroll from 'react-animation-on-scroll';



function Main () {
    return (
        
<section id='one' class="py-10 bg-black">

    
    <div class="flex flex-col px-8 mx-auto space-y-12 max-w-7xl xl:px-12">

        <div id='' class="flex flex-col mb-8 animated fadeIn sm:flex-row">
            <div id= 'bg' class="flex items-center mb-8 sm:w-1/2 md:w-5/12 sm:order-last ">
                <img class="" src={Image} alt="" />
             

            </div>
            <div id='div2' class="flex flex-col justify-center mt-5 mb-6 md:mt-0 sm:w-1/2 md:w-7/12 sm:pr-16">
                <h1 id='header1' class=" uppercase">About us</h1>
                <h3 id='pr' class="mt-2 text-2xl sm:text-left md:text-4xl">WHO WE ARE</h3>
                <p id='p' class="mt-5 text-lg text-gray-700 text md:text-left">Welcome to Chef, where culinary artistry takes center stage. Our dedicated team of chefs crafts every dish with passion and precision, ensuring each bite is a masterpiece. Explore a diverse menu inspired by global flavors, from classic comfort food to innovative creations. Whether you're seeking an intimate dinner or a lively gathering, Chef offers an inviting ambiance and exceptional service. Join us for a dining experience that celebrates the essence of food and the joy of sharing it with loved ones.</p>
                 



              
                <button id='button' className="button" href=''>
                <a href="#contact">CONTACT US</a>
        </button>
            </div>

            
        </div>
     


    </div>




    
</section>



    )
}

export default Main;