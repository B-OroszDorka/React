function Card({ cardSrc, turnCard }) {
    return (
      <img 
        src={cardSrc} 
        alt='card' 
        onClick={turnCard}
        style={{ cursor: 'pointer' }}
      />
    );
  }
  
  export default Card;
