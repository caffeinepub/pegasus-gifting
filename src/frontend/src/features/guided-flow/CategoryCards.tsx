import React from 'react';
import { categories } from '../../config/pegasus';
import { Gift, Briefcase, Laptop, Wine, ShoppingBag, Award } from 'lucide-react';

interface CategoryCardsProps {
  onSelect: (categoryId: string, categoryName: string) => void;
}

const categoryIcons = [Gift, Briefcase, Laptop, Wine, ShoppingBag, Award];

export function CategoryCards({ onSelect }: CategoryCardsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {categories.map((category, index) => {
        const Icon = categoryIcons[category.iconIndex] || Gift;
        return (
          <button
            key={category.id}
            onClick={() => onSelect(category.id, category.name)}
            className="group relative p-4 bg-card border-2 border-border rounded-xl hover:border-primary hover:bg-primary/5 transition-all duration-300 shadow-sm hover:shadow-red-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 text-left animate-fade-in"
            style={{ animationDelay: `${index * 0.08}s` }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-display font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
                  {category.description}
                </p>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}
