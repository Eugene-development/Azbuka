const title = 'Угловые кухонные гарнитуры';
const description = 'Ознакомьтесь с нашими вариантами кухонных гарнитуров угловой формы';
const pathImg =
	'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV5/cabinets/1.jpg';

const parentPage = 'Кухни';
const parentPageLink = '/kuhni';
const currentPage = 'Угловые';

const content_Header_v3 = {
	parentPage,
	parentPageLink,
	currentPage,
	title,
	description,
	pathImg
};

const mainText = {
	titleCategory: 'Угловые',
	descriptionCategory: 'текст'
};

const dataProduct = [
	{
		name: 'Аделина',
		text: '2500/3000х2300х600/320',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/adelina.jpeg',
		alt: ''
	},
	{
		name: 'Ария',
		text: '2800/2700х2300х600/320',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/aria.jpeg',
		alt: ''
	},
	{
		name: 'Белуччи',
		text: '2500/1500х2150х600/320',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/beluchi.jpeg',
		alt: ''
	},
	{
		name: 'Элина',
		text: '2000/2500х2200х600/320',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/elina.jpeg',
		alt: ''
	},
	{
		name: 'Ясмина',
		text: '1100/3200х2200х600/320',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/iasmina.jpeg',
		alt: ''
	},
	{
		name: 'Капучино',
		text: '2800/1800х2300х600/320',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/kapuchino.jpeg',
		alt: ''
	},
	{
		name: 'Лагуна',
		text: '2200/1700х2200х600/320',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/laguna.jpeg',
		alt: ''
	},
	{
		name: 'Лиза',
		text: '2200х1800х2200х600/320',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/liza.jpeg',
		alt: ''
	},
	{
		name: 'Мария',
		text: '3300/1600х2300х600/320',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/maria.jpeg',
		alt: ''
	},
	{
		name: 'Марсель',
		text: '2200/1900х2200х600/320',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/marsel.jpeg',
		alt: ''
	},
	{
		name: 'Прага',
		text: '2000/3000х2160х600/320',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/praga.jpeg',
		alt: ''
	},
	{
		name: 'Рианна',
		text: '2200/2600х2200х600/320',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/riana.jpeg',
		alt: ''
	},
	{
		name: 'Тифани',
		text: '3900/3900х2170х600/320',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/tifani.jpeg',
		alt: ''
	},
	{
		name: 'Женева',
		text: '2400/3000х2300х600/320',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/zheneva.jpeg',
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
