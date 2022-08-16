const title = 'Встроенные кухонные гарнитуры';
const description = 'Ознакомьтесь с нашими вариантами встроенных кухонных гарнитуров';
const pathImg = 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV5/cabinets/1.jpg';

const content_Header_v3 = {
    title,
    description,
    pathImg
};


const mainText = {
    titleCategory: 'Niwoo werogjwoeirg',
    descriptionCategory: 'ититититит лтлотщ иолтолтшотшо итшотшотшотшотштштштшититититит лтлотщ иолтолтшотшо итшотшотшотшотштштштшититититит лтлотщ иолтолтшотшо итшотшотшотшотштштштшититититит лтлотщ иолтолтшотшо итшотшотшотшотштштштшититититит лтлотщ иолтолтшотшо итшотшотшотшотштштштшититититит лтлотщ иолтолтшотшо итшотшотшотшотштштштшититититит лтлотщ иолтолтшотшо итшотшотшотшотштштштш'
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
