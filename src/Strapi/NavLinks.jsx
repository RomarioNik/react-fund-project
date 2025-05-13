import { sublinks } from "./data";
import { useGlobalContext } from "./globalContext/useGlobalContext";

export const NavLinks = () => {
  const { setPageId } = useGlobalContext();

  return (
    <div className="nav-links">
      {sublinks.map(({ pageId, page }) => (
        <button
          className="nav-link"
          key={pageId}
          type="button"
          onMouseEnter={() => setPageId(pageId)}
        >
          {page}
        </button>
      ))}
    </div>
  );
};
