import './header.scss';
import '../buttons/buttons.scss';
import Logo from '../../assets/img/Logo.svg';

const Header = () => {


	return (
		<div className="header">
			<div className="header__wrapper">
				<a href='/' className="header__logo">
					<img src={Logo} alt="toxin logo" />
				</a>
				<ul className="header__menu menu">
					<li className='menu__link'>О нас</li>
					<li className='menu__link menu__link_dropdown'>Услуги</li>
					<li className='menu__link'>Вакансии</li>
					<li className='menu__link'>Новости</li>
					<li className='menu__link menu__link_dropdown'>Соглашения</li>
				</ul>
				<div className="header__buttons">
					<button className="header__button button button_secondary">войти</button>
					<button className="header__button button button_primary">зарегистрироваться</button>
				</div>
			</div>
		</div>
	);
};
export default Header;
