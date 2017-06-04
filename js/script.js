// fade an element from the current state to full opacity in "duration" ms
function fadeOut(el, duration) {
    var s = el.style, step = 25/(duration || 300);
    s.opacity = s.opacity || 1;
    (function fade() { (s.opacity -= step) < 0 ? s.display = "none" : setTimeout(fade, 25); })();
}

// fade out an element from the current state to full transparency in "duration" ms
// display is the display style the element is assigned after the animation is done
function fadeIn(el, duration, display) {
    var s = el.style, step = 25/(duration || 300);
    s.opacity = s.opacity || 0;
    s.display = display || "block";
    (function fade() { (s.opacity = parseFloat(s.opacity)+step) > 1 ? s.opacity = 1 : setTimeout(fade, 25); })();
}
// define a callback function, which accepts the returned JSON data as its only argument
function response(data) {
    // JSON data in form of a JavaScript object
    const quoteText = data[0].text;
    const quotation = data[0].bookname +' ' + data[0].chapter + ':' + data[0].verse;
    const quoteContent = document.querySelector('.quote-text');
    const quoteFrom = document.querySelector('.quote-from');
//    const quote = document.querySelector('.quote');
    quoteContent.innerHTML = quoteText;
    quoteFrom.innerHTML = quotation;
//    console.log(data[0].text);
}

// create a script tag with the external request URL
// include "response" as value of the GET param "callback" in the URL
function getBibleQuote(){
    var script = document.createElement('script');
    script.src = 'http://labs.bible.org/api/?passage=random&type=json&callback=response';
    document.body.appendChild(script);
    document.body.removeChild(script); // Remove immediately to avoid build up of several script lines in the DOM
    
}

var newQuoteBtn = document.querySelector('.button');
newQuoteBtn.addEventListener('click', getBibleQuote);
