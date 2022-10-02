// Libs
import { useEffect } from 'react';
import { themeChange } from 'theme-change';
// Components
import { ReactComponent as Sun } from './assets/sun.svg';
import { ReactComponent as Moon } from './assets/moon.svg';

const App = () => {
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <section className="prose">
      <label className="swap swap-rotate">
        <input type="checkbox" />
        <Sun
          data-set-theme="light"
          className="swap-on fill-current w-10 h-10"
        />
        <Moon
          data-set-theme="dark"
          className="swap-off fill-current w-10 h-10"
        />
      </label>
    </section>
  );
};

export default App;
