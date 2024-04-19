export const Columnist = ({ name, columnistBadge, text }) => {
  return (
    <ul className="list-unstyled my-3 border-md-end">
      <li>
        <div className="d-flex align-items-center">
          <img
            src="/images/columnist.jpg"
            className="columnist-img "
            alt="columnist-pic"
          />
          <div className="d-md-none">
            <div className="my-3 fs-5 fw-bold px-2">{name}</div>
            <div className="text-muted  px-2"> Specialize in </div>
            <div className="mb-3 fw-bold fs-20px px-2">{columnistBadge}</div>
          </div>
        </div>
      </li>
      <li className="my-3 fs-5 fw-bold d-none d-md-block">{name}</li>
      <li className="text-muted  d-none d-md-block"> Specialize in </li>
      <li className="mb-3 fw-bold fs-20px d-none d-md-block">
        {columnistBadge}
      </li>
      <li className="text-muted pe-5 d-none d-md-block"> {text}</li>
    </ul>
  );
};
