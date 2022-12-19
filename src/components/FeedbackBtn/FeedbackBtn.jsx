import { BtnContainer , Button} from "./FeedbackBtn.styled"
import PropTypes from 'prop-types';

export const FeedbackBtn = ({options,onLeaveFeedback}) => {
    return (
        <BtnContainer>
            {options.map((option, idx) => (
                <Button
                    type="button"
                    key={idx}
                    onClick={onLeaveFeedback}
                >
                    {option}
                </Button>
            ))}    
        </BtnContainer>
    )
}

FeedbackBtn.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback:PropTypes.func.isRequired,
}