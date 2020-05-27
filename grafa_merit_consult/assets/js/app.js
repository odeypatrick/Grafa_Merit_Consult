    //slide menu

    function openSlideMenu(){
        document.getElementById('side-menu').style.width = '250px';
    }

    function closeSlideMenu(){
        document.getElementById('side-menu').style.width = '0';
    }

    //slide show
    const employeeShow = document.querySelector('.employee_show');
    const employeeImages = document.querySelectorAll('.employee_show img');

    //buttons
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    let counter = 1;
    const size = employeeImages[0].clientWidth;

    employeeShow.style.transform = 'translateX(' + (-size * counter) + 'px';

    // //button isteners

    // nextBtn.addEventListener('click', () => {
    //     if(counter >= employeeImages.length - 1) return;
    //     employeeShow.style.transition = 'transform 0.5s ease-in-out';
    //     counter++;
    //     employeeShow.style.transform = 'translateX(' + (-size * counter) + 'px';
    // })

    // prevBtn.addEventListener('click', () => {
    //     if(counter <= 0) return;
    //     employeeShow.style.transition = 'transform 0.5s ease-in-out';
    //     counter--;
    //     employeeShow.style.transform = 'translateX(' + (-size * counter) + 'px';
    // })

    //slide forward
    function slide(){
        if(counter >= employeeImages.length - 1) return;
            employeeShow.style.transition = 'transform 0.5s ease-in-out';
            counter++;
            employeeShow.style.transform = 'translateX(' + (-size * counter) + 'px';
    }

    setInterval('slide()', 4000)

    employeeShow.addEventListener('transitionend', () => {
        if(employeeImages[counter].id === 'lastclone'){
            employeeShow.style.transition = 'none'; 
            counter = employeeImages.length - 2;
            employeeShow.style.transform = 'translateX(' + (-size * counter) + 'px';
        }

        if(employeeImages[counter].id === 'firstclone'){
            employeeShow.style.transition = 'none'; 
            counter = employeeImages.length - counter;
            employeeShow.style.transform = 'translateX(' + (-size * counter) + 'px';
        }
    })

   

$(() => {

$('.read-more').click(e => {
e.preventDefault();
$('#about_us').toggleClass('shift')
})

    // read more

    $('.read1').click((e) => {
      e.preventDefault();
        $('.more1').slideToggle();
        $('.read').slideToggle();
        $('.hide').slideToggle();
    })

    // form validation and sending of mail to the server

    $('#form').submit((e) => {
        e.preventDefault();
        if($('#name').val() == '' || $('#email').val() == '' || $('#msg').val() == ''){
            $('.query').html('<p>fill in the inputs correctly<span id="x">&times;</span></p>')
        }
        else if(document.getElementById('msg').value.length < 50){
            $('.query').html('<p>Message must be at least 20 characters<span id="x">&times;</span></p>')
        }
        else{
            var name = $('#name').val();
            var email = $('#email').val();
            var msg = $('#msg').val();

            //ajax request to backend

            $.ajax(
                {
                    url: "backend/process.php",
                    method: 'POST',
                    data: {
                        name: name,
                        email: email,
                        msg: msg
                    },
                    success: (response) => {
                    $('.query').html(`<p>${response}<span id="x">&times;</span></p>`);
                    console.log(response)
                    },
                    error: (e) => {
                        console.log(e.statusText)
                    }
                }
            )

            setTimeout(() => {
                $('.query').html('');
            }, 5000)
        }
    })

    //smooth scroll

    $('.navi a').on('click', function(event) {
        if (this.hash !== '') {
            event.preventDefault();

            const hash = this.hash;

            $('html, body').animate(
                {
                    scrollTop: $(hash).offset().top
                },
                800,
                function() {
                    window.location.hash = hash;
                }
            );
        }
    });

    $('.side-nav a').on('click', function(event) {
        if (this.hash !== '') {
            event.preventDefault();

            const hash = this.hash;

            $('html, body').animate(
                {
                    scrollTop: $(hash).offset().top
                },
                800,
                function() {
                    window.location.hash = hash;
                }
            );
        }
    });


    //modal window click close vaidtion
    $(window).on('click', (e) => {
        if(e.target.id == ''){
            $('#side-menu').css("width", 0);
        }
    })
})
