'use client';

import { useEffect, useState } from 'react';
import { Card } from '../types/card';
import { loadCardData } from '../lib/cardData';

export default function CardGrid() {
  const [cards, setCards] = useState<Card[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCards() {
      try {
        const data = await loadCardData();
        setCards(data);
      } catch (err) {
        setError('Failed to load cards');
        console.error('Error loading cards:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchCards();
  }, []);

  if (loading) return <div>Loading cards...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {cards.map((card) => (
        <div 
          key={card.unique_id}
          className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
        >
          <h3 className="font-bold mb-2">{card.name}</h3>
          <div className="text-sm text-gray-600 space-y-1">
            <p>Types: {card.types.join(', ')}</p>
            {card.pitch && <p>Pitch: {card.pitch}</p>}
            {card.cost && <p>Cost: {card.cost}</p>}
            {card.power && <p>Power: {card.power}</p>}
            {card.defense && <p>Defense: {card.defense}</p>}
            {card.card_keywords.length > 0 && (
              <p>Keywords: {card.card_keywords.join(', ')}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
} 