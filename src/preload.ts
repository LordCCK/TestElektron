import { contextBridge, ipcRenderer } from 'electron';

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld('electronAPI', {
  openFile: () => ipcRenderer.invoke('dialog:openFile'),
  onMenuItemClick: (callback: (menuId: string) => void) => 
    ipcRenderer.on('menu-item-click', (_event, menuId) => callback(menuId)),
  removeAllListeners: (channel: string) => 
    ipcRenderer.removeAllListeners(channel)
});
