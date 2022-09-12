import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import '../../components/buttons/buttons.scss';
import './homePage.scss';

const HomePage = () => {

	return (
		<>
			<Header />
			<div className="hero">
				<div className="hero__wrapper">
					<form className="hero__form form">
						<h1 className="form__title">Найдём номера под ваши пожелания</h1>
						<div className="form__datepicker">
							<label htmlFor="arrival" className="form__label" >
								прибытие
								<input type="date" className="form__input" id='arrival' />
							</label>
							<label htmlFor="exit" className="form__label">
								выезд
								<input type="date" className="form__input" id='exit' />
							</label>
						</div>
						<label htmlFor="guests" className="form__label form__label_select">
							гости
							<select className="form__input form__input_select" id='guests'>
								<option value="guests" disabled selected>Сколько гостей</option>
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
							</select>
						</label>
						<button className="form__button button button_primary button_with_arrow">подобрать номер</button>
					</form>
					<p className="hero__text">
						Лучшие номера для вашей работы, отдыха и просто вдохновения
					</p>
				</div>
			</div>
			<Footer />
		</>
	)
}

export default HomePage;