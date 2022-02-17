import Link from 'next/link'
import introStyles from './introdution.module.scss'



const Introduction = () => {
    return (
        <div className={introStyles.article}>
            <h1>Hello</h1>
            <p className={introStyles.p}>
                My name is Andriy Koval, and I am a front end web developer.
            </p>
            <p className={introStyles.p}>
                Currently, I’m building great web experiences at <a className={introStyles.uberflip} href="https://www.uberflip.com" rel="noindex nofollow">Uberflip</a>. 
            </p>
            <p className={introStyles.p}>
                In the last 30 days, I’ve pushed 2 commits to GitHub, sent 16 tweets, taken 198,685 steps, and visited 70 places. 
            </p>
            <p className={introStyles.p}>
                My most played album is “Valentine” by Snail Mail, and I’ve listened to 1,452 songs overall. 
            </p>
            <p className={introStyles.p}>
                I am reading 2 books at the moment: “Radical Candor: Be a Kickass Boss Without Losing Your Humanity” by Kim Malone Scott and “The Paper Menagerie and Other Stories” by Ken Liu.
            </p>

        </div>
    );
}





export default Introduction;