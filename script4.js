const links = document.querySelectorAll('section .pagelink a'); 
const pageContainer = document.querySelector('.pagecontainer');
const navCont = document.querySelector('nav');

gsap.set(".pagecontainer", {
  opacity:0,
  x: "200%",
  ease: "none",
duration:2,
  scrollTrigger: {
    trigger: ".pagecontainer",
    start: "top 1000px",
    end: "center center",
    scrub: false,
    markers: false,
    id: "scrub",
    // snap:".r0",
  }
})

document.addEventListener("DOMContentLoaded", function (event) {
    window.onload = function () {
      gsap.to(".pagecontainer", {
        x: 0,
        opacity:1,
        ease: "slow(0.7,0.7,false)",
      duration:2,
        scrollTrigger: {
          trigger: ".pagecontainer",
          start: "top 1000px",
          end: "center center",
          scrub: false,
          markers: false,
          id: "scrub",
          // snap:".r0",
        }
      })
    };
});


for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function(event) {
    event.preventDefault();
    const href = this.getAttribute('href');
    pageContainer.classList.add('fade-out');

    if(i%2 == 0){
    gsap.to(".pagecontainer", {
      x: "-200%",
      opacity:0,
      ease: "slow(0.7,0.7,false)",
    duration:2,
      scrollTrigger: {
        trigger: ".pagecontainer",
        start: "top 1000px",
        end: "center center",
        scrub: false,
        markers: false,
        id: "scrub",
        // snap:".r0",
      }
    });
      }
      else{
        gsap.to(".pagecontainer", {
          x: "200%",
          opacity:0,
          ease: "slow(0.7,0.7,false)",
        duration:2,
          scrollTrigger: {
            trigger: ".pagecontainer",
            start: "top 1000px",
            end: "center center",
            scrub: false,
            markers: false,
            id: "scrub",
            // snap:".r0",
          }
        });
      }
      setTimeout(function() {
      window.location.href = href;
    }, 1000);
  });
}