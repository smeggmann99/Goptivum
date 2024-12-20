import { map } from "lodash";

export default {
	greeting: 'Привіт, світе',
	language: {
		name: 'Мова',
		select: 'Виберіть мову',
	},
	theme: {
		name: 'Тема',
		options: {
			dracula: 'Дракула',
			dark: 'Темна',
			light: 'Світла',
			auto: 'Автоматична',
		},
	},
	animations: {
		name: 'Зменшити анімації',
	},
	day: {
		now: 'Зараз',
		today: 'Сьогодні',
		monday: 'Понеділок',
		tuesday: 'Вівторок',
		wednesday: 'Середа',
		thursday: 'Четвер',
		friday: 'П’ятниця',
		saturday: 'Субота',
		sunday: 'Неділя',
	},
	weather: {
		temperature: 'Температура',
		weather: 'Погода',
		conditions: {
			// Група 2xx: Гроза
			'thunderstorm': 'Гроза',
			'thunderstorm with light rain': 'Гроза з легким дощем',
			'thunderstorm with rain': 'Гроза з дощем',
			'thunderstorm with heavy rain': 'Гроза з сильним дощем',
			'light thunderstorm': 'Слабка гроза',
			'heavy thunderstorm': 'Сильна гроза',
			'ragged thunderstorm': 'Гроза з поривчастим вітром',
			'thunderstorm with light drizzle': 'Гроза з легкою мрякою',
			'thunderstorm with drizzle': 'Гроза з мрякою',
			'thunderstorm with heavy drizzle': 'Гроза з сильною мрякою',

			// Група 3xx: Мряка
			'drizzle': 'Мряка',
			'light intensity drizzle': 'Слабка мряка',
			'heavy intensity drizzle': 'Сильна мряка',
			'light intensity drizzle rain': 'Слабкий дощ з мрякою',
			'drizzle rain': 'Дощ з мрякою',
			'heavy intensity drizzle rain': 'Сильний дощ з мрякою',
			'shower rain and drizzle': 'Зливовий дощ і мряка',
			'heavy shower rain and drizzle': 'Сильний зливовий дощ і мряка',
			'shower drizzle': 'Зливова мряка',

			// Група 5xx: Дощ
			'rain': 'Дощ',
			'light rain': 'Слабкий дощ',
			'moderate rain': 'Помірний дощ',
			'heavy intensity rain': 'Сильний дощ',
			'very heavy rain': 'Дуже сильний дощ',
			'extreme rain': 'Екстремально сильний дощ',
			'freezing rain': 'Крижаний дощ',
			'light intensity shower rain': 'Слабкий зливовий дощ',
			'shower rain': 'Зливовий дощ',
			'heavy intensity shower rain': 'Сильний зливовий дощ',
			'ragged shower rain': 'Поривчастий зливовий дощ',

			// Група 6xx: Сніг
			'snow': 'Сніг',
			'light snow': 'Слабкий сніг',
			'heavy snow': 'Сильний сніг',
			'sleet': 'Дощ зі снігом',
			'light shower sleet': 'Слабкий зливовий дощ зі снігом',
			'shower sleet': 'Зливовий дощ зі снігом',
			'light rain and snow': 'Слабкий дощ і сніг',
			'rain and snow': 'Дощ і сніг',
			'light shower snow': 'Слабкий зливовий сніг',
			'shower snow': 'Зливовий сніг',
			'heavy shower snow': 'Сильний зливовий сніг',

			// Група 7xx: Атмосфера
			'mist': 'Мла',
			'smoke': 'Дим',
			'haze': 'Імла',
			'sand/dust whirls': 'Пилові/піщані вихори',
			'fog': 'Туман',
			'sand': 'Пісок',
			'dust': 'Пил',
			'volcanic ash': 'Вулканічний попіл',
			'squalls': 'Шквали',
			'tornado': 'Торнадо',

			// Група 800: Ясно
			'clear sky': 'Ясне небо',
			'clear': 'Ясно',

			// Група 80x: Хмари
			'few clouds': 'Невелика хмарність (11-25%)',
			'scattered clouds': 'Розсіяні хмари (25-50%)',
			'broken clouds': 'Рвані хмари (51-84%)',
			'overcast clouds': 'Похмуро (85-100%)',
			'clouds': 'Хмари',
		},
	},
	air_quality: {
		quality: 'Якість повітря',
		conditions: {
			very_good: 'Дуже добра',
			good: 'Добра',
			moderate: 'Помірна',
			unhealthy: 'Шкідлива',
			very_unhealthy: 'Дуже шкідлива',
			hazardous: 'Небезпечна',
		},
	},
	page: {
		title: 'GOptivum - Кращий Розклад',
		qr_code: 'QR-код',
		close: 'Закрити',
		not_found: 'Сторінку не знайдено',
		no_schedule: 'Розклад на цей день відсутній',
		no_divisions: 'Класів не знайдено',
		no_teachers: 'Вчителів не знайдено',
		no_rooms: 'Кімнат не знайдено',
		divisions_error: 'Помилка завантаження класів',
		teachers_error: 'Помилка завантаження вчителів',
		rooms_error: 'Помилка завантаження кімнат',
		home: 'Головна',
		map: 'Карта',
		divisions: 'Класи',
		division: 'Клас - {id}',
		teachers: 'Вчителі',
		teacher: 'Вчитель - {id}',
		rooms: 'Кімнати',
		room: 'Кімната - {id}',
		settings: 'Налаштування',
		scraper_down_title: 'Scraper не працює 💀',
		scraper_down_description: 'Схоже, що scraper не працює. Будь ласка, спробуйте пізніше.',
	},
	search: {
		division: 'Пошук класу...',
		teacher: 'Пошук вчителя...',
		room: 'Пошук кімнати...',
	},
	schedule: {
		ordered_number: '№',
		time_range: 'Час',
		lesson: 'Урок',
		room_title_prefix: 'Кімната {id}',
	}
};
