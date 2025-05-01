import { JobDuties } from "./JobDuties";

export const JobInfo = (props) => {
  const { title, company, dates, duties } = props.job;

  return (
    <article className="job-info">
      <h3>{title}</h3>
      <span className="job-company">{dates}</span>
      <p className="job-date">{company}</p>

      <JobDuties duties={duties} />
    </article>
  );
};
