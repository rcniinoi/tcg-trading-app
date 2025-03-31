export interface Card {
  unique_id: string;
  name: string;
  pitch?: string;
  cost?: string;
  power?: string;
  defense?: string;
  health?: string;
  intelligence?: string;
  arcane?: string;
  types: string[];
  card_keywords: string[];
  abilities_and_effects: string[];
} 