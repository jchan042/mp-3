import styled from "styled-components";
import { useCalculator, type Operation } from "../../hooks/useCalculator.ts";

const StyledMain = styled.main`
  width: 70%;
  min-height: 100vh;
  text-align: center;
  font-size: calc(2px + 1.5vw);
  padding: 1% 2%;

  h3 {
    text-align: center;
    margin: 2% 0;
    font-size: calc(2px + 2vw);
  }

  p {
    line-height: 150%;
    padding: 1%;
    font-size: calc(2px + 1vw);
    text-align: left;
  }

  @media screen and (max-width: 1000px) {
    width: 100%;
    padding: 1%;
  }

  @media screen and (max-width: 750px) {
    padding: 2%;
  }
`;

const StyledCalculator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1%;
  margin: 2% 0;

  @media screen and (max-width: 1000px) {
    margin: 1% 0;
  }

  @media screen and (max-width: 750px) {
    flex-wrap: wrap;
  }
`;

const StyledNumbers = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1%;

  label {
    font-size: calc(2px + 1vw);
  }

  input {
    padding: 2% 2%;
    border: 2px solid #292977;
    font-size: calc(2px + 1vw);
    width: calc(60px + 5vw);
  }
`;

const StyledButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  width: calc(30px + 3vw);

  button {
    padding: 8% 0;
    border: 2px solid #292977;
    background-color: #050561;
    color: azure;
    border-radius: 6px;
    cursor: pointer;
    font-size: calc(2px + 1vw);
    margin: 1px 0;

    &:hover {
      background-color: #292977;
    }
  }
`;

const StyledOutput = styled.p<{ $negative: boolean }>`
    && {
        color: ${({ $negative }) => ($negative ? "red" : "black")};
        font-size: calc(4px + 1.5vw);
        text-align: center;
        font-weight: bold;
        margin: 2% 0;
        width: 100%;
        display: block;
    }
`;
const ops: { label: string; op: Operation }[] = [
    { label: "+", op: "+" },
    { label: "-", op: "-" },
    { label: "*", op: "*" },
    { label: "/", op: "/" },
    { label: "**", op: "**" },
];

export default function Projects() {
    const { input1, setInput1, input2, setInput2, result, calculate, clearAll } =
        useCalculator();

    return (
        <StyledMain>
            <h3>HAR Smartphone Sensors Model</h3>
            <p>
                Trained 3 machine learning models on smartphone sensor data to classify human activities,
                using time-series data cleaning and feature engineering to improve accuracy. Evaluated and
                optimized models through hyperparameter tuning and confusion matrix analysis.
            </p>

            <h3>World Happiness Levels Model</h3>
            <p>
                Developed multiclass classification models achieving up to 80% accuracy on global happiness
                predictions. Improved F1-scores by 4–7% using GridSearchCV and RandomizedSearchCV, with
                engineered socioeconomic features and weighted loss functions to address class imbalance.
            </p>

            <h3>Prompt Library</h3>
            <p>
                Designed an internal AI prompt library with 25+ customized prompts to streamline company-wide
                AI usage. Improved output consistency by 30% through iterative prompt tuning with few-shot
                examples.
            </p>

            <h3>JS Calculator</h3>
            <StyledCalculator>
                <StyledNumbers>
                    <label>
                        1st Number:
                        <input
                            type="text"
                            value={input1}
                            onChange={(e) => setInput1(e.target.value)}
                        />
                    </label>
                    <label>
                        2nd Number:
                        <input
                            type="text"
                            value={input2}
                            onChange={(e) => setInput2(e.target.value)}
                        />
                    </label>
                </StyledNumbers>
                <StyledButtons>
                    {ops.map(({ label, op }) => (
                        <button key={op} onClick={() => calculate(op)}>{label}</button>
                    ))}
                    <button onClick={clearAll}>Clear</button>
                </StyledButtons>
            </StyledCalculator>

            {result !== null && (
                <StyledOutput $negative={result < 0}>{result}</StyledOutput>
            )}
        </StyledMain>
    );
}