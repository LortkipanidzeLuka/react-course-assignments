import React from 'react';
import SkillLevel from './SkillLevel';

const Skill = ({ name, level }) => {
    return (
        <SkillLevel level={level}>
            {name}
        </SkillLevel>
    );
};

export default Skill; 