"use strict";


gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


// smooth-scroll modified from https://codepen.io/GreenSock/pen/gOgWELo


smoothScroll("#contentcheck"); 



function smoothScroll(content, viewport, smoothness) {
  content = gsap.utils.toArray(content)[0];
  smoothness = smoothness || 1;
  gsap.set(viewport || content.parentNode,{overflow: "visible", position: "fixed", height: "100%", width: "80%", top: 0, left: "10%", right: 0, bottom: 0});
  gsap.set(content, {
    overflow: "hidden",
    width: "100%"
  });

  var getProp = gsap.getProperty(content),
      setProp = gsap.quickSetter(content, "y", "px"),
      setScroll = ScrollTrigger.getScrollFunc(window),
      removeScroll = function removeScroll() {
    return content.style.overflow = "visible";
  },
      killScrub = function killScrub(trigger) {
    var scrub = trigger.getTween ? trigger.getTween() : gsap.getTweensOf(trigger.animation)[0]; // getTween() was added in 3.6.2

    scrub && scrub.kill();
    trigger.animation.progress(trigger.progress);
  },
      height,
      isProxyScrolling;

  function refreshHeight() {
      height = content.clientHeight;
      content.style.overflow = "visible";
      document.body.style.height = height + "px";
      return height - document.documentElement.clientHeight;
  }

  ScrollTrigger.addEventListener("refresh", function () {
    removeScroll();
    requestAnimationFrame(removeScroll);
  });
  ScrollTrigger.defaults({
    scroller: content,
  });

  ScrollTrigger.prototype.update = function (p) {
    return p;
  }; // works around an issue in ScrollTrigger 3.6.1 and earlier (fixed in 3.6.2, so this line could be deleted if you're using 3.6.2 or later)


  ScrollTrigger.scrollerProxy(content, {
    scrollTop: function scrollTop(value) {
      if (arguments.length) {
        isProxyScrolling = true; // otherwise, if snapping was applied (or anything that attempted to SET the scroll proxy's scroll position), we'd set the scroll here which would then (on the next tick) update the content tween/ScrollTrigger which would try to smoothly animate to that new value, thus the scrub tween would impede the progress. So we use this flag to respond accordingly in the ScrollTrigger's onUpdate and effectively force the scrub to its end immediately.

        setProp(-value);
        setScroll(value);
        return;
      }

      return -getProp("y");
    },
    getBoundingClientRect: function getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight
      };
    }
  });



  return ScrollTrigger.create({
    animation: gsap.fromTo(content, {
      y: 0
    }, {
      y: function y() {
        return document.documentElement.clientHeight - height;
      },
      ease: "none",
      onUpdate: ScrollTrigger.update
    }),
    scroller: window,
    invalidateOnRefresh: true,
    start: 0,
    end: refreshHeight,
    refreshPriority: -999,
    scrub: smoothness,

    onUpdate: function onUpdate(self) {
      if (isProxyScrolling) {
        killScrub(self);
        isProxyScrolling = false;
      }
    },

    
    onRefresh: killScrub // when the screen resizes, we just want the animation to immediately go to the appropriate spot rather than animating there, so basically kill the scrub.

  });


}


gsap.from(".fdin", {

  opacity:0,
  ease: "none",

  scrollTrigger: {
    trigger: ".fdin",
    start: "top 350px",
    end: "top 150px",
    scrub: true,
    markers: false,
    id: "scrub",
    // snap:".r0",
  }
});


gsap.from(".fdin2", {

  opacity:0,
  ease: "none",

  scrollTrigger: {
    trigger: ".fdin2",
    start: "top 350px",
    end: "top 150px",
    scrub: true,
    markers: false,
    id: "scrub",
    // snap:".r0",
  }
});

gsap.from(".fdin3", {

  opacity:0,
  ease: "none",

  scrollTrigger: {
    trigger: ".fdin3",
    start: "top 450px",
    end: "top 150px",
    scrub: true,
    markers: false,
    id: "scrub",
    // snap:".r0",
  }
});

gsap.from(".fdin4", {

  opacity:0,
  ease: "none",

  scrollTrigger: {
    trigger: ".fdin4",
    start: "top 450px",
    end: "top 150px",
    scrub: true,
    markers: false,
    id: "scrub",
    // snap:".r0",
  }
});

gsap.from(".fdin5", {

  opacity:0,
  ease: "none",

  scrollTrigger: {
    trigger: ".fdin5",
    start: "top 450px",
    end: "top 150px",
    scrub: true,
    markers: false,
    id: "scrub",
    // snap:".r0",
  }
});



gsap.from(".r0", {
  x: "-50vw",
  opacity:0,
  ease: "slow(0.7,0.7,false)",

  scrollTrigger: {
    trigger: ".r0",
    start: "top 700px",
    end: "center center",
    scrub: true,
    markers: false,
    id: "scrub",
    // snap:".r0",
  }
});



gsap.from(".l", {
  x: "50vw",
  opacity:0, 
  ease: "slow(0.7,0.7,false)",
  scrollTrigger: {
    trigger: ".l",
    start: "top 700px",
    end: "center center",
    scrub: true,
    markers: false,
    id: "scrub"
  }
});



gsap.from(".r", {
  x: "-50vw",
  opacity:0,
  ease: "slow(0.7,0.7,false)",

  scrollTrigger: {
    trigger: ".r",
    start: "top 700px",
    end: "center center",
    scrub: true,
    markers: false,
    id: "scrub"
  }
});




gsap.from(".l2", {
  x: "50vw",
  opacity:0,
  ease: "slow(0.7,0.7,false)",

  scrollTrigger: {
    trigger: ".l2",
    start: "top 700px",
    end: "center center",
    scrub: true,
    markers: false,
    id: "scrub"

  }
});


gsap.from(".r2", {
  x: "-50vw",
  opacity:0,
  ease: "slow(0.7,0.7,false)",

  scrollTrigger: {
    trigger: ".r2",
    start: "top 700px",
    end: "center center",
    scrub: true,
     markers: false,
    id: "scrub"
  }
});

const cursor = document.querySelector(".custom-cursor");
const links2 = document.querySelectorAll("a");
let isCursorInited = false;

const initCursor = () => {
  cursor.classList.add("custom-cursor--init");
  isCursorInited = true;
};

const destroyCursor = () => {
  cursor.classList.remove("custom-cursor--init");
  isCursorInited = false;
};

links2.forEach((link) => {
  link.addEventListener("mouseover", () => {
    cursor.classList.add("custom-cursor--link");
  });

  link.addEventListener("mouseout", () => {
    cursor.classList.remove("custom-cursor--link");
  });
});

document.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  if (!isCursorInited) {
    initCursor();
  }

  cursor.style = `translate: ${mouseX}px ${mouseY}px`;
});

// document.addEventListener("mouseout", destroyCursor);




let navs = gsap.utils.toArray("nav a");

gsap.utils.toArray(".panel").forEach((panel, i) => {
  let trigger = ScrollTrigger.create({
    trigger: panel,
    start: "top top", 
  });
    
  let nav = navs[i];
  
  nav.addEventListener("click", function(e) {
     e.preventDefault();
    gsap.to(window, {duration: 1, scrollTo:{y:"#a" + (i+1)}});

  });
});





ScrollTrigger.refresh();


// const menu = document.querySelector("#menu")

// menu.querySelectorAll('a').forEach(function(link){
  
//   link.addEventListener('click', function(e) {
    
//     e.preventDefault();

//     const target = this.getAttribute("href")
//     locoScroll.scrollTo(target);
    
//   })
  
// })




// ScrollTrigger.refresh();

// // // Or you can attach a tween or timeline to a ScrollTrigger later
// // const anim = gsap.from(".c", {
// //   x: "100vw",
// //   duration: 3
// // });

// // ScrollTrigger.create({
// //   trigger: ".c",
// //   animation: anim,
// //   // Uncomment these to see how they affect the ScrollTrigger
// //   markers: true,
// //   start: "top center",
// //   end: "center center",
// //   toggleClass: "active",
// //   pin: true,
// //   scrub: 1,
// //   // onUpdate: self => {
// //   //   console.log("progress:", self.progress.toFixed(3), "direction:", self.direction, "velocity", self.getVelocity());
// //   // }
// // });
