import { useState } from 'react'
import { Header } from '../Header/Header';
import { MainScreen } from '../Main-Screen/Main-screen';
import { Statistics } from '../Statistics/Statistics';
import { QuestionsCards } from '../Questions-cards/Questions-cards';
import { Instructor } from '../Instructor/Instructor';
import { Coments } from '../Coments/Coments';
import { ResponsCards } from '../Respons-cards/Respons-cards';
import { HotDeals } from '../Hot-deals/Hot-deals';
import { Footer } from '../Footer/Footer';

function App() {
  const [bodyActive, setBodyActive] = useState(false);

  function handleToggleBody(value) {
    setBodyActive(value);
  }

  return (
    <div className="App">
      <body className={bodyActive ? 'body_active' : null}>
        <Header onToggleBody={handleToggleBody} />
        <MainScreen/>
        <Statistics/>
        <QuestionsCards/>
        <Instructor/>
        <Coments/>
        <ResponsCards/>
        <HotDeals/>
        <Footer/>
      </body>
    </div>
  );
}

export default App;
