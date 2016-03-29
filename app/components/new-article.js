import Ember from 'ember';

export default Ember.Component.extend({
  addNewArticle: false,
  actions: {
    articleFormShow() {
      this.set('addNewArticle', true);
    },

    save1() {
      var params = {
        image: this.get('image'),
        title: this.get('title'),
        author: this.get('author'),
        tagline: this.get('tagline'),
        content: this.get('content')
      };
      this.set('addNewArticle', false);
      this.sendAction('save2', params);
    }
  }
});
