import React from 'react';
import learnMoreButtonStyles from "./learn-more.module.css"

const LearnMoreButton = () => {
    return (
        <button className={learnMoreButtonStyles.button}>
            Learn more
        </button>
    );
};

export default LearnMoreButton;