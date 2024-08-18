export const RUNNING_IN_TAURI = Boolean(
  typeof window !== 'undefined' &&
    window !== undefined &&
    // @ts-ignore
    window.__TAURI_IPC__ !== undefined
);
