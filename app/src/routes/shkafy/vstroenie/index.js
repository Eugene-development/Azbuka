const title = 'Встроенные шкафы';
const description = 'Ознакомьтесь с нашими вариантами встроенных шкафов';
const pathImg =
	'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV5/cabinets/1.jpg';

const parentPage = 'Шкафы';
const parentPageLink = '/shkafy';
const currentPage = 'Встроенные';

const content_Header_v3 = {
	parentPage,
	parentPageLink,
	currentPage,
	title,
	description,
	pathImg
};

const mainText = {
	titleCategory: 'Встроенные',
	descriptionCategory: 'текст'
};

const dataProduct = [
	{
		name: 'Челси',
		text: '2800х2300х500',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/shkafi/chelsi.jpeg',
		alt: ''
	},
	{
		name: 'Фикус',
		text: '1800х2200',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/shkafi/ficus.jpeg',
		alt: ''
	},
	{
		name: 'Ирис',
		text: '2400х2300',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/shkafi/iris.jpeg',
		alt: ''
	},
	{
		name: 'Люкс-10',
		text: '2900х2400х600',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/shkafi/luks-10.jpeg',
		alt: ''
	},
	{
		name: 'Люкс-3',
		text: '2300х2450х600',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/shkafi/luks-3.jpeg',
		alt: ''
	},
	{
		name: 'Мимоза',
		text: '3000х2200х600',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/shkafi/mimosa.jpeg',
		alt: ''
	},
	{
		name: 'Нарцисс',
		text: '2100х2300',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/shkafi/narciss.jpeg',
		alt: ''
	},
	{
		name: 'Санди',
		text: '2000х2400х600',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/shkafi/sandi.jpeg',
		alt: ''
	},
	{
		name: 'Мимоза',
		text: '1900х2300х600',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/shkafi/shkaffoto-2.jpeg',
		alt: ''
	},
	{
		name: 'Юнона',
		text: '2600х2400х550',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/shkafi/unona.jpeg',
		alt: ''
	},
	{
		name: 'Жасмин',
		text: '3200х2400',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/shkafi/zhasmin.jpeg',
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
