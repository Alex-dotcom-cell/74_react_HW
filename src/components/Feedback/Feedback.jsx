import { useState } from "react";
import Button from "../Button/Button.jsx"; // для Feedback.jsx
import "./styles.css";

function Feedback() {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  return (
    <div className="feedback">
      <div>
        <Button name="Like" onButtonClick={() => setLikes(likes + 1)} />
        <span>{likes}</span>
      </div>

      <div>
        <span>{dislikes}</span>
        <Button name="Dislike" onButtonClick={() => setDislikes(dislikes + 1)} />
      </div>

      <Button
        name="Reset Results"
        onButtonClick={() => {
          setLikes(0);
          setDislikes(0);
        }}
      />
    </div>
  );
}

export default Feedback;