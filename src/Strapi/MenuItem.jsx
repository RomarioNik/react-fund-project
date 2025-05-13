export const MenuItem = ({ page, links }) => {
  return (
    <>
      <h4>{page}</h4>
      <div className="sidebar-sublinks">
        {links.map(({ id, label, icon, url }) => (
          <a key={id} href={url}>
            {icon}
            {label}
          </a>
        ))}
      </div>
    </>
  );
};
