const title_Marketing_v5 = 'Доставка';
const text_Marketing_v5 =
	'Привозим мебель своим транспортом до адреса заказчика. Есть услуга подъёма на этаж грузчиками. Также вы можете забрать заказ самовывозом.';
const img_Marketing_v5 =
	'https://images.unsplash.com/photo-1507207611509-ec012433ff52?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80';

const content_Marketing_v5 = {
	title_Marketing_v5,
	text_Marketing_v5,
	img_Marketing_v5
};

export const GET = () => {
	return {
		body: {
			content_Marketing_v5
		}
	};
};
