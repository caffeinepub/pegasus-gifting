import React from 'react';
import { Button } from '@/components/ui/button';
import { FileText, Download } from 'lucide-react';
import { config } from '@/config/pegasus';

export function MasterCatalogueSection() {
  const handleViewCatalogue = () => {
    window.open(config.catalogue.url, '_blank', 'noopener,noreferrer');
  };

  const handleDownloadCatalogue = () => {
    const link = document.createElement('a');
    link.href = config.catalogue.url;
    link.download = config.catalogue.filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="catalogue" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 md:p-12 border-2 border-primary/20 shadow-red-lg">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 border-2 border-primary/30 mb-4">
                <FileText className="w-10 h-10 text-primary" />
              </div>
              
              <div className="space-y-3">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                  Explore Our Master Catalogue
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Browse our complete collection of premium corporate gifts and find the perfect items for your needs
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button 
                  size="lg"
                  onClick={handleViewCatalogue}
                  className="text-lg px-8 py-6 shadow-red-lg hover:shadow-red-xl transition-all"
                >
                  <FileText className="w-5 h-5 mr-2" />
                  View Catalogue
                </Button>
                
                <Button 
                  variant="outline"
                  size="lg"
                  onClick={handleDownloadCatalogue}
                  className="text-lg px-8 py-6 border-2 hover:bg-secondary/50"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download PDF
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
