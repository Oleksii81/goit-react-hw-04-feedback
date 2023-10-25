import { ButtonContainerStyle } from "./Feedback.styled";

export const ButtonContainer = ({ options, onLeaveFeedback }) => {
    return (
        <ButtonContainerStyle>
            {options.map(option => (
                <button 
                    className="button"
                    type="button"  
                    key={option} 
                    onClick={() => onLeaveFeedback(option)}
                >
                    {option}
                </button>
            ))}
        </ButtonContainerStyle>
    )
};


