let quote=[
    {'quote':"'Be yourself; everyone else is already taken.'",'Auther':"-- Oscar Wilde"},
    {'quote':"'It's not what happens to you, but how you react to it that matters.'",'Auther':"--Epictetus"},
    {'quote':"'The best revenge is massive success.'",'Auther':"--Frank Sinatra"},
    {'quote':"'Do not take life too seriously. You will not get out alive.'",'Auther':"--Elbert Hubbard"},
    {'quote':"'You miss 100% of the shots you don't take.'",'Auther':"--Wayne Gretzy"},
    {'quote':"'Resentment is like drinking poison and waiting for your enemies to die'",'Auther':"--Nelson Mandela"},
    {'quote':"'So many books, so little time.'",'Auther':"―- Frank Zappa"},
    {'quote':"'Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.'",'Auther':"―- Albert Einstein"},
    {'quote':"'A room without books is like a body without a soul.'",'Auther':"― Marcus Tullius Cicero"},
    {'quote':"'Be yourself; everyone else is already taken.'",'Auther':"― Oscar Wilde"}
    
]
function getMyQuotes(){
    let num=Math.floor(Math.random()*quote.length);
    document.getElementById("quote").innerHTML=quote[num].quote;
    document.getElementById("auther").innerHTML=quote[num].Auther;

}