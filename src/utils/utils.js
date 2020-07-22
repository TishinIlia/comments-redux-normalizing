import { normalize, schema } from 'normalizr';



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

const articlesNormalizedData = (data) => normalize([data], mySchemaArticles);
const commentsNormalizedData = (data) => normalize(data, mySchemaComments);

export const articleAPI = {
  get: () => fetch(`https://api.jsonbin.io/b/5f17a990c1edc466175bdd1f`)
              .then(response => response.json())
              .then(res => articlesNormalizedData(res.data))
};

export const commentsAPI = {
  get: () => fetch(`https://api.jsonbin.io/b/5f17aa2bc1edc466175bdd7c`)
              .then(response => response.json())
              .then(res => commentsNormalizedData(res.data))
};
