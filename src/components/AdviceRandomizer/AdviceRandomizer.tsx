import Button from "components/Button/Button";
import {AdviceRandomizerWrapper, AdviceCard,  AdviceContainer, AdviceText,  AdviceWrapper} from "./styles";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { adviceRandomizerActions, adviceRandomizerSelectors } from "store/redux/adviceRandomizer/adviceRandomizer";
import { v4 } from "uuid";
import Spinner from "components/Spinner/Spinner";

function AdviceRandomizer() {
    const {data, error, status } = useAppSelector(adviceRandomizerSelectors.adviceData)
     const dispatch = useAppDispatch();

     const advices = data.map((advice:string) => {
         return <AdviceText key={v4()}>{advice}</AdviceText>
       })
    
    const getAdvice = () => {
        dispatch(adviceRandomizerActions.getAdvice());
    };

    const deleteAdvices = () => {
        dispatch(adviceRandomizerActions.clearAdvices());
    };

    return (
        <AdviceRandomizerWrapper>
            <AdviceCard>
                <Button name="Get Advice" onClick={getAdvice} />
                {status === "loading" && <Spinner />}
                <AdviceContainer>
                   {advices}
                </AdviceContainer>
                <Button name="Delete Advices" onClick={deleteAdvices} />
            </AdviceCard>
        </AdviceRandomizerWrapper>
    );
}

export default AdviceRandomizer;