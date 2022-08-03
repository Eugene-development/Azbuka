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
    phones,
    emails
};

export const GET = () => {
    return {
        body: {
            content_Contact_v1
        }
    };
};
