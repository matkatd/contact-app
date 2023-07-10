import { Link } from "react-router-dom";

function ContactCard({ id, name }: { id: string; name: string }) {
  return (
    <Link to={`/person/${id}`}>
      <h3>{name}</h3>
    </Link>
  );
}
export default ContactCard;
