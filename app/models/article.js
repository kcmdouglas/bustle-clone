import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  category: DS.attr(),
  author: DS.attr(),
  image: DS.attr(),
  content: DS.attr(),
  timestamp: DS.attr()
});
