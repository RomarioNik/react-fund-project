import { useEffect, useState } from "react";
import { Error } from "./Error";
import { Loading } from "./Loading";
import { JobInfo } from "./JobInfo";
import { BtnContainer } from "./BtnContainer";
import "./Tabs.css";

const url = "https://www.course-api.com/react-tabs-project";

export const Tabs = () => {
  const [jobs, setJobs] = useState([]);
  const [currentItem, setCurrentItem] = useState(0);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(null);
        const response = await fetch(url);

        if (!response.ok) {
          setError("Something wrong. Try again");
          return;
        }

        const data = await response.json();
        setJobs(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    <section className="jobs-center">
      <Loading text="Wait a second. We are loading the data" />
    </section>;
  }

  if (error) {
    return (
      <section className="jobs-center">
        <Error />
      </section>
    );
  }

  return (
    <section className="jobs-center">
      <BtnContainer
        jobs={jobs}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
      />
      <JobInfo job={jobs[currentItem]} />
    </section>
  );
};
