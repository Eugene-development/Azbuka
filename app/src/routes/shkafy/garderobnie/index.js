const title = 'Гардеробные';
const description = 'Ознакомьтесь с нашими вариантами гардеробных различного наполнения';
const pathImg =
	'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV5/cabinets/1.jpg';

const parentPage = 'Шкафы';
const parentPageLink = '/shkafy';
const currentPage = 'Гардеробные';

const content_Header_v3 = {
	parentPage,
	parentPageLink,
	currentPage,
	title,
	description,
	pathImg
};

const mainText = {
	titleCategory: 'Гардеробные',
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
