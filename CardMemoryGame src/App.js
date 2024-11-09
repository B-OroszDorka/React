import './App.css';
import './CustomCss.css';
import Card from './Components/Card';
import { useState } from 'react';
import cardBack from './cards/card-back1.png';
import cardHeart from './cards/card-hearts-1.png';
import cardSpades from './cards/card-spades-1.png';
import cardDiamond from './cards/card-diamonds-1.png';
import cardClub from './cards/card-clubs-1.png';

function App() {
  const cardImages = [cardHeart, cardSpades, cardDiamond, cardClub];

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((image, index) => ({ id: index, image, flipped: false, matched: false }));

    return shuffledCards;
  };

  const [cards, setCards] = useState(shuffleCards()); 
  const [flippedCards, setFlippedCards] = useState([]);

  const handleTurnCard = (index) => {
    if (flippedCards.length === 2 || cards[index].flipped || cards[index].matched) return;

    const newCards = cards.map((card, i) => (i === index ? { ...card, flipped: true } : card));

    setCards(newCards);
    setFlippedCards((prev) => [...prev, index]);

    if (flippedCards.length === 1) {
      checkForMatch(index, flippedCards[0], newCards);
    }
  };

  const checkForMatch = (firstIndex, secondIndex, newCards) => {
    setTimeout(() => {
      const firstCard = newCards[firstIndex];
      const secondCard = newCards[secondIndex];

      if (firstCard.image === secondCard.image) {
        setCards((prevCards) =>
          prevCards.map((card) =>
            card.image === firstCard.image ? { ...card, matched: true } : card
          )
        );
      } else {
        setCards((prevCards) =>
          prevCards.map((card, i) =>
            i === firstIndex || i === secondIndex ? { ...card, flipped: false } : card
          )
        );
      }

      setFlippedCards([]);
    }, 1000);
  };

  const handleShuffle = () => {
    setCards(shuffleCards());
    setFlippedCards([]);
  };

  return (
    <div>
      <button onClick={handleShuffle} className="button">
        Shuffle Cards
      </button>
      <div className="card-grid">
        {cards.map((card, index) => (
          <Card
            key={index}
            cardSrc={card.flipped || card.matched ? card.image : cardBack}
            turnCard={() => handleTurnCard(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
