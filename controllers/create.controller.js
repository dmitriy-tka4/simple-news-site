import Article from '../models/article.model.js';

export async function get(req, res) {
  res.render('create.njk', { title: 'Create new article' });
}

export async function post(req, res, next) {
  if (!req.body) {
    return res.sendStatus(400);
  }

  const { title, content } = req.body;

  const article = new Article({
    title,
    content
  });

  try {
    await article.save();

    res.status(201).redirect('/');
  } catch (e) {
    // res.status(400).json(e);
    next(e);
  }
}
