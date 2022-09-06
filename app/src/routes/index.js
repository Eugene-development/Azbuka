const info = 'Мы открыты';
const link = {
	value: 'Посетите наши офисы',
	path: 'contacts'
};

const H1 = `
<h1 class="mt-4 tracking-tight font-extrabold text-white sm:mt-5 sm:leading-none lg:mt-6 text-4xl lg:text-4xl xl:text-5xl antialiased">
<span class="md:block">Шкафы купе и <br /> кухонные гарнитуры</span>
<span class="pb-3 block bg-clip-text text-transparent bg-gradient-to-r from-green-200 to-cyan-400 sm:pb-5">под заказ <br /> от производителей</span>
</h1>
`;

const text_1 =
	'Шкафы купе по низким ценам и с разными вариантами установки дверей. Вы можете заказать у нас как шкаф эконом сегмента так и премиальный вариант. Также вы можете приобрести только внутреннее наполнение или сами двери купе.';
const text_2 =
	'Если вы хотите приобрести кухонный гарнитур недорого и с высоким качеством, то предлагаем сделать это у нас. Мы предоставим оптимальное соотношение качества и цены на кухонные гарнитуры вне зависимости от ценовой категории.';

const header = 'Экспресс заявка на замер';

const contentForm_v1 = {
	header
};

const contentMain_v1 = {
	contentForm_v1,
	info,
	link,
	H1,
	text_1,
	text_2
};

const benefits_1 = [
	{
		value: 'Дизайн-проект гарнитура'
	},
	{
		value: 'Столешницы постформинг или жидкий камень'
	},
	{
		value: 'Высоту навесных ящиков под потолок'
	},
	{
		value: 'Монтаж и подключение встраиваемой техники'
	},
	{
		value: 'Подвеска навесных шкафов на шину или уголки'
	},
	{
		value: 'Стеновые панели с фотопечатью из закалённого стекла'
	}
];

const benefits_2 = [
	{
		value: 'Дизайн-проект шкафа'
	},
	{
		value: 'Нижнеопорная или подвесная система направляющих'
	},
	{
		value: 'Втраиваемую или корпусную структуру каркаса'
	},
	{
		value: '4-х шарнирные петли для регулирования дверок'
	},
	{
		value: 'Сетчатые корзины или ящики на направляющих'
	},
	{
		value: 'Фотопечать или пескоструйные рисунки на дверях'
	}
];

const contentMarketing_v1 = {
	img_1: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV1/kitchen.jpeg',
	alt_1: 'Кухонный гарнитур на заказ в Нижнем Новгороде',
	img_2: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV1/shkaf.jpeg',
	alt_2: 'Шкаф купе на заказ в Нижнем Новгороде',
	title: 'Мебель на заказ от ведущих производителей',
	description:
		'Мы сотрудничаем только с проверенными производителями корпусной мебели, дающие гарантии качества и адекватные цены.',
	benefits_1,
	benefits_2
};

const posts_Blog_v1 = [
	{
		id: 1,
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/shkafi/komfort-6.jpeg',
		alt: '',
		title: 'Как правильно выбрать шкаф купе для спальни',
		description:
			'Помимо удобной кровати или трельяжа в спальной комнате неизменно присутствуют и другие предметы мебели таки...',
		avatar:
			'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		author: 'Евгений Че',
		date: '10 Мая, 2022'
	},
	{
		id: 2,
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/elina.jpeg',
		alt: '',
		title: 'Современный кухонный гарнитур на заказ',
		description:
			'Кухня в любом доме или квартире является олицетворением домашнего очага и уюта. Это объясняет тот факт, что...',
		avatar:
			'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		author: 'Евгений Че',
		date: '12 июня, 2022'
	},
	{
		id: 3,
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/shkafi/komfort-4.jpeg',
		alt: '',
		title: 'Шкафы купе с фотопечатью на стекле',
		description:
			'Компании зачастую предлагают вам изготовление шкафов-купе и встроенных шкафов с дверками с фотопечатью. Это...',
		avatar:
			'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		author: 'Евгений Че',
		date: '6 июля, 2022'
	}
];
const contentBlog_v1 = {
	title_Blog_v1: 'Статьи нашего блога',
	description_Blog_v1:
		'Интересные посты о тенденциях, материалах, компаниях и в целом о мебельной индустрии в нашей стране и за рубежом',
	posts_Blog_v1
};

const contentMarketing_v2 = {
	title_Marketing_v2: 'Вы производитель корпусной мебели?',
	description_Marketing_v2:
		'Если вы заинтересованы в продвижении ваших услуг и/или продукции в нашем регионе и гарантируете качество и конкурентную цену, то ждём от вас взимовыгодных предложений о сотрудничестве.',
	img_Marketing_v2:
		'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV2/partner.jpeg',
	alt_Marketing_v2: '',
	link_Marketing_v2: 'contacts'
};

export const GET = () => {
	return {
		body: {
			contentMain_v1,
			contentMarketing_v1,
			contentBlog_v1,
			contentMarketing_v2
		}
	};
};
