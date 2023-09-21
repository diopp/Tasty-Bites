import './About.css'

function About () {
    return (
     

        <div class="h-screen flex">
        <div class="hidden lg:flex w-full lg:w-1/2 login_img_section
        justify-around items-center">
          <div 
                class=" 
                bg-black 
                opacity-20 
                inset-0 
                z-0"
                >

                </div>
          <div class="w-full mx-auto px-20 flex-col items-center space-y-6">
            <h1 id='title' class="text-white font-bold text-xl font-sans">About Us</h1>
            <p class="text-white mt-1">The simplest app to use</p>
            <div class="flex justify-center lg:justify-start mt-6">
                <a href="#" class="hover:bg-indigo-700 hover:text-white hover:-translate-y-1 transition-all duration-500 bg-white text-indigo-800 mt-4 px-4 py-2 rounded-2xl font-bold mb-2">Get Started</a>
            </div>
          </div>
        </div>
        <div class="flex w-full lg:w-1/2 justify-center items-center bg-black space-y-8">
          <div class="w-full px-8 md:px-32 lg:px-24">
          
          </div>
          
        </div>
    </div>

    )
}

export default About;;