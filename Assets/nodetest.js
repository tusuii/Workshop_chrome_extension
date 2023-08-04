const quotes = [
    {
      "quote": "Success is not final, failure is not fatal: It is the courage to continue that counts."
    },
    {
      "quote": "The only way to do great work is to love what you do."
    },
    {
      "quote": "In the end, we will remember not the words of our enemies, but the silence of our friends."
    }
  ]

  function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
  
    console.log('Quote:', randomQuote.quote);

  }

displayRandomQuote();
  