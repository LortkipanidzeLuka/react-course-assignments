import React from 'react';
import styled from 'styled-components';
import profileImage from '../assets/profile.png'; 

const Card = styled.div`
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 320px;
    margin: 20px;
    overflow: hidden;
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
`;

const Skills = styled.div`
    margin-top: 10px;
`;

const Skill = styled.span`
    background: #eee;
    color: #444;
    font-size: 14px;
    margin: 5px 5px 0 0;
    padding: 5px 10px;
    border-radius: 12px;
    display: inline-block;
`;

const ProfileCard = () => {
    return (
        <Card>
            <Image src={profileImage} alt="Profile" /> {/* Use the imported image */}
            <ProfileContent>
                <Name>Luka Lortkipanidze</Name>
                <Bio>
                    Java developer by heart, currently working with C# for some reason. Also doing some react stuff
                </Bio>
                <Skills>
                    <Skill>Java</Skill>
                    <Skill>C#</Skill>
                    <Skill>React</Skill>
                    <Skill>Full-Stack Development</Skill>
                </Skills>
            </ProfileContent>
        </Card>
    );
};

export default ProfileCard;