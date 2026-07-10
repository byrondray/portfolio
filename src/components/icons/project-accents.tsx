import { Brain, ChefHat, Database, Dna, Plane, Shirt } from 'lucide-react';
import { ForkliftIcon, StockChartIcon, EarningsAnalyzerIcon } from './project-icons';

const DEFAULT_GRADIENT = 'from-emerald-500 to-green-500';

export function getProjectGradient(accentGradient?: string): string {
  return accentGradient || DEFAULT_GRADIENT;
}

export function getProjectIcon(
  title: string,
  size = 80,
  className = 'text-white'
) {
  switch (title) {
    case 'Flash Learn':
      return <Brain size={size} className={className} />;
    case 'Cookbook+':
      return <ChefHat size={size} className={className} />;
    case 'Warehouse CMS':
      return <ForkliftIcon size={size} className={className} />;
    case 'CytoNET':
      return <Dna size={size} className={className} />;
    case 'Travel Planner':
      return <Plane size={size} className={className} />;
    case 'AI Stock Tracker':
      return <StockChartIcon size={size} className={className} />;
    case 'Los Hermanos':
      return <Shirt size={size} className={className} />;
    case 'Stock Earnings Analyzer':
      return <EarningsAnalyzerIcon size={size} className={className} />;
    default:
      return <Database size={size} className={className} />;
  }
}
