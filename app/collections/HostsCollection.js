HostsCollection = new Mongo.Collection('hosts');
HostsCollection.attachSchema(new SimpleSchema({
  hostname: {
    type: String,
    label: "Unique Hostname",
    max: 256,
    index: true,
    unique: true,
    regEx: /(?=^.{1,254}$)(^(?:(?!\d+\.)[a-zA-Z0-9_\-]{1,63}\.?)+(?:[a-zA-Z]{2,})$)/
  },
  ip: {
    type: String,
    label: "IP Address",
    index: true,
    unique: true,
    regEx: /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
  },
  status: {
    type: String,
    label: "host status",
    optional: true
  },
  lastSeen: {
    type: Date,
    label: "Last time host was seen",
    optional: true
  }
}));
