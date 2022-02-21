writeRandomQuote = function () {
    var quotes = new Array();
    quotes[0] = "Nobody wants to get up at 4 in the morning and go for a run when it's still completely dark, but it's necessary. The only reason I'm doing it so early is because I believe no one else is doing it. And that gives me a little advantage. Mike Tyson.";
    quotes[1] = "When it's hard for me, I always remind myself that if I give up, it won't get better. Mike Tyson.";
    quotes[2] = "Whatever your goal is, you can achieve it if you only want to work hard. Muhammad Ali.";
    quotes[3] = "Train today to be the first tomorrow. Roy Jones.";
    quotes[4] = "Winning doesn't make you stronger. Strength is formed in struggle. When, overcoming difficulties, you decide not to give up, then you show strength. A. Schwarzenegger.";
    quotes[5] = "Feeling sorry for yourself in training, you will get a miserable result! A. Schwarzenegger";
    quotes[6] = "Thousands and thousands of times I have restored health to my sick through exercise. Galen.";
    quotes[7] = "I have no desire to prove something to anyone, I prove to myself that I can become even better and even stronger with every workout! Dwayne Johnson.";
    quotes[8] = "Bodybuilding is the way of the warrior because you constantly have to fight with yourself. A. Schwarzenegger.";
    var rand = Math.floor(Math.random()*quotes.length);
    document.write(quotes[rand]);
  }
  writeRandomQuote();

var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,3000);

function nextSlide(){
  slides[currentSlide].className = 'slide';
  currentSlide = (currentSlide+1)%slides.length;
  slides[currentSlide].className = 'slide showing';
}

pauseButton.onclick = function(){
  if(playing){ pauseSlideshow(); }
  else{ playSlideshow(); }
};



