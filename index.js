const QUOTES = [
    {
        quote: "\"The unexamined life is not worth living\"",
        author: "Socrates"
    },
    {
        quote: "\"I think therefore I am\"",
        author: "Descartes"
    },
    {
        quote: "\"He who thinks great thoughts, often makes great errors\"",
        author: "Martin Heidegger"
    },
    {
        quote: "\"God is dead! He remains dead! And we have killed him.\"",
        author: "Friedrich Nietzsche"
    },
    {
        quote: "\"Happiness is not an ideal of reason but of imagination\"",
        author: "Immanuel Kant"
    },
    {
        quote: "\"If God did not exist, it would be necessary to invent Him\"",
        author: "Voltaire"
    },
    {
        quote: "\"We are what we repeatedly do. Excellence, then, is not an act, but a habit\"",
        author: "Aristotle"
    },
    {
        quote: "He who is unable to live in society, or who has no need because he is sufficient for himself, must be either a beast or a god",
        author: "Aristotle"
    },
    {
        quote: "You talk when you cease to be at peace with your thoughts.",
        author: "Kahlil Gibran"
    },
    {
        quote: "Man is the only creature who refuses to be what he is.",
        author: "Albert Camus"
    }
]

window.onload = init;

const generateQuote = () => {
    let quotesSize = QUOTES.length;
    let randomIndex = Math.floor(Math.random() * quotesSize);
    let randomQuoteData = QUOTES[randomIndex];


    let twitterLink = "https://twitter.com/intent/tweet?hashtags=quotes&text=";
    // add the text
    let quoteInApiFormat = randomQuoteData.quote.replace(/ /g, "%20");
    twitterLink += quoteInApiFormat;
    // add the author
    let authorInApiFormat = randomQuoteData.author.replace(/ /g, "%20")

    twitterLink +=  "%20%20-" + authorInApiFormat;

    document.getElementById('text').innerText = randomQuoteData.quote;
    document.getElementById('author').innerText = randomQuoteData.author;
    document.getElementById('tweet-quote').href = twitterLink;
}

function init() {
    generateQuote();
}