import { useNavigate } from "react-router-dom";
import Button from "./Button";
import Header2 from "./Header2";
import ButtonGradient from "../assets/svg/ButtonGradient";
import ContactMe from "./ContactMe";

function TalkToMe() {
  const navigate = useNavigate();
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header2 />
        <ContactMe />
        <Button onClick={() => navigate("/home")} white>
          Go back
        </Button>
      </div>
      <ButtonGradient />
    </>
  );
}

export default TalkToMe;
