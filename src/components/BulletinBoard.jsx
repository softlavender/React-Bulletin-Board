import ReactPost from "./ReactPost"

export default function BulletinBoard() {
  const FAQ = [
    {
      question: 'Vad är tre fördelar med att använda React?',
      answer: [
        `Bortsett från att React inte kommer försvinna på ett tag då biblioteket är
         skapat och underhålls av Facebook, ska det va enklare att bygga upp
         webbapplikationer i React till skillnad från att göra det i ren Javascript.`,

        `Med React blir det lättare att hålla reda på en viss kod, i en komponent
         än om samma kod skulle vara i en stor fil mera Javascript funktionalitet.
         Då komponenter oftast lever i sina egna filer blir det då lättare för
         utvecklare att göra ändraingr i UIn samt att skala på ett projekt.`,
        
        `React sköter också renderingen av en applikation på ett mycket
         effektivare sätt där enbart rörda delar ändras med hjälp av Vituel DOM.`
      ]
    },
    {
      question: 'Vad betyder Single Page Application och vad skiljer det från en “vanlig” webbplats?',
      answer: [
        `Med en Single Page Application uppdatera berörda delar på en webbapplikation
         dynamiskt med den senaste datan medans på en vanlig webbapplikation så får
         hela sidan laddas om då någonting uppdateras på den.`,

        `Bygger man webbapplikationer med den traditionella metoden så sker nästan
         all logik på en server. Applikation byggda med SPA metoden så sker mesta
         logiken i användarens webbläsare.`
      ]
    },
    {
      question: 'Nämn tre skillnader mellan React och Angular.',
      answer: [
        `React är ett bibliotek och angular är ett ramverk.`,

        `Angular är baserat på Typescript och React på Javascript.`,

        `Angular är ett fullutrustad och självständigt ramverk där man får all verktyg
         som behövs för utveckling dock så får man mindre flexibilitet och frihet. Med
         React få man inte mycket inbyggt men man får mycket frihet att lägga till det
         som behövs för att bygga applikationer`
      ]
    },
  ]
  return (
    FAQ.map((q, i) => <ReactPost key={i} q={q}/>)
  )
}
