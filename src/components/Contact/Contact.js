import './Contact.css'
import  {AiFillHome,AiFillPhone,AiTwotoneMail} from 'react-icons/ai';

function Contact () {

            return (

                
<div className='bg-black'>
                <section id='contact' class="w-full  px-6 py-1 mx-auto bg-black rounded-md shadow-md ">
                <h1 id='header2' class=" uppercase">Contact Us</h1>
                <h3 id='pr1' class="mt-2 text-2xl sm:text-left md:text-4xl text-center">GET IN TOUCH</h3>
 

                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
  
      <div className="relative grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-3 sm:grid-cols-2">
        <div className="absolute inset-0 flex items-center justify-center sm:hidden lg:flex">
          <div className="w-px h-full  lg:w-full lg:h-px" />
        </div>
        <div id='address' className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
          <div className="flex items-center justify-between mb-2">
            <p id='address1' className="text-lg text-black font-bold leading-5">Address</p>
            <p id='icon' className="flex items-center justify-center  font-bold rounded text-deep-purple-accent-400 ">
              <AiFillHome />
            </p>
          </div>
          <p id='address2' className="text-sm text-gray-900">
          1000 North West Street
Suite 1200
Wilmington, Delaware, 19801
          </p>
        </div>
        <div id='address' className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
          <div className="flex items-center justify-between mb-2">
            <p id='address1' className="text-lg text-black font-bold leading-5">Phone</p>
            <p id='icon' className="flex items-center justify-center  font-bold rounded text-deep-purple-accent-400">
            <AiFillPhone />
            </p>
          </div>
          <p id='address2' className="text-sm text-gray-900">
          (302) 295-4893
          </p>
        </div>
        <div  id='address' className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
          <div className="flex items-center justify-between mb-2">
            <p id='address1' className="text-lg font-bold text-black leading-5">Email</p>
            <p id='icon' className="flex items-center justify-center  font-bold rounded text-deep-purple-accent-400">
            <AiTwotoneMail />
            </p>
          </div>
          <p id='address2' className="text-sm text-gray-900" href=''>
        info@zikogroupllc.com
          </p>
        </div>
 
      </div>
  
    </div>

                
            </section>
            
            </div>
            


          
            );
        }
        

export default Contact;