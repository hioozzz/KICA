window.addEventListener('DOMContentLoaded', function () {


  /* scroll event section */
  container.addListener((e) => {
    
		let scrollTop = container.scrollTop;
		$('.posNum').html(scrollTop);


    if (scrollTop >= 1) {
      $('.s01title').addClass('on');
    }
    if (scrollTop < 1) {
      $('.s01title').removeClass('on');
    }

    if (scrollTop >= 3000) {
      $('.s01gnb').addClass('on');
    }
    if (scrollTop < 3000) {
      $('.s01gnb').removeClass('on');
    }

    if (scrollTop >= 4000) {
      $('.s01title_1').addClass('on');
    }
    if (scrollTop < 4000) {
      $('.s01title_1').removeClass('on');
    }

    if (scrollTop >= 4600) {
      $('.s01title_2').addClass('on');
    }
    if (scrollTop < 4600) {
      $('.s01title_2').removeClass('on');
    }
  });



    /*  slide,click event section */
    gsap.to('.fix-this-01', {

      scrollTrigger: {
          trigger: ".trigger-this-01",
          start: "top top",
          // end: () => "+=" + 300,
          end: 'bottom bottom',
          pin: true,
          // horizontal: true,
          // pinSpace:false,
          pinSpacing: false,
          scrub: true,
      }
    });

    

    gsap.to('#section01 .s01bg', {
      width: 1920,
      height: 1080,
      scrollTrigger: {
      trigger: "#section01",
      start: "top top",
      end: () => "+=" + 3000,
      // end: 'bottom bottom',
      // horizontal: true,
      scrub: true,
      }
    });






      

});


