


var quoteElement = document.getElementById("newQuote");

var quotesList = [
  { quote: "Beware of what you become in pursuit of what you want. ", author: "Jim Rohn"  },
  { quote: "It\'s not what happens to you, but how you react to it that matters.", author: "Epictetus" },
  { author: 'Frank Sinatra', quote: 'The best revenge is massive success.' },
  { author: 'Omar Khaled', quote: 'You miss 100% of the shots you don\'t take.' },
  { author: 'Nelson Mandela', quote: 'Resentment is like drinking poison and waiting for your enemies to die.' },
  { author: "Dr. Seuss", quote: "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”"},
  { quote: "Always forgive your enemies; nothing annoys them so much ", author: "Oscar Wilde" },
  { quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.", author: "― Mahatma Gandhi" },
  

]





function displayQuote(){

   var randomIndex=  Math.floor(Math.random() * quotesList.length) + 1;

   var randomQuote = quotesList[randomIndex];
   quoteElement.innerHTML = '<p>"' + randomQuote.quote + '<p>' + randomQuote.author + '</p>';
}


displayQuote()












