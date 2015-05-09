ConfigurationCollection = new Mongo.Collection('configuration');
ConfigurationCollection.attachSchema(new SimpleSchema({
  checkInterval: {
    type: Number,
    label: "Interval in ms for checking server availability",
    min: 2000,
    max: 60000
  }
}));
