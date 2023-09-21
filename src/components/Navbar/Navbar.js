import React from "react";
import './Navbar.css'

export default function Navbar() {

  return (
<header class="navbar1">
  <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
    <div class="flex lg:flex-1">
      <a href="#" class="text-xl about -m-1.5 p-1.5">
     
       Tasty Bites.
      </a>
      
    </div>
    <div class="flex lg:hidden">
      <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
        <span class="sr-only">Open main menu</span>
        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
    </div>
    <div class="hidden lg:flex lg:gap-x-12">
      <div class="relative">
        <button type="button" class=" about flex items-center gap-x-1 text-xl font-thin leading-6 font-mono" aria-expanded="false">
          HOME
       
        </button>


      
      </div>

      <a href="#" class="about text-base font-thin leading-6 text-gray-900">ABOUT</a>
      <a href="#" class="about text-base font-thin leading-6 text-gray-900">MENU</a>
      <a href="#" class="about text-base font-thin leading-6 text-gray-900">TEAMS</a>
      <a href="#" class="about text-base font-thin leading-6 text-gray-900">CONTACT</a>
    </div>
    <div class="hidden lg:flex lg:flex-1 lg:justify-end">
      <a href="#" class=" about text-xl font-thin leading-6 text-lime-400">Reservation <span aria-hidden="true">&rarr;</span></a>
    </div>
  </nav>


</header>


  );
}