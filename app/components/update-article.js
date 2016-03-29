import Ember from 'ember';

export default Ember.Component.extend({
  updateArticleForm: false,
  actions: {
    updateArticleForm() {
      this.set('updateArticleForm', true);
    },
    update(article) {
      var params = {
        image: this.get('image'),
        title: this.get('title'),
        author: this.get('author'),
        tagline: this.get('tagline'),
        content: this.get('content'),
      };
      this.set('updateArticleForm', false);
      this.sendAction('update', article, params);
    }
  }
});
