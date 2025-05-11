export const SocialLinks = ({ social }) => {
  return (
    <ul className="social-icons">
      {social.map(({ id, url, icon }) => (
        <li key={id}>
          <a href={url} className="socialIcon">
            {icon}
          </a>
        </li>
      ))}
    </ul>
  );
};
