export const BtnContainer = ({ jobs, currentItem, setCurrentItem }) => {
  return (
    <div className="btn-container">
      {jobs?.length > 0 &&
        jobs.map(({ id, company }, idx) => (
          <button
            className={currentItem === idx ? "job-btn active-btn" : "job-btn"}
            type="button"
            onClick={() => setCurrentItem(idx)}
            key={id}
          >
            {company}
          </button>
        ))}
    </div>
  );
};
