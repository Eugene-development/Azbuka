const title = 'Модульные кухонные гарнитуры';
const description = 'Ознакомьтесь с нашими вариантами модульных кухонных гарнитуров';
const pathImg = 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV5/cabinets/1.jpg';

const content_Header_v3 = {
    title,
    description,
    pathImg
};

const mainText = {
    titleCategory: 'Заголовок',
    descriptionCategory: 'текст'
};

const dataProduct = [
    {
        name: 'Дива',
        text: '2700/1400х2300х600',
        img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/diva.jpeg',
        alt: ''
    },
    {
        name: 'Милена',
        text: 'mf;dv,,vlpew',
        img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/milena.jpeg',
        alt: ''
    },
];

const content_Marketing_v4 = {
    mainText,
    dataProduct
};

export const GET = () => {
    return {
        body: {
            content_Marketing_v4,
            content_Header_v3,
        }
    };
};
