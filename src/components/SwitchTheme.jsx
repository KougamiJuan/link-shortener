// Assets
import { ReactComponent as Sun } from '../assets/sun.svg';
import { ReactComponent as Moon } from '../assets/moon.svg';

const SwitchTheme = () => (
  <section className="flex justify-center">
    <label className="swap swap-rotate">
      <input type="checkbox" />
      <Sun data-set-theme="light" className="swap-on fill-current w-10 h-10" />
      <Moon data-set-theme="dark" className="swap-off fill-current w-10 h-10" />
    </label>
  </section>
);

export default SwitchTheme;
