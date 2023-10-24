import PropTypes from 'prop-types';
import { ButtonContainerStyle } from "./Feedback.styled";
import { nanoid } from 'nanoid';

export const ButtonContainer = ({changeOnClick, option}) => {
    return (
        <ButtonContainerStyle>
            {option.map(feedback => (
                <button className="button"
                type="button"  
                key={nanoid()} 
                onClick={() => changeOnClick(feedback)}
                >{feedback}</button>
            ))}
        </ButtonContainerStyle>
    )
};

ButtonContainer.propTypes ={
    changeOnCklick: PropTypes.func,
    option: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,        
};