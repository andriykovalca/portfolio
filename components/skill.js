import Image from 'next/image'
import skillStyles from './skillStyles.module.scss'

const Skill = (skill) => {
    return (
        <div className={skillStyles.skill}>
            <i className={skill.icon}></i>
        </div>
    );
}

export default Skill;