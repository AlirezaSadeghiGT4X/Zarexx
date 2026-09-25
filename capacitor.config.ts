import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ir.zarexx.app',
  appName: 'Zarexx',
  webDir: 'dist',
  android: {
    webContentsDebuggingEnabled: true,
  },
};

export default config;
