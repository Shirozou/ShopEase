export const formatCurrency = value => new Intl.NumberFormat('en-PH',{style:'currency',currency:'PHP',maximumFractionDigits:2}).format(value);
// Prices are illustrative project-demo amounts in Philippine pesos.
export const makeOrderNumber = () => `SE-${new Date().getFullYear()}-${Math.random().toString(36).slice(2,8).toUpperCase()}`;
