'use client';
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState('');
  const [quote, setQuote] = useState('');

  const generateQuote = (e: React.FormEvent) => {
    e.preventDefault();
    const quotes = [
      `Dear ${name}, you make my heart skip a beat every time I see you.`,
      `${name}, being with you makes every day feel like Valentine's Day.`,
      `My dear ${name}, you're the missing piece to my heart's puzzle.`,
      `${name}, your love lights up my world like a thousand stars.`,
      `To ${name}, my heart beats in the rhythm of your name.`
    ];
    
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <main className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-pink-600 mb-2">
            Valentine's Quote Generator
          </h1>
          <p className="text-foreground/80">
            Enter a name to generate a sweet Valentine's message
          </p>
        </div>

        <form onSubmit={generateQuote} className="space-y-6">
          <div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter a name..."
              className="w-full px-4 py-2 rounded-lg border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-500 bg-background"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-pink-600 text-white py-2 px-4 rounded-lg hover:bg-pink-700 transition-colors"
          >
            Generate Quote
          </button>
        </form>

        {quote && (
          <div className="mt-8 p-6 bg-pink-50 dark:bg-pink-950/30 rounded-lg">
            <p className="text-lg text-center italic text-foreground">
              {quote}
            </p>
          </div>
        )}
      </main>
    </div>
  );
}