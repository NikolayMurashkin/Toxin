import Logo from '../../assets/img/Logo.svg';
import Twitter from '../../assets/icons/twitter.svg';
import Facebook from '../../assets/icons/facebook.svg';
import Instagram from '../../assets/icons/instagram.svg';
import './footer.scss';


const Footer = () => {
	return (
		<>
			<div className="footer">
				<div className="footer__wrapper">
					<div className="footer__info">
						<a href="/" className="footer__logo">
							<img src={Logo} alt="toxin logo" />
						</a>
						<p className="footer__text">
							Бронирование номеров в лучшем отеле 2019 года по версии ассоциации «Отельные взгляды»
						</p>
					</div>
					<nav className="footer__links links">
						<ul className="links__list">
							<li className="links__link links__link_title">навигация</li>
							<li className="links__link">О нас</li>
							<li className="links__link">Новости</li>
							<li className="links__link">Служба поддержки</li>
							<li className="links__link">Услуги</li>
						</ul>
						<ul className="links__list">
							<li className="links__link links__link_title">О нас</li>
							<li className="links__link">О сервисе</li>
							<li className="links__link">Наша команда</li>
							<li className="links__link">Вакансии</li>
							<li className="links__link">Инвесторам</li>
						</ul>
						<ul className="links__list">
							<li className="links__link links__link_title">служба поддержки</li>
							<li className="links__link">Соглашения</li>
							<li className="links__link">Сообщества</li>
							<li className="links__link">Связь с нами</li>
						</ul>
					</nav>
					<div className="footer__subscribe subscribe">
						<h2 className="subscribe__title">подписка</h2>
						<p className="subscribe__text">Получайте специальные предложения и новости сервиса</p>
						<input type="email" className="subscribe__input" placeholder='E-mail' />
					</div>
				</div>
			</div>
			<div className="subfooter">
				<div className='subfooter__wrapper'>
					<p className="subfooter__copyright">Copyright © 2018 Toxin отель. Все права защищены.</p>
					<div className="subfooter__socials socials">
						<a href="www.twitter.com" className="socials__twitter">
							<img src={Twitter} alt="Twitter" />
						</a>
						<a href="www.facebook.com" className="socials__facebook">
							<img src={Facebook} alt="Facebook" />
						</a>
						<a href="www.instagram.com" className="socials__instagram">
							<img src={Instagram} alt="Instagram" />
						</a>
					</div>
				</div>
			</div>
		</>
	)
}

export default Footer;