// Libraries
import { useEffect } from 'react';
import { themeChange } from 'theme-change';
// Components
import SwitchTheme from './components/SwitchTheme';
import Alert from './components/Alert';
import ShortLink from './components/ShortLink';
import Shortener from './components/Shortener';

const App = () => {
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <section className="space-y-12">
      <SwitchTheme />
      <Shortener />
      <ShortLink />
      <Alert />
    </section>
  );
};

export default App;
