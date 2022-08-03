const title_Blog_v1 = 'Lorem ipsum dolor sit amet';
const description_Blog_v1 =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, provident saepe. Alias error inventore magni optio quaerat quasi repellendus temporibus!';

const posts_Blog_v1 = [
    {
        id: '#',
        img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV1/kitchen.jpeg',
        alt: '',
        title: 'From the blog\n',
        description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed',
        avatar:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        author: 'Roel Aufderehar',
        date: 'Mar 16, 2020'
    },
    {
        id: '#',
        img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV1/kitchen.jpeg',
        alt: '',
        title: 'From the blog\n',
        description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed',
        avatar:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        author: 'Roel Aufderehar',
        date: 'Mar 16, 2020'
    },
    {
        id: '#',
        img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV1/kitchen.jpeg',
        alt: '',
        title: 'From the blog\n',
        description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed',
        avatar:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        author: 'Roel Aufderehar',
        date: 'Mar 16, 2020'
    }
];
const contentBlog_v1 = {
    title_Blog_v1,
    description_Blog_v1,
    posts_Blog_v1
};
export const GET = () => {
    return {
        body: {
            contentBlog_v1,
        }
    };
};
