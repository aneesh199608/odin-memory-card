import Card from "./Card";
import './CardGrid.css';

function CardGrid({ cards, onCardClick }) {
  return (
    <div className="card-grid nes-container is-rounded">
      <div className="grid">
        {cards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            name={card.name}
            image={card.image}
            onClick={() => onCardClick(card.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default CardGrid;
