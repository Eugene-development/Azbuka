const address = 'Нижний Новгород, Гордеевская 7, ТЦ "Мебельный Базар"'
const phones = [
    {
        phone: '8 (930) 671-14-55',
        name: 'Менеджер'
    }
];
const emails = [
    {
        email: 'indexpro24@gmail.com'
    }
];

const content_Contact_v1 = {
    address,
    phones,
    emails
};


const title = 'Контакты';
const description = 'Связаться с нами вы можете по почте, телефону или через чат.';
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
            content_Header_v3,
            content_Contact_v1
        }
    };
};
