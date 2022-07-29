import Article from '../models/article.model.js';

export async function getOne(req, res, next) {
  try {
    const article = await Article.findById(req.params.id);

    res.render('view.njk', { article, title: 'View article' });
  } catch (e) {
    next(e);
  }
}
