let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('La Capital del Sol')
  .pauseFor(200)
  .deleteChars(10)
  .start();

   const slides = document.querySelector('.slides');
        const slide = document.querySelectorAll('.slide');
        const prev = document.getElementById('prev');
        const next = document.getElementById('next');
        let index = 0;

        function showSlide(n) {
            if (n >= slide.length) index = 0;
            if (n < 0) index = slide.length - 1;
            slides.style.transform = `translateX(${-index * 100}%)`;
        }

        prev.addEventListener('click', () => {
            index--;
            showSlide(index);
        });

        next.addEventListener('click', () => {
            index++;
            showSlide(index);
        });

        // Initialize the first slide
        showSlide(index);