import { useState } from 'react';

export function usePredict() {
  const [result, setResult]   = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState(null);

  async function predict(imageFile) {
    setLoading(true);
    setError(null);
    setResult(null);
    const form = new FormData();
    form.append('file', imageFile);
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/predict`,
        { method: 'POST', body: form }
      );
      if (!res.ok) throw new Error('Server error');
      setResult(await res.json());
    } catch {
      setError('Could not reach the server. Is the backend running?');
    } finally {
      setLoading(false);
    }
  }

  return { predict, result, loading, error };
}