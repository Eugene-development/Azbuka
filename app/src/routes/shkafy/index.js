const title = 'Шкафы в Нижнем Новгороде';
const description = 'Шкафы в Нижнем Новгороде под ваши размеры. Дизайн проект в подарок.';
const pathImg =
    'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV5/cabinets/1.jpg';

const content_Header_v3 = {
    title,
    description,
    pathImg
};

export const GET = () => {
    return {
        body: {
            content_Header_v3
        }
    };
};
