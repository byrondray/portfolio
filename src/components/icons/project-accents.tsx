import { Brain, ChefHat, Database, Dna, Plane, Shirt } from 'lucide-react';
import { ForkliftIcon, StockChartIcon, EarningsAnalyzerIcon } from './project-icons';

const GRADIENTS: Record<string, string> = {
  'Flash Learn': 'from-purple-500 to-indigo-500',
  'Cookbook+': 'from-red-500 to-pink-500',
  'Warehouse CMS': 'from-indigo-500 to-blue-500',
  CytoNET: 'from-cyan-500 to-teal-500',
  'Travel Planner': 'from-blue-500 to-sky-500',
  'AI Stock Tracker': 'from-green-500 to-emerald-500',
  'Los Hermanos': 'from-orange-500 to-amber-500',
  'Stock Earnings Analyzer': 'from-slate-800 to-emerald-950',
};
const DEFAULT_GRADIENT = 'from-emerald-500 to-green-500';

export function getProjectGradient(title: string): string {
  return GRADIENTS[title] || DEFAULT_GRADIENT;
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
