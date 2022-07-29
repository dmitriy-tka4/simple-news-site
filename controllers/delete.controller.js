import Article from '../models/article.model.js';

export async function deleteArticle(req, res, next) {
  try {
    await Article.deleteOne({ _id: req.params.id });

    res.status(204).redirect('/');
  } catch (e) {
    // res.status(400).json(e);
    next(e);
  }
}
