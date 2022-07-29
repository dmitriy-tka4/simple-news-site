import Article from '../models/article.model.js';

export async function get(req, res, next) {
  try {
    let article = await Article.findById(req.params.id);

    res.render('edit.njk', { article, title: 'Edit article' });
  } catch (e) {
    next(e);
  }
}

export async function post(req, res, next) {
  if (!req.body) {
    return res.sendStatus(400);
  }

  try {
    const article = await Article.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
        content: req.body.content,
      },
      { returnDocument: 'after' }
    );

    const message = 'Successfully updated!';

    res.status(200).render('edit.njk', { article, message, title: 'Edit article' });
  } catch (e) {
    // res.status(400).json(e);
    next(e);
  }
}
