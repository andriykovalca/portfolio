import Link from 'next/link'
import aboutmeStyles from './aboutme.module.scss'

const Aboutme = () => {
    return (
        <div className={aboutmeStyles.article}>
            <h1>Hello</h1>
            <p className={aboutmeStyles.p}>
                I’m a front-end web developer from Toronto with passion for building incredible web experiences. I enjoy challenges and finding creative solutions to solve problems thus I’m facing programing challenges with excitement.
            </p>
            <p className={aboutmeStyles.p}>
                I thrive on continuous learning and I love discovering new skills. With background in graphic design I’m able to find creative solutions for day to day problems.
            </p>
            <p className={aboutmeStyles.p}>
                When I’m not coding I am usually out with my camera or spending time with friends and family.
            </p>
        </div>
    );
}




export default Aboutme;