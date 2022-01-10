/**
 * Define Global Variables
 * 
 */
 const sections = Array.from(document.querySelectorAll('section'));
 const navBarList = document.getElementById('navbar__list');
 
 // build the nav
 document.addEventListener('DOMContentLoaded', _ => {
     sections.map(section => {
         let navItem = document.createElement('li');
         navItem.innerHTML = `<a class="menu__link" href="#${section.getAttribute('id')}">${section.getAttribute('data-nav')}</a>`
         navBarList.appendChild(navItem);
         // Smooth scrolling 
         navItem.addEventListener('click', e => {
             e.preventDefault();
             section.scrollIntoView({
                 behavior: "smooth"
             });
         })
     })
 });
 //checking if the section is active or not
 
 window.onscroll = function() {
     document.querySelectorAll("section").forEach(function(active) {
         if (
             active.getBoundingClientRect().top >= -300 && active.getBoundingClientRect().top <= 300
         ) {
             active.classList.add("your-active-class");
         } else {
             active.classList.remove("your-active-class")
         }
     });
 };
