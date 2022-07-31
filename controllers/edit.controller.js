import Article from '../models/article.model.js';

export async function get(req, res, next) {
  try {
    const { id } = req.params;

    const article = await Article.findById(id);

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
    const { id } = req.params;
    const { title, content } = req.body;

    const article = await Article.findByIdAndUpdate(
      id,
      {
        title,
        content
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
