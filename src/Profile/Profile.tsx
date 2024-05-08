import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import './Profile.scss'

export function Profile() {
    return (

        <>
            <Header/>

            <h1 className='cabinet-title'>Личный кабинет</h1>

            <div className='info-cabinet'>
                <span>
                    <h3 className='info-title' >Логин</h3> 
                    <h4 className='info-ans'>ALFzz</h4>
                </span>

                <span>
                    <h3 className='info-title' >Почта</h3> 
                    <h4 className='info-ans'>qiranem@gmail.com</h4>
                </span>
            </div>



            {/* <Footer/> */}
        </>
    )
}