import React from 'react';
import { Download, Image as ImageIcon } from 'lucide-react';

const Gallery = ({ image, downloading, onDownload }) => {
  return (
    <section className="mx-auto mt-10 w-full max-w-6xl">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
        {!image ? (
          <div className="flex aspect-video w-full items-center justify-center rounded-xl border border-dashed border-white/15 bg-[#0b1020]/60 text-blue-200/60">
            <div className="flex flex-col items-center gap-2">
              <ImageIcon />
              <p>Generated art will appear here</p>
            </div>
          </div>
        ) : (
          <div className="relative">
            <img
              src={image}
              alt="Generated artwork"
              className="mx-auto w-full rounded-xl object-cover shadow-[0_0_80px_rgba(168,85,247,.25)]"
            />
            <div className="mt-4 flex items-center justify-between">
              <div className="text-sm text-blue-200/70">High-resolution preview</div>
              <button
                onClick={onDownload}
                disabled={downloading}
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/10 px-4 py-2 text-sm text-blue-50 transition hover:bg-white/15 disabled:opacity-60"
              >
                <Download size={16} /> {downloading ? 'Downloading…' : 'Download'}
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
