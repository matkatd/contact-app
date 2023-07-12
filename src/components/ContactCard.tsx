import { Link } from "react-router-dom";
import { Anchor, GroupBox, Window, WindowContent } from "react95";

function ContactCard({ id, name }: { id: string; name: string }) {
  return (
    <Window style={{ width: "100%" }}>
      <WindowContent >
        <GroupBox className="contact-box" label={name} style={{ display: "flex", justifyContent: "space-evenly" }}>
          <Anchor>
            <Link className="contact-card-link" to={`/person/${id}`}>Open Contact</Link>
          </Anchor>
          <Anchor>
            <Link className="contact-card-link" to={`/person/${id}/edit`}>Update Contact</Link>
          </Anchor>
          <Anchor>
            <Link className="contact-card-link" to={`/person/${id}/delete`}>Delete Contact</Link>
          </Anchor>
        </GroupBox>
      </WindowContent>
    </Window>
  );
}
export default ContactCard;
