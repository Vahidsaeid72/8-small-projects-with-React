import './Accordion.css';
import Question from './question';
import myData from './date';

const Accordion = () => {
    return ( 
    <div className="mybackgrund">
        <div className="mycontainer">
            <h3>آیا سوالی برایتان پیش آمده؟</h3>
            <div className="info">
                {myData.map((md) => (
                <Question key={md.id} {...md}/>
                    ))}
            </div>
        </div>
    </div>
     );
}
 
export default Accordion;