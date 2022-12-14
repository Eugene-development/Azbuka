const title = 'Прямые кухонные гарнитуры';
const description = 'Ознакомьтесь с нашими вариантами кухонными гарнитурами прямой формы';
const pathImg =
	'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV5/cabinets/1.jpg';

const parentPage = 'Кухни';
const parentPageLink = '/kuhni';
const currentPage = 'Прямые';

const content_Header_v3 = {
	parentPage,
	parentPageLink,
	currentPage,
	title,
	description,
	pathImg
};

const mainText = {
	titleCategory: 'Прямые',
	descriptionCategory: 'текст'
};

const dataProduct = [
	{
		name: 'Астра',
		text: '2600х2150х600/320',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/astra.jpeg',
		alt: ''
	},
	{
		name: 'Чикаго',
		text: '2900х2300х600/320',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/chikago.jpeg',
		alt: ''
	},
	{
		name: 'Дива',
		text: '2800х2160х600/320',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/diva.jpeg',
		alt: ''
	},
	{
		name: 'Домино',
		text: '2300х2160х600/320',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/domino.jpeg',
		alt: ''
	},
	{
		name: 'Эвелина',
		text: '2800х2300х600/320',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/evelina.jpeg',
		alt: ''
	},
	{
		name: 'Гардения',
		text: '2800х2170х600/320',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/gardenia.jpeg',
		alt: ''
	},
	{
		name: 'Лиана',
		text: '2400х2150х600/320',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/liana.jpeg',
		alt: ''
	},
	{
		name: 'Милена',
		text: '3200х2150х600/320',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/milena.jpeg',
		alt: ''
	},
	{
		name: 'Модерн',
		text: '3600х2200х600/320',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/modern.jpeg',
		alt: ''
	},
	{
		name: 'Натали',
		text: '3200х2400х600х300',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/natali.jpeg',
		alt: ''
	},
	{
		name: 'Примула',
		text: '3200х2150х600/320',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/primula.jpeg',
		alt: ''
	},
	{
		name: 'Скарлет',
		text: '2300х2160х600/320',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/scarlet.jpeg',
		alt: ''
	},
	{
		name: 'Золушка',
		text: '2500х2170х600/320',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/zolushka.jpeg',
		alt: ''
	}
];

const content_Marketing_v4 = {
	mainText,
	dataProduct
};

export const GET = () => {
	return {
		body: {
			content_Marketing_v4,
			content_Header_v3
		}
	};
};
