import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { SafeImage } from '@/components/marketing/SafeImage';
import { categories, getCategoryImagePath } from '@/config/pegasus';

export function CuratedCategoriesSection() {
  return (
    <section id="categories" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Curated Gift Categories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our carefully selected range of premium corporate gifts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Card 
              key={category.id}
              className="group overflow-hidden border-2 hover:border-primary hover:shadow-red-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <SafeImage 
                  src={getCategoryImagePath(category.id)}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  fallbackClassName="w-full h-full"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-muted-foreground">
                  {category.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
