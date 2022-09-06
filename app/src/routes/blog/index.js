import { posts_Blog_v1, title_Blog_v1, description_Blog_v1 } from './index.json';

const title = 'Мебельный блог';
const description = 'Ознакомьтесь с интересными статьями по мебельной тематике.';
const pathImg =
	'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV5/cabinets/1.jpg';

const parentPage = '';
const parentPageLink = '';
const currentPage = 'Блог';

const content_Header_v3 = {
	parentPage,
	parentPageLink,
	currentPage,
	title,
	description,
	pathImg
};

const contentBlog_v1 = {
	title_Blog_v1,
	description_Blog_v1,
	posts_Blog_v1
};
export const GET = () => {
	return {
		body: {
			content_Header_v3,
			contentBlog_v1
		}
	};
};
