const title = 'Встроенные шкафы';
const description = 'Ознакомьтесь с нашими вариантами встроенных шкафов';
const pathImg = 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV5/cabinets/1.jpg';

const parentPage = 'Шкафы'
const parentPageLink = '/shkafy'
const currentPage = 'Встроенные'

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
        name: 'Атлас',
        text: '2700/1400х2300х600',
        img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV5/cabinets/3.jpg',
        alt: ''
    },
    {
        name: 'Дзержинск',
        text: 'mf;dv,,vlpew',
        img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV5/cabinets/5.jpg',
        alt: ''
    },
    {
        name: 'Дзержинск',
        text: 'mf;dv,,vlpew',
        img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV5/cabinets/6.jpg',
        alt: ''
    },
    {
        name: 'Дзержинск',
        text: 'mf;dv,,vlpew',
        img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV5/cabinets/7.jpg',
        alt: ''
    },
    {
        name: 'Дзержинск',
        text: 'mf;dv,,vlpew',
        img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV5/cabinets/9.JPG',
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
