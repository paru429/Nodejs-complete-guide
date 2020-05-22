exports.get404 = (req, res) => {
  res.status(404).render('404', {pageTitle: 'Page Not Found'});
  // res.status(404).sendFile(path.join(rootDir, 'views', 'html', '404.html'));
};