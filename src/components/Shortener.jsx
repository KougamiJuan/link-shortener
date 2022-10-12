const Shortener = () => (
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
);

export default Shortener;
