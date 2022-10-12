// Assets
import { ReactComponent as Check } from '../assets/check.svg';

const Alert = () => (
  <section className="alert alert-success shadow-lg w-80 absolute top-0 right-10">
    <div>
      <Check className="stroke-current flex-shrink-0 h-6 w-6" />
      <span className="capitalize">link successfully generated!</span>
    </div>
  </section>
);

export default Alert;
