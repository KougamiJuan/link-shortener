// Libs
import { useEffect } from 'react';
import { themeChange } from 'theme-change';
// Assets
import { ReactComponent as Sun } from './assets/sun.svg';
import { ReactComponent as Moon } from './assets/moon.svg';
import { ReactComponent as LinkUrl } from './assets/link.svg';
import { ReactComponent as Check } from './assets/check.svg';

const App = () => {
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <section className="space-y-12">
      <section className="flex justify-center">
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
      <section className="card bg-neutral text-neutral-content container-responsive">
        <div className="card-body flex items-center text-center">
          <h2 className="card-title capitalize">link shortener</h2>
          <div className="form-control">
            <div className="input-group">
              <input
                type="text"
                placeholder="Shorten a link here..."
                className="input input-bordered content-responsive"
              />
              <button className="btn btn-primary font-bold" type="button">
                shorten it!
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="alert alert-info shadow-lg">
        <div className="visibility-content">
          <LinkUrl className="w-8 h-8" />
          <p className="line-through font-medium text-sm truncate text-responsive">
            https://www.linkedin.com/company/juan-ssssssssssssdddddddddddddddsssssssssssssssssssssssssssxxxxxxxxxxxxxx
          </p>
        </div>
        <div className="flex-none">
          <LinkUrl className="w-8 h-8 hidden-content" />
          <span className="link link-neutral link-hover uppercase text-xs font-medium">
            https://rel.ink/gob3x9
          </span>
          <button className="btn btn-outline btn-sm" type="button">
            copy
          </button>
        </div>
      </section>
      <section className="alert alert-success shadow-lg w-80 absolute top-0 right-10">
        <div>
          <Check className="stroke-current flex-shrink-0 h-6 w-6" />
          <span className="capitalize">link successfully generated!</span>
        </div>
      </section>
    </section>
  );
};

export default App;
