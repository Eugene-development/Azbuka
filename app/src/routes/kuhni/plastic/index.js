const title = 'Кухонные гарнитуры из пластика';
const description = 'Ознакомьтесь с нашими вариантами кухонных гарнитуров с фасадами из пластика';
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
        name: 'Гардения',
        text: '2700/1400х2300х600',
        img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/gardenia.jpeg',
        alt: ''
    },
    {
        name: 'Модерн',
        text: 'mf;dv,,vlpew',
        img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/modern.jpeg',
        alt: ''
    },
    {
        name: 'Натали',
        text: 'mf;dv,,vlpew',
        img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/natali.jpeg',
        alt: ''
    },
    {
        name: 'Скарлет',
        text: 'mf;dv,,vlpew',
        img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/scarlet.jpeg',
        alt: ''
    },
    {
        name: 'Капучино',
        text: 'mf;dv,,vlpew',
        img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/kapuchino.jpeg',
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
            content_Header_v3,
        }
    };
};
