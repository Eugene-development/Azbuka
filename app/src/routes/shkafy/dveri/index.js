const title = 'Двери купе';
const description = 'Ознакомьтесь с нашими вариантами дверей купе для ниш помещений';
const pathImg = 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV5/cabinets/1.jpg';

const content_Header_v3 = {
    title,
    description,
    pathImg
};







const mainText = {
    titleCategory: 'Двери',
    descriptionCategory: 'текст'
};

const dataProduct = [
    {
        name: '',
        text: '',
        img: 'https://storage.yandexcloud.net/brand-logo/',
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
