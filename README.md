# Individuell inlämningsuppgift - React Bulletin Board
 <br>

Beskrivning: Du ska bygga en anslagstavla med inlägg om React. Du ska skapa upp tre komponenter: **BulletinBoard**, **ReactPost** och **PostLiked**. Använda er utav det vi gått igenom på lektionerna (state, props, conditional rendering etc).
 <br>
 <br>
 <br>


**BulletinBoard**-komponenten ska fungera lite som ett FAQ, och ska ligga i App.js.

  Den ska fungera på följande vis:

  - Här ska det finnas en array av objekt, där varje objekt innehåller en fråga (se listan av frågor nedan) och ett svar. Se exempel nedan:
  ```
    {
      question:”Vad är tre fördelar med att använda React?”,
      answer: “Lorem ipsum...”
    }
  ```
  - För varje objekt, rendera en ReactPost-komponent.
 <br>


**ReactPost**-komponenten ska se ut på följande vis:
  - Komponenten ska skriva ut en fråga samt svaret på frågan.
  - Komponenten ska ha en knapp för att kunna gilla inlägget.
  - OM användaren har gett inlägget en like, rendera PostLiked-komponenten och dölj like-knappen.


**PostLiked** ska vara en text som lyder “You have liked this post!”
<br>
<br>


**Frågorna som ska besvaras på anslagstavlan är följande:**
  - Vad är tre fördelar med att använda React?
  - Vad betyder Single Page Application och vad skiljer det från en “vanlig” webbplats?
  - Nämn tre skillnader mellan React och Angular.
  <br>


**Kriterier för godkänt:**
  - Du ska ha uppfyllt ovanstående krav och svarat på samtliga frågor (minst 3-4 meningar per fråga).
  - Du ska ha använda dig utav minst 1 conditional operator - ternary eller short-circuit (dvs &&) för att rendera en komponent.
  <br>
  <br>


Inlämningsuppgiften kan laddas upp på Pingpong som en .zip-fil eller som en länk till ett Github-repo där ni laddat upp den. OBS! Radera node_modules i projektet om ni komprimerar den till en .zip. Namnge den sedan "Förnamn_Efternamn Inlämningsuppgift 1"
Senaste inlämningsdatum: 26/1/22
<br>
<br>
<br>



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
