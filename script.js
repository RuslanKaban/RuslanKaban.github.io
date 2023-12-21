IMask(
    document.getElementById('phone'),
    {
      mask: '+{7}(000)000-00-00'
    }
  )
  

  gsap.to(".palma", {
    scrollTrigger : {
     scrub : 2
    },
    x : -1000
    
   });