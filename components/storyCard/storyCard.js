import ScrollAnimation from 'react-animate-on-scroll';

const StoryCard = (props) => {
    return (
        <div className='story'>
            <ScrollAnimation animateIn="fadeIn">
                <div className='storyCard'>
                    {props.icon}
                    <h3>{props.title}</h3>
                    <p>{props.description}</p>
                </div>
            </ScrollAnimation>
        </div>
    );
}

export default StoryCard;