// Type declarations for Lucide icons loaded via CDN
declare global {
  interface Window {
    lucide: {
      createIcons: () => void;
    };
  }
}

declare const lucide: {
  createIcons: () => void;
};
