// Deprecated entrypoint.
//
// The canonical Nest entrypoint is `src/main.ts` and the expected production
// build output is `dist/main.js`.
//
// Use one of:
// - `npm run start:dev`
// - `npm run build` then `npm run start:prod`
//
// Keeping this file as a hard fail prevents accidental usage.

// eslint-disable-next-line no-console
console.error('Deprecated: use backend/src/main.ts via npm scripts (start:dev/start:prod).');
process.exit(1);
