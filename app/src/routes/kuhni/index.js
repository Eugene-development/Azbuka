const title = 'Кухни в Нижнем Новгороде';
const description = 'Кухонные гарнитуры в Нижнем Новгороде. Дизайн проект в подарок.';
const pathImg =
    'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV5/cabinets/1.jpg';

const content_Header_v3 = {
    title,
    description,
    pathImg
};




const mainText = {
    h1: 'Корпусные и встраиваемые шкафы',
    title: 'Распашные шкафы и шкафы купе',
    description:
        'Рассмотрите недорогие шкафы по низким ценам, а также распашные и встроенные шкафы. Выполним заказ под ваш размер в комнату или прихожую. Предложим варианты сочетания материалов и цветов в зависимости от ваших пожеланий и ценовой политики.'
};

const img = [
    {
        path: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV5/cabinets/1.jpg',
        alt: ''
    },
    {
        path: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV5/cabinets/9.JPG',
        alt: ''
    },
    {
        path: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV5/cabinets/3.jpg',
        alt: ''
    },
    {
        path: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV5/cabinets/5.jpg',
        alt: ''
    },
    {
        path: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV5/cabinets/6.jpg',
        alt: ''
    },
    {
        path: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV5/cabinets/7.jpg',
        alt: ''
    }
];

const types = [
    {
        title: 'Шкафы купе',
        description: 'Подвесная и нижнеопорная система высокого качества',
        link: 'shkafy/kupe'
    },
    {
        title: 'Распашные',
        description: 'Двух, трёх и четырёх створчатые с выдвижными ящиками',
        link: 'shkafy/raspashnie'
    },
    {
        title: 'Встроенные',
        description: 'Безкаркасные со встраиваемыми полками влитые в нишу',
        link: 'shkafy/vstroenie'
    },
    {
        title: 'Гардеробные',
        description: 'Полнофункциональные гардеробные с любым наполнением',
        link: 'shkafy/garderobnie'
    },
    {
        title: 'Двери купе',
        description: 'В качестве перегородок или для замены старых дверей',
        link: 'shkafy/dveri'
    },
    {
        title: 'Офисные',
        description: 'Стильные и строгие варианты шкафов для офисных помещений',
        link: 'shkafy/ofisnie'
    }
];

const content_Marketing_v3 = {
    mainText,
    img,
    types
};


export const GET = () => {
    return {
        body: {
            content_Header_v3,
            content_Marketing_v3
        }
    };
};
