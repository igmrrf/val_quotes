export const backupQuotes = [
  (name: string) => `Dear ${name}, your love is like a masterpiece that gets more beautiful with each passing day. Every moment spent with you adds another stroke of brilliance to the canvas of our life together.`,
  
  (name: string) => `${name}, in the garden of love, you are my most cherished flower, blooming eternally in my heart.`,
  
  (name: string) => `My beloved ${name}, time stands still when I'm with you, yet somehow flies by too fast. Your smile is my morning light, your laugh is my favorite melody, and your love is the story I never want to end.`,
  
  (name: string) => `${name}, your smile lights up my world brighter than all the stars in the night sky.`,
  
  (name: string) => `To my dearest ${name}, like a lighthouse guiding ships through stormy seas, your love guides me home. Every day with you is an adventure I cherish, every moment a treasure I hold dear.`,
  
  (name: string) => `${name}, my heart found its rhythm when it first beat alongside yours. In the symphony of life, you're my favorite melody.`,
  
  (name: string) => `Dearest ${name}, in a world of uncertainty, your love is my constant. Each morning brings new reasons to fall in love with you all over again, and each evening ends with gratitude for having you in my life.`,
  
  (name: string) => `${name}, you're the missing piece that makes my world complete. Every day with you feels like Valentine's Day.`,
  
  (name: string) => `My precious ${name}, our love story is written in the stars, painted in the sunsets, and echoes in every beat of my heart. You're not just my Valentine; you're my every day's blessing.`,
  
  (name: string) => `${name}, with you, even ordinary moments become extraordinary memories. You're the poetry in my prose, the color in my world.`
];

export const getRandomBackupQuote = (name: string) => {
  const randomIndex = Math.floor(Math.random() * backupQuotes.length);
  return backupQuotes[randomIndex](name);
};