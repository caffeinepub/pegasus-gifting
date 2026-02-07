import React from 'react';
import { MessageCircle, Download, FileText } from 'lucide-react';
import { getWhatsAppLink, buildWhatsAppMessage, config } from '../../config/pegasus';

interface CTAButtonsProps {
  intent?: string;
  secondAnswer?: string;
  category?: string;
  showCatalogue?: boolean;
  onCatalogueClick?: () => void;
}

export function CTAButtons({ 
  intent, 
  secondAnswer, 
  category, 
  showCatalogue = false,
  onCatalogueClick 
}: CTAButtonsProps) {
  const handleDownloadCatalogue = () => {
    const link = document.createElement('a');
    link.href = config.catalogue.url;
    link.download = config.catalogue.filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewCatalogue = () => {
    window.open(config.catalogue.url, '_blank', 'noopener,noreferrer');
  };

  const whatsappMessage = intent 
    ? buildWhatsAppMessage(intent, secondAnswer, category)
    : undefined;

  const whatsappLink = getWhatsAppLink(whatsappMessage);

  if (showCatalogue) {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={handleViewCatalogue}
            className="flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 bg-card border-2 border-primary text-primary rounded-xl font-semibold hover:bg-primary/5 transition-all duration-200 shadow-sm hover:shadow-red-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            <FileText className="w-5 h-5" />
            <span>View Catalogue</span>
          </button>
          <button
            onClick={handleDownloadCatalogue}
            className="flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 bg-card border-2 border-border text-foreground rounded-xl font-semibold hover:bg-secondary/50 transition-all duration-200 shadow-sm hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            <Download className="w-5 h-5" />
            <span>Download</span>
          </button>
        </div>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-all duration-200 shadow-red-md hover:shadow-red-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          <MessageCircle className="w-5 h-5" />
          <span>Speak to Our Team</span>
        </a>
      </div>
    );
  }

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-all duration-200 shadow-red-md hover:shadow-red-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      >
        <MessageCircle className="w-5 h-5" />
        <span>Speak to Our Team</span>
      </a>
      <button
        onClick={handleDownloadCatalogue}
        className="flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 bg-card border-2 border-border text-foreground rounded-xl font-semibold hover:bg-secondary/50 transition-all duration-200 shadow-sm hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
      >
        <Download className="w-5 h-5" />
        <span>Catalogue</span>
      </button>
    </div>
  );
}
