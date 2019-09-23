import { normalize, schema } from 'normalizr';

const articleData = {
    id: 1,
    title: 'Hello world',
    date: 1568620630, // UNIX timestamp
    text: `
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
      <img src="https://via.placeholder.com/150" alt="Image" />
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
    `,
  };

const commentsData = [
  {
    id: 1,
    commentText: '<p>Hello World</p>',
    name: 'Bob',
    likes: 5,
    replies: [
      {
        id: 10,
        commentText: '<p>Can you write smth better?</p>',
        name: 'Emily',
        likes: 10,
        replies: [],
      },
      {
        id: 11,
        commentText: '<p>Where does it come from?</p>',
        name: 'Emily',
        likes: 0,
        replies: [
          {
            id: 11,
            commentText: '<p>Where can I get some?</p>',
            name: 'Carl',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    commentText: '<p>Hello <strong>World</strong>! How are you today?</p>',
    name: 'John Random',
    likes: 3,
    replies: [{ id: 55, commentText: "<p>I'm fine</p>", name: 'Matt' }],
  },
  {
    id: 3,
    likes: 1,
    commentText: '<p>Lerem Ipsum.... <i>Hi</i></p>',
    name: 'Bob',
    replies: []
  },
];

const articles = new schema.Entity('article');
const mySchemaArticles = new schema.Array(articles);

const user = new schema.Entity('users');

const comments = new schema.Entity('comments', {});
const replies = new schema.Entity('replies', {});

const commentsFinal = new schema.Entity('comments', {
  comments: comments,
  name: user,
  replies: [replies]
});

const mySchemaComments = new schema.Array(commentsFinal);

const articlesNormalizedData = normalize([articleData], mySchemaArticles);
const commentsNormalizedData = normalize(commentsData, mySchemaComments);

export const articleAPI = {
  get: () =>
    new Promise(resolve => {
      setTimeout(() => resolve(articlesNormalizedData), 1000);
      console.log(articlesNormalizedData);
    }),
};

export const commentsAPI = {
  get: () =>
    new Promise(resolve => {
      setTimeout(() => resolve(commentsNormalizedData), 1500);
      console.log(commentsNormalizedData);
    }),
};
