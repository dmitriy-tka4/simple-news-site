import Article from '../models/article.model.js';

export async function getAll(req, res, next) {
  try {
    const articles = await Article.find();
    const countItems = await Article.countDocuments();

    res.render('index.njk', { articles, countItems, title: 'News list' });
  } catch (e) {
    next(e);
  }
}
