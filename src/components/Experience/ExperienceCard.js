import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';

import { ThemeContext } from '../../contexts/ThemeContext';

import expImgWhite from '../../assets/svg/experience/expImgWhite.svg'
import expImgBlack from '../../assets/svg/experience/expImgBlack.svg'

import './Experience.css'

function ExperienceCard({id, company, jobtitle, startYear, endYear, describe}) {

    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        experienceCard : {
            backgroundColor:theme.primary50,
            "&:hover": {
                backgroundColor:theme.primary80,
            },
        },
    }));

    const classes = useStyles();


    return (
        <Fade bottom>
            <div key={id} className={`experience-card ${classes.experienceCard}`}>
                <div className="expcard-img" style={{backgroundColor: theme.primary}}>
                    <img src={theme.type === 'light' ? expImgBlack : expImgWhite} alt="" />
                </div>
                <div className="experience-details">
                    <h4 style={{color: theme.tertiary}}>{jobtitle}</h4>
                    <h5 style={{color: theme.tertiary80}}>{company} || {startYear}-{endYear}</h5>
                    <p style={{color: theme.tertiary80}}>{describe}</p>
                </div>
            </div>
        </Fade>   
    )
}

export default ExperienceCard