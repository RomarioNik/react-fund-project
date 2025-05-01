import { v4 as uuidv4 } from "uuid";
import { FaAngleDoubleRight } from "react-icons/fa";

export const JobDuties = ({ duties }) => {
  return (
    <div>
      {duties?.length > 0 &&
        duties.map((duty) => {
          const id = uuidv4();

          return (
            <div key={id} className="job-desc">
              <FaAngleDoubleRight className="job-icon" />
              <p>{duty}</p>
            </div>
          );
        })}
    </div>
  );
};
