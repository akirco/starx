import { RUNNING_IN_TAURI } from './env';
import { appWindow } from '@tauri-apps/api/window';

export const setup = () => {
  if (RUNNING_IN_TAURI) {
    document.addEventListener('keydown', async (e) => {
      if (e.key === 'Escape') {
        await appWindow.hide();
      }
    });
  }
};
