import { RUNNING_IN_TAURI } from './env';
import { appWindow } from '@tauri-apps/api/window';
import {
  register,
  isRegistered,
  unregister,
} from '@tauri-apps/api/globalShortcut';

const setup = async () => {
  if (RUNNING_IN_TAURI) {
    appWindow.onFocusChanged(async ({ payload }) => {
      if (!payload) {
        console.log(payload);

        await appWindow.hide();
      }
    });

    document.addEventListener('keydown', async (e) => {
      if (e.key === 'Escape') {
        await appWindow.hide();
      }
    });

    await unregister('Alt+Space');

    if (await isRegistered('Alt+Space')) {
      return;
    }

    register('Alt+Space', async () => {
      if (document.hasFocus()) {
        await appWindow.hide();
      } else {
        await appWindow.show();
        await appWindow.setFocus();
      }
    });
  }
};

export default setup;
