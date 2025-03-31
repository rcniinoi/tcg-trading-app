import { Card } from '../types/card';

export async function loadCardData(): Promise<Card[]> {
  try {
    const response = await fetch('/data/card.json');
    if (!response.ok) {
      throw new Error('Failed to load card data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error loading card data:', error);
    return [];
  }
}

// Helper function to get a sample of cards for testing
export async function getSampleCards(count: number = 5): Promise<Card[]> {
  const cards = await loadCardData();
  return cards.slice(0, count);
} 