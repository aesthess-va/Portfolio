// Vercel Speed Insights initialization
// This script imports and initializes Vercel Speed Insights for the portfolio site
import { injectSpeedInsights } from './node_modules/@vercel/speed-insights/dist/index.mjs';

// Initialize Speed Insights
// This will track web vitals and performance metrics when deployed to Vercel
injectSpeedInsights();
