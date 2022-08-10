const apiMail = import.meta.env.VITE_API_MAIL
const apiToken = import.meta.env.VITE_TOKEN
const avatar =
    'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.5&w=160&h=160&q=80';
const nameManager = 'Татьяна Демидова';
const logo = 'https://storage.yandexcloud.net/brand-logo/azbuka-komforta/logo/logo2.png';
const slogan = 'Шкафы купе и кухонные гарнитуры на заказ';

const content = {
    apiMail,
    apiToken,
    avatar,
    nameManager,
    logo,
    slogan
};

export const content_Modal_v2 = {
    content
}
