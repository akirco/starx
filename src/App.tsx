import { VscSearch } from 'react-icons/vsc';
import { useAutoFocus } from './hooks/useAutoFocus';
import { setup } from './utils/setup';

function App() {
  const inputRef = useAutoFocus();
  setup();
  return (
    <div className='flex h-full'>
      <input
        ref={inputRef}
        type='text'
        className='bg-app-bg text-lg text-white px-5 outline-none border-none w-full h-full'
        placeholder='start typing...'
      />
      <div data-tauri-drag-region className=' bg-app-bg flex px-3'>
        <VscSearch className='text-3xl m-auto -z-50 text-white' />
      </div>
    </div>
  );
}

export default App;
