import { useLoaderData } from "react-router-dom";
import { GroupBox } from "react95";
import Contact from "../types/Contact";

function PersonCard() {
  const data: any = useLoaderData();
  return (
    <div>
      <GroupBox label={data.name}>
        <div className="contact-info">
          <div className="">
            <GroupBox label="Email">{data.email}</GroupBox>
            <GroupBox label="Phone">{data.phone}</GroupBox>
            <GroupBox label="Address">{data.address}</GroupBox>
            <GroupBox label="Category">{data.category}</GroupBox>
          </div>
        </div>
      </GroupBox>
    </div>
  );
}

export default PersonCard;
