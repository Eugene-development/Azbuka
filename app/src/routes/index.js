const text = {
    mobile: 'Снижены цены на продукцию.',
    desktop: 'Хорошие новости! Снижены цены на продукцию.'
};
const link = {
    value: 'Подробнее ->',
    path: '#'
};

const content_Banner_v1 = {
    text,
    link
};

export const GET = () => {
    return {
        body: {
            content_Banner_v1
        }
    };
};
