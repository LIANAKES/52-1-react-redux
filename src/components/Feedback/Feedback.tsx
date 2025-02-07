import { useState } from "react";
import Button from "../Button/Button";
import {FeedbackWrapper, ButtonWrapper, Counter, ResetWrapper, ButtonStyled} from "./styles";

// Типы для состояний
function Feedback() {
  // Инициализация состояния для лайков и дизлайков
  const [likes, setLikes] = useState<number>(0);
  const [dislikes, setDislikes] = useState<number>(0);

  // Функции для изменения состояния
  const onLikeClick = () => {
    setLikes((prevLikes) => prevLikes + 1);
  };

  const onDislikeClick = () => {
    setDislikes((prevDislikes) => prevDislikes + 1);
  };

  const onResetClick = () => {
    setLikes(0);
    setDislikes(0);
  };

  return (
    <FeedbackWrapper>
    <ButtonWrapper>
      <ButtonStyled>
        <Button name="Like" type="button" onClick={onLikeClick} />
      </ButtonStyled>
      <Counter>{likes}</Counter>
    </ButtonWrapper>
    <ButtonWrapper>
      <ButtonStyled>
        <Button name="Dislike" type="button" onClick={onDislikeClick} />
      </ButtonStyled>
      <Counter>{dislikes}</Counter>
    </ButtonWrapper>
    <ResetWrapper>
      <ButtonStyled>
        <Button name="Reset Results" type="button" onClick={onResetClick} />
      </ButtonStyled>
    </ResetWrapper>
  </FeedbackWrapper>
);
}

export default Feedback;