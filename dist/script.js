// Source: https://github.com/lukePeavey/quotable
const API_URL = 'https://api.quotable.io/random'; 
const API_KEY = ''; 

// Default quotes in case the API fails
const defaultQuotes = [
  { 
    author: 'Anton Chekhov', 
    text: 'Doctors are just the same as lawyers; the only difference is that lawyers merely rob you, whereas doctors rob you and kill you too.', 
    category: 'funny-quotes'
  },
  { 
    author: 'Arthur C. Clarke', 
    text: 'I don’t believe in astrology; I’m a Sagittarius and we’re skeptical.', 
    category: 'funny-quotes'
  },
  { 
    author: 'Ashleigh Brilliant', 
    text: 'My opinions may have changed, but not the fact that I’m right.', 
    category: 'funny-quotes'
  },        
  { 
    author: 'Benjamin Franklin', 
    text: 'Wine is constant proof that God loves us and loves to see us happy.', 
    category: 'funny-quotes'
  },        
  { 
    author: 'Benny Hill', 
    text: 'Have you noticed that all the people in favor of birth control are already born?', 
    category: 'funny-quotes'
  },
  { 
    author: 'Bernard Baruch', 
    text: 'Be who you are and say what you feel, because those who mind don’t matter and those who matter don’t mind.', 
    category: 'funny-quotes'
  },
  { 
    author: 'Bertrand Russell', 
    text: 'The world is full of magical things patiently waiting for our wits to grow sharper.', 
    category: 'funny-quotes'
  },
  { 
    author: 'Billy Wilder', 
    text: 'If you’re going to tell people the truth, be funny or they’ll kill you.', 
    category: 'funny-quotes'
  }
];

// Source: https://observablehq.com/@d3/color-schemes
const turboColorScheme = [
  /*"#23171b", "#271a28", "#2b1c33", "#2f1e3f", "#32204a", "#362354", "#39255f", "#3b2768", "#3e2a72", */
  "#402c7b", "#422f83", "#44318b", "#453493", "#46369b", "#4839a2", "#493ca8", "#493eaf", "#4a41b5", "#4a44bb", "#4b46c0", "#4b49c5", "#4b4cca", "#4b4ecf", "#4b51d3", "#4a54d7", "#4a56db", "#4959de", "#495ce2", "#485fe5", "#4761e7", "#4664ea", "#4567ec", "#446aee", "#446df0", "#426ff2", "#4172f3", "#4075f5", "#3f78f6", "#3e7af7", "#3d7df7", "#3c80f8", "#3a83f9", "#3985f9", "#3888f9", "#378bf9", "#368df9", "#3590f8", "#3393f8", "#3295f7", "#3198f7", "#309bf6", "#2f9df5", "#2ea0f4", "#2da2f3", "#2ca5f1", "#2ba7f0", "#2aaaef", "#2aaced", "#29afec", "#28b1ea", "#28b4e8", "#27b6e6", "#27b8e5", "#26bbe3", "#26bde1", "#26bfdf", "#25c1dc", "#25c3da", "#25c6d8", "#25c8d6", "#25cad3", "#25ccd1", "#25cecf", "#26d0cc", "#26d2ca", "#26d4c8", "#27d6c5", "#27d8c3", "#28d9c0", "#29dbbe", "#29ddbb", "#2adfb8", "#2be0b6", "#2ce2b3", "#2de3b1", "#2ee5ae", "#30e6ac", "#31e8a9", "#32e9a6", "#34eba4", "#35eca1", "#37ed9f", "#39ef9c", "#3af09a", "#3cf197", "#3ef295", "#40f392", "#42f490", "#44f58d", "#46f68b", "#48f788", "#4af786", "#4df884", "#4ff981", "#51fa7f", "#54fa7d", "#56fb7a", "#59fb78", "#5cfc76", "#5efc74", "#61fd71", "#64fd6f", "#66fd6d", "#69fd6b", "#6cfd69", "#6ffe67", "#72fe65", "#75fe63", "#78fe61", "#7bfe5f", "#7efd5d", "#81fd5c", "#84fd5a", "#87fd58", "#8afc56", "#8dfc55", "#90fb53", "#93fb51", "#96fa50", "#99fa4e", "#9cf94d", "#9ff84b", "#a2f84a", "#a6f748", "#a9f647", "#acf546", "#aff444", "#b2f343", "#b5f242", "#b8f141", "#bbf03f", "#beef3e", "#c1ed3d", "#c3ec3c", "#c6eb3b", "#c9e93a", "#cce839", "#cfe738", "#d1e537", "#d4e336", "#d7e235", "#d9e034", "#dcdf33", "#dedd32", "#e0db32", "#e3d931", "#e5d730", "#e7d52f", "#e9d42f", "#ecd22e", "#eed02d", "#f0ce2c", "#f1cb2c", "#f3c92b", "#f5c72b", "#f7c52a", "#f8c329", "#fac029", "#fbbe28", "#fdbc28", "#feb927", "#ffb727", "#ffb526", "#ffb226", "#ffb025", "#ffad25", "#ffab24", "#ffa824", "#ffa623", "#ffa323", "#ffa022", "#ff9e22", "#ff9b21", "#ff9921", "#ff9621", "#ff9320", "#ff9020", "#ff8e1f", "#ff8b1f", "#ff881e", "#ff851e", "#ff831d", "#ff801d", "#ff7d1d", "#ff7a1c", "#ff781c", "#ff751b", "#ff721b", "#ff6f1a", "#fd6c1a", "#fc6a19", "#fa6719", "#f96418", "#f76118", "#f65f18", "#f45c17", "#f25916", "#f05716", "#ee5415", "#ec5115", "#ea4f14", "#e84c14", "#e64913", "#e44713", "#e24412", "#df4212", "#dd3f11", "#da3d10", "#d83a10", "#d5380f", "#d3360f", "#d0330e", "#ce310d", "#cb2f0d", "#c92d0c", "#c62a0b", "#c3280b", "#c1260a", "#be2409", "#bb2309", "#b92108", "#b61f07", "#b41d07", "#b11b06", "#af1a05", "#ac1805", "#aa1704", "#a81604", "#a51403", "#a31302", "#a11202" 
  /*"#9f1101", "#9d1000", "#9b0f00", "#9a0e00", "#980e00", "#960d00", "#950c00", "#940c00", "#930c00", "#920c00", "#910b00", "#910c00", "#900c00", "#900c00", "#900c00"*/
  ];

const setQuoteInfo = (quote) => {
  $('#author').text(quote.author);
  $('#text').text(quote.text);
  $('#category').text(quote.category.toUpperCase());
  $('#tweet-quote').attr('href', 
    'https://twitter.com/intent/tweet?' +
    'hashtags=quotes&related=freecodecamp&text=' +
     encodeURI('"'+`${quote.text} (${quote.author})`+'"')
  );
}

const applyChanges = (quote) => {
  //const theme = getRandomItem(themes);
  const color = getRandomItem(turboColorScheme);

  // Quote info

  const quoteAnimation = $(".quote-animation");
  // Note: Prevent fast clicks
  if (quoteAnimation.is(':animated')) { return false; } 

  quoteAnimation.animate(
    {opacity: 0}, 
    500, 
    function() {
      setQuoteInfo(quote);
      $(this).animate(
        {opacity: 1}, 500
      );
    }
  );   
    
  // Theme: animation

  // Jquery animate doesn't work with gradients backgrounds. 
  // We use a background div container to hack the transition.

  const root = $(':root');
  const body = $('body');
  const bgItem = $('.background');

  // prevent fast clicks
  if (bgItem.is(':animated')) { return false; } 

  root.css('--main-bg-color', color);
  
  bgItem.stop(true).animate( 
    {opacity: 0}, 
    500, 
    function () {
      bgItem.css('background', body.css('background')); 
      $('.quote-text').css('color', color);
      $('.button').hover( 
        function() {$(this).css('color', color);}, 
        function() {$(this).css('color', body.css('color'));}
      );
      // force color if hovered
      if ($('#new-quote:hover').length != 0) {
        $('#new-quote').mouseenter(); 
      }        
      $(this).animate(
        {opacity: 1}, 500
      );        
    }
  );
}

const getNewQuote = () => {
  let quote = {}
  $.ajax({
    url: API_URL + '?key=' + API_KEY,
    type: 'GET',
    contentType: 'application/json',
    dataType: 'json',
    success: function (data) {
      quote = {
        author: data.author, 
        text: data.content,
        category: (!Array.isArray(data.tags)
          ? data.tags
          : data.tags[0])
      }
    },
    error: function (data) {
      quote = getRandomItem(defaultQuotes);
    },
    complete: function (data) {
      applyChanges(quote);      
    },
  });
}

// Helper functions

const getRandomItem = (myArr) => {
  const i = Math.floor(Math.random() * myArr.length);
  return myArr[i];
};

// Ready

$(document).ready(function() {
  $('#new-quote').on('click', function() {
    getNewQuote();
  });
  getNewQuote();
});