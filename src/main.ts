import { app, BrowserWindow } from 'electron';
import * as path from 'path';

class ElectronApp {
  private mainWindow: BrowserWindow | null = null;

  constructor() {
    // This method will be called when Electron has finished
    // initialization and is ready to create browser windows.
    app.whenReady().then(() => {
      this.createWindow();

      app.on('activate', () => {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (BrowserWindow.getAllWindows().length === 0) {
          this.createWindow();
        }
      });
    });

    // Quit when all windows are closed, except on macOS. There, it's common
    // for applications and their menu bar to stay active until the user quits
    // explicitly with Cmd + Q.
    app.on('window-all-closed', () => {
      if (process.platform !== 'darwin') {
        app.quit();
      }
    });
  }

  private createWindow(): void {
    // Create the browser window.
    this.mainWindow = new BrowserWindow({
      height: 800,
      width: 1200,
      webPreferences: {
        nodeIntegration: false,
        contextIsolation: true,
        enableRemoteModule: false,
        preload: path.join(__dirname, 'preload.js')
      },
      show: false
    });

    // Load the app
    this.mainWindow.loadFile(path.join(__dirname, '../public/index.html'));

    // Show window when ready to prevent visual flash
    this.mainWindow.once('ready-to-show', () => {
      this.mainWindow?.show();
    });

    // Open the DevTools in development
    if (process.env.NODE_ENV === 'development') {
      this.mainWindow.webContents.openDevTools();
    }

    this.mainWindow.on('closed', () => {
      this.mainWindow = null;
    });
  }
}

// Create app instance
new ElectronApp();
