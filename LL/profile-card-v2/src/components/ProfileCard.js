import React from 'react';
import styled from 'styled-components';
import profileImage from '../assets/profile.png'; 
import Skill from './Skill';

const Card = styled.div`
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 380px;
    margin: 20px;
    overflow: hidden;
    border: 4px solid #6366f1;
    position: relative;
    
    &::before {
        content: '';
        position: absolute;
        top: -2px;
        left: -2px;
        right: -2px;
        bottom: -2px;
        background: linear-gradient(45deg, #6366f1, #8b5cf6, #ec4899, #f59e0b);
        border-radius: 14px;
        z-index: -1;
        animation: borderGlow 3s ease-in-out infinite alternate;
    }
    
    @keyframes borderGlow {
        0% { opacity: 0.7; }
        100% { opacity: 1; }
    }
`;

const Image = styled.img`
    width: 100%;
    max-height: 250px;
    object-fit: cover; 
`;

const ProfileContent = styled.div`
    padding: 20px;
`;

const Name = styled.h2`
    margin: 0;
    font-size: 24px;
    color: #333;
`;

const Bio = styled.p`
    color: #777;
    font-size: 16px;
    margin-bottom: 20px;
`;

const Skills = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 15px;
`;

const ProfileCard = () => {
    const skills = [
        { name: 'Java', level: 'strong' },
        { name: 'C#', level: 'intermediate' },
        { name: 'React', level: 'intermediate' },
        { name: 'JavaScript', level: 'strong' },
        { name: 'TypeScript', level: 'intermediate' },
        { name: 'Node.js', level: 'intermediate' },
        { name: 'Python', level: 'beginner' },
        { name: 'SQL', level: 'strong' },
        { name: 'MongoDB', level: 'intermediate' },
        { name: 'Docker', level: 'beginner' },
        { name: 'Git', level: 'strong' },
        { name: 'AWS', level: 'beginner' },
        { name: 'HTML/CSS', level: 'strong' },
        { name: 'SASS', level: 'intermediate' },
        { name: 'Redux', level: 'beginner' },
        { name: 'GraphQL', level: 'beginner' }
    ];

    return (
        <Card>
            <Image src={profileImage} alt="Profile" />
            <ProfileContent>
                <Name>Luka Lortkipanidze</Name>
                <Bio>
                    Java developer by heart, currently working with C# for some reason. Also doing some react stuff
                </Bio>
                <Skills>
                    {skills.map((skill) => (
                        <Skill key={skill.name} name={skill.name} level={skill.level} />
                    ))}
                </Skills>
            </ProfileContent>
        </Card>
    );
};

export default ProfileCard;