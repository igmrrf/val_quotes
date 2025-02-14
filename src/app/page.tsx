'use client';
import { useState } from "react";
import { generateValentineQuote } from "./actions";

export default function Home() {
  const [name, setName] = useState('');
  const [quote, setQuote] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const message = await generateValentineQuote(name);
      setQuote(message);
    } catch (error) {
      console.error('Error:', error);
      setQuote('Failed to generate a quote. Please try again.');
    } finally {
      setLoading(false);
    }
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

        <form onSubmit={handleSubmit} className="space-y-6">
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
            disabled={loading}
            className="w-full bg-pink-600 text-white py-2 px-4 rounded-lg hover:bg-pink-700 transition-colors disabled:opacity-50"
          >
            {loading ? 'Generating...' : 'Generate Quote'}
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