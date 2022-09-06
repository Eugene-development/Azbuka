const title = 'Офисные шкафы';
const description = 'Ознакомьтесь с нашими вариантами офисных шкафов';
const pathImg =
	'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV5/cabinets/1.jpg';

const parentPage = 'Шкафы';
const parentPageLink = '/shkafy';
const currentPage = 'Офисные';

const content_Header_v3 = {
	parentPage,
	parentPageLink,
	currentPage,
	title,
	description,
	pathImg
};

const mainText = {
	titleCategory: 'Офисные',
	descriptionCategory: 'текст'
};

const dataProduct = [];

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
