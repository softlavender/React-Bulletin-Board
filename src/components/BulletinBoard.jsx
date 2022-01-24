import ReactPost from "./ReactPost"

export default function BulletinBoard() {
  const FAQ = [
    {
      question: 'Vad är tre fördelar med att använda React?',
      answer: `
        Bortsett från att React inte kommer försvinna då biblioteket är skapat och underhålls av Facebook, så
        kan det va enklare att bygga upp webbsidor i React till skillnad från att göra det i ren Javascript. 
        Med React blir det lättare att hålla reda på en viss kod, i en komponent än om samma kod skulle
        vara i en stor fil med massa annat Javascript funktionalitet.
        Då komponent oftast lever i sina egna filer blir det då lättare för utvecklare att göra ändraingr i UIn
        samt att skala på ett projekt.
        React sköter också renderingen av en applikation på ett mycket effektivare sätt där enbart rörda delar
        ändras med hjälp av Vituel DOM.
      `
    },
    {
      question: 'Vad betyder Single Page Application och vad skiljer det från en “vanlig” webbplats?',
      answer: `
        Med en Single Page Application uppdatera berörda delar på en webbapplikation dynamiskt med den senaste datan medans
        på en vanlig webbapplikation så får hela sidan laddas om då någonting uppdateras på den.
        
        Bygger man webbapplikationer med den traditionella metoden så sker nästan all logik på en server. Applikation 
        byggda med SPA metoden så sker mesta logiken i användarens webbläsare.
      `
    },
    {
      question: 'Nämn tre skillnader mellan React och Angular.',
      answer: `
        react är ett bibliotek och angular är ett ramverk :D

        react använder sig utav "Virtual DOM" för att göra de ändringar som behövs i en webbapplikation.
        Angular använder dock en annan mekanik för Change Detection och gör ändringar direkt i DOMen.
      `
    },
  ]

  return (
    FAQ.map(q => <ReactPost q={q}/>)
  )
}
