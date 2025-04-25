import { useEffect, useState } from "react";
import { Tour } from "./Tour";
import "./tours.css";

const url = "https://www.course-api.com/react-tours-project";

export const Tours = () => {
  const [tours, setTours] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(true);

  const deleteTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchData = async () => {
    try {
      setError(false);
      const response = await fetch(url);

      if (!response.ok) {
        setError(true);
        setLoading(false);
      }

      const tours = await response.json();
      setTours(tours);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <main>We already loading tours...</main>;
  }

  if (error) {
    return (
      <main>
        <h2>Something does wrong</h2>
        <p>{error}</p>
      </main>
    );
  }

  return (
    <section className="tours">
      <div className="title">
        <h2>our tours</h2>
        <div className="title-underline"></div>
      </div>

      {tours.length > 0 &&
        tours.map((tour) => (
          <Tour key={tour.id} {...tour} deleteTour={deleteTour} />
        ))}

      {tours.length === 0 && (
        <button
          className="btn btn-block"
          type="button"
          onClick={() => fetchData()}
        >
          refresh
        </button>
      )}
    </section>
  );
};
