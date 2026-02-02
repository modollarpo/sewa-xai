"use strict";
// SEWA Quiet Clinical Theme Tokens
// Palette: Provincial Pink, Eden (Forest Teal), Luminous Cyan gradient
Object.defineProperty(exports, "__esModule", { value: true });
exports.theme = exports.spacing = exports.shadows = exports.radii = exports.typography = exports.colors = void 0;
exports.colors = {
    background: '#FEF6ED', // Provincial Pink
    structure: '#0D4F3D', // Eden (Forest Teal)
    primaryGradient: 'linear-gradient(90deg, #0D4F3D 0%, #29C6B1 100%)', // Eden to Cyan
    primary: '#29C6B1', // Luminous Cyan
    text: '#1A1A1A',
    muted: '#A0A0A0',
    warning: '#FFD580', // Soft amber for uncertainty
    white: '#FFFFFF',
};
exports.typography = {
    heading: 'Space Grotesk, sans-serif',
    body: 'Inter, sans-serif',
};
exports.radii = {
    card: '18px',
    button: '12px',
    modal: '24px',
};
exports.shadows = {
    glass: '0 8px 32px 0 rgba(13, 79, 61, 0.12)',
    card: '0 2px 8px 0 rgba(41, 198, 177, 0.08)',
};
exports.spacing = {
    xs: '0.5rem',
    sm: '1rem',
    md: '2rem',
    lg: '3rem',
    xl: '4rem',
};
exports.theme = {
    colors: exports.colors,
    typography: exports.typography,
    radii: exports.radii,
    shadows: exports.shadows,
    spacing: exports.spacing,
};
