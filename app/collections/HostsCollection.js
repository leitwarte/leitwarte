HostsCollection = new Mongo.Collection('hosts');
HostsCollection.attachSchema(new SimpleSchema({
  hostname: {
    type: String,
    label: 'Unique Hostname',
    max: 256,
    index: true,
    unique: true,
    regEx: /^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9])$/
  },
  ip: {
    type: String,
    label: 'IP Address',
    index: true,
    unique: true,
    regEx: /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
  },
  status: {
    type: String,
    label: 'host status',
    defaultValue: 'offline',
    allowedValues: ['online','offline','unknown'],
    optional: true
  },
  latency: {
    type: Number,
    label: 'Reponse time in ms',
    decimal: true,
    optional: true
  },
  lastSeen: {
    type: Date,
    label: 'Last time host was seen',
    optional: true
  }
}));
