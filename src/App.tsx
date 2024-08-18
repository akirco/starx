import { useAutoFocus } from './hooks/useAutoFocus';
import { ChangeEvent, useState } from 'react';
import { invoke } from '@tauri-apps/api/tauri';
import { mode, runByMode } from './utils/mode';

interface Runnable {
  name: string;
  file_name?: string;
  icon?: string;
  exec: string;
}

function App() {
  const inputRef = useAutoFocus();
  const [inputVal, setInputVal] = useState('');
  const [modeIndex, setModeIndex] = useState(0);
  const [CurrentMode, setCurrentMode] = useState(mode[modeIndex]);
  const [runnables, setRunnables] = useState<Runnable[]>([]);
  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputVal(e.target.value);
    invoke<Runnable[]>('search', {
      searchInput: inputVal,
    }).then((result) => {
      setRunnables(result);
      console.log(runnables);
    });
  };

  return (
    <div className='flex h-full'>
      <input
        ref={inputRef}
        type='text'
        spellCheck='false'
        value={inputVal}
        onChange={handleSearchInputChange}
        className='bg-app-bg text-lg text-white px-5 outline-none border-none w-full h-full caret-cyan-500 placeholder-zinc-600'
        placeholder='start typing...'
        onKeyDown={(e) => {
          if (e.key === 'Tab') {
            e.preventDefault();
            setModeIndex((prevIndex) => (prevIndex + 1) % mode.length);
            setCurrentMode(mode[modeIndex]);
          }
          if (inputVal.length > 0 && e.key === 'Enter') {
            runByMode(CurrentMode);
          }
        }}
      />
      <div data-tauri-drag-region className=' bg-app-bg flex px-3'>
        <CurrentMode.icon className='text-3xl m-auto z-[1] text-white/60' />
      </div>
    </div>
  );
}

export default App;
