// nav variables
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
const burger = document.querySelector('.burger');
const navLinks = document.querySelectorAll('.navbar-links li')
const navbar = document.querySelector('.navbar')

// open mobile nav
toggleButton.addEventListener('click', () => {

  //Burger animation in nav
  burger.classList.toggle('toggle');

  //Show nav on mobile
  navbarLinks.classList.toggle('active')

  navbar.classList.toggle('greyedout');

  //Animate Links in nav
  navLinks.forEach((link, index) => {
    console.log(index);
    if (link.style.animation) {
      link.style.animation = ''
    } else {
      link.style.animation = 'navLinkFade 0.5s ease forwards 0.3s';
    }
  });
})

// close mobile nave on link click
navbarLinks.addEventListener('click', () => {

  //Burger animation in nav
  burger.classList.toggle('toggle');

  //Show nav on mobile
  navbarLinks.classList.toggle('active')

  navbar.classList.toggle('greyedout');

  //Animate Links in nav
  navLinks.forEach((link, index) => {
    console.log(index);
    if (link.style.animation) {
      link.style.animation = ''
    } else {
      link.style.animation = 'navLinkFade 0.5s ease forwards 0.3s';
    }
  });
})


// Fade in on scroll

scrollOffset = 50;
if (document.querySelector(".page-container > img") != null) {
  scrollElements = document.querySelectorAll(".page-container > div, .wave");
}
else {
  scrollElements = document.querySelectorAll(".page-container > div");
}

scrollElements.forEach(scrollElement => {
  scrollElement.style.opacity = 0;
  scrollElement.style.transition = "opacity .5s ease";
});

const elementInView = (element, offset = 0) => {
  const elementTop = element.getBoundingClientRect().top;
  return elementTop <= ((window.innerHeight || document.documentElement.clientHeight) - offset);
};

const animateOnScroll = () => {
  scrollElements.forEach(scrollElement => {
    if (elementInView(scrollElement, scrollOffset)) {
      scrollElement.classList.add('animate-scrolled');
    }
  });
}

window.addEventListener('scroll', () => {;
  animateOnScroll();
});
window.addEventListener('load', () => {;
  animateOnScroll();
});

// Nav shrink on scroll
const scrollFunction = () => {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementsByClassName('navbar')[0].classList.remove('classinitial');
    document.getElementsByClassName('navbar')[0].classList.add('classfinal');
    document.getElementsByClassName('toggle-button')[0].classList.remove('burgerinitial');
    document.getElementsByClassName('toggle-button')[0].classList.add('burgerfinal');
  } else {
    document.getElementsByClassName('navbar')[0].classList.remove('classfinal')
    document.getElementsByClassName('navbar')[0].classList.add('classinitial');
    document.getElementsByClassName('toggle-button')[0].classList.remove('burgerfinal');
    document.getElementsByClassName('toggle-button')[0].classList.add('burgerinitial');
  };
}


  window.onscroll = function() {scrollFunction()};


  //collapsible2
  var coll2 = document.getElementsByClassName("collapsible2");
  var content = document.getElementsByClassName("content")[0]
  var i;

  function collapseAllOpenContent() {
    const colls = document.getElementsByClassName('collapsible2');
    for (const coll2 of colls) {
      if (coll2.classList.contains('c2Active')) {
        coll2.classList.remove('c2Active');
        coll2.nextElementSibling.style.maxHeight = null;
      }
    }
  }

  for (i = 0; i < coll2.length; i++) {
    console.log(i);
    coll2[i].addEventListener("click", function() {
      if (!this.classList.contains('c2Active')) {
        collapseAllOpenContent();
      }
      this.classList.toggle("c2Active");
      var content2 = this.nextElementSibling;
      if (content2.style.maxHeight){
        content2.style.maxHeight = null;
      } else {
        content2.style.maxHeight = content2.scrollHeight + "px";
        content.style.maxHeight = "none";
      }
    });
  }



  //collapsible
  var coll = document.getElementsByClassName("collapsible");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("cActive");
      var content = this.nextElementSibling;
      if (content.style.maxHeight){
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  }
