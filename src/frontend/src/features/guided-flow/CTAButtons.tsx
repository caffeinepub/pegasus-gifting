import React from 'react';
import { MessageCircle, Download } from 'lucide-react';
import { getWhatsAppLink, config } from '../../config/pegasus';

export function CTAButtons() {
  const handleDownloadCatalogue = () => {
    const link = document.createElement('a');
    link.href = config.catalogue.url;
    link.download = config.catalogue.filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-all duration-200 shadow-gold-md hover:shadow-gold-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      >
        <MessageCircle className="w-5 h-5" />
        <span>Chat on WhatsApp</span>
      </a>
      <button
        onClick={handleDownloadCatalogue}
        className="flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 bg-card border-2 border-primary text-primary rounded-xl font-semibold hover:bg-primary/5 transition-all duration-200 shadow-gold-sm hover:shadow-gold-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      >
        <Download className="w-5 h-5" />
        <span>Download Catalogue</span>
      </button>
    </div>
  );
}
