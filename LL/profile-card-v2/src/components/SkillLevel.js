import React from 'react';
import styled from 'styled-components';

const SkillLevelContainer = styled.span`
    background: ${props => {
        switch(props.level) {
            case 'strong': return 'linear-gradient(135deg, #10b981, #059669)';
            case 'intermediate': return 'linear-gradient(135deg, #f59e0b, #d97706)';
            case 'beginner': return 'linear-gradient(135deg, #6b7280, #4b5563)';
            default: return '#eee';
        }
    }};
    color: white;
    font-size: 12px;
    padding: 6px 12px;
    border-radius: 20px;
    display: inline-flex;
    align-items: center;
    gap: 4px;
    font-weight: 500;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease;
    
    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    }
`;

const Emoji = styled.span`
    font-size: 14px;
`;

const SkillLevel = ({ level, children }) => {
    const getEmoji = (level) => {
        switch(level) {
            case 'strong': return '💪';
            case 'intermediate': return '😊';
            case 'beginner': return '👶';
            default: return '📝';
        }
    };

    return (
        <SkillLevelContainer level={level}>
            <Emoji>{getEmoji(level)}</Emoji>
            {children}
        </SkillLevelContainer>
    );
};

export default SkillLevel; 