import PropTypes from 'prop-types';
import {StatisticContainerStyle } from './Statistics.styled';

export const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    return (
        <StatisticContainerStyle>
            <div className="statResults">
                <h3 className="statTitle">Statistic</h3>
                <p className="statItem">
                    Good:<span className="statValue">{good}</span>
                </p>
                <p className="statItem">
                    Neutral:<span className="statValue">{neutral}</span>
                </p>
                <p className="statItem">
                    Bad:<span className="statValue">{bad}</span>
                </p>
                <p className="statItem">
                    Total:
                <span className="statValue">{total}</span>
                </p>
                <p className="statItem">
                    Positive feedback:
                <span className="statValue">{positivePercentage.toFixed(0)}</span>%
                </p>
            </div> 
        </StatisticContainerStyle>
    )
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};