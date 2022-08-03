const title = 'Кухни в Нижнем Новгороде';
const description = 'Кухонные гарнитуры в Нижнем Новгороде. Дизайн проект в подарок.';
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
