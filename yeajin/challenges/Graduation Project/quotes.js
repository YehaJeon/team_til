const quotes=[
  { 
      quote:"너는 마음을 다하여 여호와를 의뢰하고 네 명철을 의지하지 말라"
      ,author:"(잠언 3:5)"
  },
  {
      quote:"마땅히 행할 길을 아이에게 가르치라 그리하면 늙어도 그것을 떠나지 아니하리라"
      ,author:"(잠언 22:6)"
      
      },
  {
      quote:"여호와를 경외하는 것이 지식의 근본이어늘 미련한 자는 지혜와 훈계를 멸시하느니라"
      ,author:"(잠언 1:7)"
      },
  {
      quote:"자기의 죄를 숨기는 자는 형통치 못하나 죄를 자복하고 버리는 자는 불쌍히 여김을 받으리라"
      ,author:"(잠언 28:1)3"
      },
  {
      quote:"너의 행사를 여호와께 맡기라 그리하면 너의 경영하는 것이 이루리라"
      ,author:"(잠언 16:3)"
      },
  {
      quote:"무릇 지킬만한 것보다 더욱 네 마음을 지키라 생명의 근원이 이에서 남이니라"
      ,author:"(잠언 4:23)"    },
  {
      quote:"하나님의 말씀은 다 순전하며 하나님은 그를 의지하는 자의 방패시니라"
      ,author:" (잠언 30:5)"    },
  {
      quote:"철이 철을 날카롭게 하는 것 같이 사람이 그 친구의 얼굴을 빛나게 하느니라"
      ,author:"(잠언 27:1)7"
      },
  {
      quote:"묵시가 없으면 백성이 방자히 행하거니와 율법을 지키는 자는 복이 있느니라"
      ,author:"(잠언 29:1)8"
  },
  {
  quote:"대저 그 마음의 생각이 어떠하면 그 위인도 그러한즉 그가 너더러 먹고 마시라 할지라도 그 마음은 너와 함께하지 아니함이라"
  ,author:"(잠언 23:7)"
},
]

const quote= document.querySelector("#quote span:first-child");
const author= document.querySelector("#quote span:last-child");
const todaysQuote=quotes[Math.floor(Math.random()*quotes.length)];
quote.innerText=todaysQuote.quote;
author.innerText=todaysQuote.author;