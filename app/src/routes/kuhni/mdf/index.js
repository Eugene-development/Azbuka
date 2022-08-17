const title = 'Кухонные гарнитуры МДФ';
const description = 'Ознакомьтесь с нашими вариантами кухонных гарнитуров с фасадами МДФ';
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
        name: 'Мария',
        text: '3300/1600х2300х600',
        img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/maria.jpeg',
        alt: ''
    },
    {
        name: 'Астра',
        text: 'размер',
        img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/astra.jpeg',
        alt: ''
    },
    {
        name: 'Елена',
        text: 'размер',
        img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/elina.jpeg',
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
