import { useEffect, useRef } from 'react';
// import { appWindow } from '@tauri-apps/api/window';

export const useAutoFocus = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current?.focus();
      //   inputRef.current.onblur = async (e) => {
      //     console.log(e);
      //     // await appWindow.hide();
      //   };
    }
  }, []);

  return inputRef;
};
