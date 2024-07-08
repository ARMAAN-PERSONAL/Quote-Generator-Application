// app.js

// Array of quotes
const quotes = [
    { text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
    { text: "Success is not how high you have climbed, but how you make a positive difference to the world.", author: "Roy T. Bennett" },
    { text: "In the middle of difficulty lies opportunity.", author: "Albert Einstein" },
    { text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson" },
    { text: "You must be the change you wish to see in the world.", author: "Mahatma Gandhi" },
    { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { text: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.", author: "Buddha" },
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "It is never too late to be what you might have been.", author: "George Eliot" },
    { text: "The journey of a thousand miles begins with one step.", author: "Lao Tzu" },
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
    { text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", author: "Ralph Waldo Emerson" },
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { text: "The only impossible journey is the one you never begin.", author: "Tony Robbins" },
    { text: "Act as if what you do makes a difference. It does.", author: "William James" },
    { text: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
    { text: "Do not go where the path may lead, go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson" },
    { text: "Everything you’ve ever wanted is on the other side of fear.", author: "George Addair" },
    { text: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
    { text: "You can't use up creativity. The more you use, the more you have.", author: "Maya Angelou" },
    { text: "Everything has beauty, but not everyone sees it.", author: "Confucius" },
    { text: "Opportunities don't happen. You create them.", author: "Chris Grosser" },
    { text: "Do one thing every day that scares you.", author: "Eleanor Roosevelt" },
    { text: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. Lewis" },
    { text: "What we think, we become.", author: "Buddha" },
    { text: "It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change.", author: "Charles Darwin" },
    { text: "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.", author: "Ralph Waldo Emerson" },
    { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
    { text: "A person who never made a mistake never tried anything new.", author: "Albert Einstein" },
    { text: "The only way to achieve the impossible is to believe it is possible.", author: "Charles Kingsleigh" },
    { text: "Don't be afraid to give up the good to go for the great.", author: "John D. Rockefeller" },
    { text: "The secret of getting ahead is getting started.", author: "Mark Twain" },
    { text: "Do not let what you cannot do interfere with what you can do.", author: "John Wooden" },
    { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
    { text: "Whether you think you can or you think you can’t, you’re right.", author: "Henry Ford" },
    { text: "Our lives begin to end the day we become silent about things that matter.", author: "Martin Luther King Jr." },
    { text: "Great minds discuss ideas; average minds discuss events; small minds discuss people.", author: "Eleanor Roosevelt" },
    { text: "The best revenge is massive success.", author: "Frank Sinatra" },
    { text: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs" },
    { text: "Don't count the days, make the days count.", author: "Muhammad Ali" },
    { text: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
    { text: "To handle yourself, use your head; to handle others, use your heart.", author: "Eleanor Roosevelt" },
    { text: "You are enough just as you are.", author: "Meghan Markle" },
    { text: "Happiness is not something ready made. It comes from your own actions.", author: "Dalai Lama" },
    { text: "To succeed in life, you need two things: ignorance and confidence.", author: "Mark Twain" },
    { text: "Success is walking from failure to failure with no loss of enthusiasm.", author: "Winston Churchill" },
    { text: "The biggest risk is not taking any risk.", author: "Mark Zuckerberg" },
    { text: "If you want to lift yourself up, lift up someone else.", author: "Booker T. Washington" }
  ];
  
  
  // Select HTML elements
  const quoteText = document.getElementById('quote');
  const quoteAuthor = document.getElementById('author');
  const newQuoteButton = document.getElementById('new-quote');
  
  // Function to display a new quote
  function displayNewQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    quoteText.textContent = `"${quote.text}"`;
    quoteAuthor.textContent = `- ${quote.author}`;
  }
  
  // Event listener for the new quote button
  newQuoteButton.addEventListener('click', displayNewQuote);
  
  // Display a quote when the page loads
  displayNewQuote();
  