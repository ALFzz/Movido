import './Answer.scss'

interface IFaq {
    question: string,
    answer: string
}

export const Answer = (props: IFaq) => {
    return (
        <>
            <div className='faq-block '>
               <h1 className='h1'>{props.question}</h1>
               <h2 className='h3'>{props.answer}</h2>
            </div>



        </>
    )

    
}