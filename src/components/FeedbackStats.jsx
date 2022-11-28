import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

const FeedbackStats = () => {
    //Calculate ratings avg
    const {feedback} = useContext(FeedbackContext)

    let average = feedback.reduce((acc,cur) =>{
        return acc+cur.rating
    },0) / feedback.length
    //0 is default value for acc, 0+item(1)+item(2)+item(3)=27

    average = average.toFixed(1).replace(/[.,]0$/, '')
    //1 Decimala.
    //.replace(8.0)=>8
  return (
    <div className="feedback-stats">
        <h4>{feedback.length} Reviews</h4>
        <h4>Average rating : {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}
export default FeedbackStats