// Assets
import { ReactComponent as LinkUrl } from '../assets/link.svg';

const ShortLink = () => (
  <section className="alert alert-info shadow-lg">
    <div className="visibility-content">
      <LinkUrl className="w-8 h-8" />
      <p className="line-through font-medium text-sm truncate text-responsive">
        https://www.linkedin.com/company/juan-aaabbbcccdddeeefffggghhhiiijjjkkklllmmmnnnooopppqqqrrrssstttuuuvvvwxz
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
);

export default ShortLink;
