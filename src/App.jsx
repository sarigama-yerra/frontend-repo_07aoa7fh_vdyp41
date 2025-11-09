import React, { useCallback, useState } from 'react';
import Hero from './components/Hero';
import PromptForm from './components/PromptForm';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);
  const [downloading, setDownloading] = useState(false);

  const onGenerate = useCallback(async ({ prompt, style }) => {
    setLoading(true);
    try {
      // Use a public prompt-to-image service for demo purposes
      const combined = `${style} style, ${prompt}`;
      const url = `https://image.pollinations.ai/prompt/${encodeURIComponent(combined)}?width=1024&height=576&seed=${Math.floor(
        Math.random() * 100000
      )}`;
      // Bust cache to ensure a fresh image
      const finalUrl = `${url}&t=${Date.now()}`;
      setImage(finalUrl);
    } catch (e) {
      console.error(e);
      alert('Failed to generate image. Please try again.');
    } finally {
      setLoading(false);
    }
  }, []);

  const onDownload = useCallback(async () => {
    if (!image) return;
    try {
      setDownloading(true);
      const resp = await fetch(image);
      const blob = await resp.blob();
      const blobUrl = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = blobUrl;
      a.download = 'genpix-art.png';
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(blobUrl);
    } catch (e) {
      console.error(e);
      alert('Could not download the image.');
    } finally {
      setDownloading(false);
    }
  }, [image]);

  return (
    <div className="min-h-screen w-full bg-[radial-gradient(1250px_650px_at_50%_-20%,rgba(59,130,246,.18),transparent),radial-gradient(650px_350px_at_80%_20%,rgba(168,85,247,.18),transparent)] from-[#060913] to-[#0b1020] text-blue-50 antialiased">
      {/* Subtle animated gradient orbs */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-10 top-20 h-40 w-40 animate-pulse rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute right-10 top-40 h-56 w-56 animate-pulse rounded-full bg-fuchsia-500/20 blur-3xl" />
      </div>

      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <Hero />
        <div className="mt-10">
          <PromptForm onGenerate={onGenerate} loading={loading} />
          <Gallery image={image} downloading={downloading} onDownload={onDownload} />
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default App;
