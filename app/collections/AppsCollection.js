AppsCollection = new Mongo.Collection('apps');
AppsCollection.attachSchema(new SimpleSchema({
  name: {
    type: String,
    label: 'Application Name',
    max: 256,
    index: true,
    unique: true
  },
  version: {
    type: String,
    label: 'Version number',
    optional: true
  }
}));
