import React from 'react';
import { categories } from '../../config/pegasus';

interface CategoryCardsProps {
  onSelect: (categoryId: string, categoryName: string) => void;
}

export function CategoryCards({ onSelect }: CategoryCardsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {categories.map((category, index) => (
        <button
          key={category.id}
          onClick={() => onSelect(category.id, category.name)}
          className="group relative p-6 bg-card border-2 border-border rounded-xl hover:border-primary hover:bg-primary/5 transition-all duration-300 shadow-gold-sm hover:shadow-gold-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 text-left animate-fade-in"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="flex flex-col gap-3">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <div className="w-8 h-8 bg-primary/20 rounded-md" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                {category.name}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                {category.description}
              </p>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}
