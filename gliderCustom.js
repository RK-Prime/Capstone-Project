new Glider(document.querySelector('.glider'), {

    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    dragVelocity: 1,
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    },
    responsive: [

// Glider settings for breakpoint 318 starts
    {

        breakpoint: 318,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        duration: 0.25,
        dragVelocity: 3
        }
    },
// Glider settings for breakpoint 318 ends

// Glider settings for breakpoint 425 starts
    {

        breakpoint: 425,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        draggable: true,
        duration: 0.25,
        dragVelocity: 3
        }
    },
// Glider settings for breakpoint 425 ends

// Glider settings for breakpoint 560 starts
    {

        breakpoint: 560,
        settings: {
        slidesToShow: 2.5,
        slidesToScroll: 1,
        draggable: true,
        duration: 0.25
        }
    },
// Glider settings for breakpoint 560 ends

// Glider settings for breakpoint 768 starts
    {   
        breakpoint: 768,
        settings: {
        slidesToShow: 3.5,
        slidesToScroll: 1,
        draggable: true,
        duration: 0.25
        }
    },
// Glider settings for breakpoint 768 ends

// Glider settings for breakpoint 1024 starts

    {
        
        breakpoint: 1024,
        settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        draggable: false,
        duration: 0.25
        }
    }

// Glider settings for breakpoint 1024 ends

    ]
});
  