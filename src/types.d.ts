// Global type definitions for the application

declare global {
  interface Window {
    electronAPI: {
      openFile: () => Promise<string | undefined>;
      onMenuItemClick: (callback: (menuId: string) => void) => void;
      removeAllListeners: (channel: string) => void;
    };
  }
}

export {};
