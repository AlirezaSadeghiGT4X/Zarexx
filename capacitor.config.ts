import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ir.zarexx.app',
  appName: 'Zarexx',
  webDir: 'dist',
  android: {
    webContentsDebuggingEnabled: true,
  },
  plugins: {
    StatusBar: {
      backgroundColor: '#F1C40F',
      style: 'LIGHT',
      overlaysWebView: false,
    },
  },
};

export default config;
