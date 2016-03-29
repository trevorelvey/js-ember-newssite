import Ember from 'ember';

export default Ember.Component.extend({
  updateArticleForm: false,
  actions: {
    update(article, params) {
      this.sendAction('update', article, params);
    },
    delete(article) {
      if(confirm("Delete?")) {
        this.sendAction('destroyArticle', article);
      }
    }
  }
});
