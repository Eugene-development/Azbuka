import {posts as posts_Blog_v1} from "./index.json"

const contentBlog_v1 = {
    title_Blog_v1: 'Наш блог',
    description_Blog_v1: 'Информационные статьи на тему мебельной индустрии от отечественных и зарубежных авторов',
    posts_Blog_v1
};
export const GET = () => {
    return {
        body: {
            contentBlog_v1,
        }
    };
};
