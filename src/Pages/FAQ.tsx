import 'bootstrap/dist/css/bootstrap.min.css';
import faq from '../faq.json'
import { Answer } from '../Components/Answer/Answer';


export function FAQ() {
//   const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        {faq.map(faq => <Answer question={faq.question} answer={faq.answer}  />)}

      </div>

    

    </>
  )
}