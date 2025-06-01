import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from '../../Components/Header/Header';
import './Contacts.scss';
import { Footer } from '../../Components/Footer/Footer';

export function Contacts() {
  return (
      <div className="contacts-page">
        <Header />
        <main className="contacts-content">
          <h1 className='contacts-title'>Контакты</h1>

          <h2 className='contacts-subtitle'>
            ООО «Movido» <br /><br />
            Адрес: 161343, Россия, г. Москва, ул. Примерная, д. 123, офис 456 <br /><br />
            Телефон: +7 (495) 123-45-67 <br /><br />
            По вопросам сотрудничества: partners@wink.ru <br /><br />
            Служба поддержки: support@movido.com или звоните нам по телефону в рабочее время.
          </h2>
        </main>
        <Footer />
      </div>
  );
}
