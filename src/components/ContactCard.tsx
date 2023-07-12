import { Link } from "react-router-dom";
import { Anchor, GroupBox, Window, WindowContent } from "react95";

function ContactCard({ id, name }: { id: string; name: string }) {
  return (
    <Window style={{ width: "60%" }}>
      <WindowContent>
        <GroupBox label={name}>
          <Anchor>
            <Link to={`/person/${id}`}>Open Contact</Link>
          </Anchor>
        </GroupBox>
      </WindowContent>
    </Window>
  );
}
export default ContactCard;
