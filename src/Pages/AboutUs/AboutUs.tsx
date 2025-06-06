import './AboutUs.scss'

export function AboutUs() {
    return (
        <div className="container">
            <div className="app">
                <main className="about-content">
                    <h1 className="about-title">О нас</h1>
                    <h2 className="about-subtitle">
                        Мы в "Movido" стремимся сделать просмотр
                        фильмов увлекательным и доступным для всех. Наша цель
                        - предоставить широкий выбор контента различных жанров и направлений
                        , чтобы каждый мог найти что-то по своему вкусу. <br/><br/>

                        "Movido" - это онлайн платформа для потоковой передачи фильмов
                        , где вы можете наслаждаться вашими любимыми произведениями
                        в любое время и в любом месте. Мы предлагаем широкий ассортимент
                        контента, включая новинки и классику мирового кино. <br/><br/>

                        В "Movido" работает команда профессионалов, преданных своему делу.
                        Мы постоянно стремимся улучшить пользовательский опыт, добавляя
                        новый контент, улучшая функциональность и обеспечивая высокий
                        уровень обслуживания.
                    </h2>

                    <div className="mockup-wrapper">
                        <img className='black-mockup' src="Mac Studio.png" alt="Mac Studio"/>
                        <img className='intouchables-mockup' src="iPad Pro 2020.png" alt="iPad Pro"/>
                        <img className='casino-mockup' src="iPhone 13.png" alt="iPhone 13"/>
                    </div>
                </main>
            </div>
        </div>

    )
}
