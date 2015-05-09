HostsCollection = new Mongo.Collection('hosts');
HostsCollection.attachSchema(new SimpleSchema({
  hostname: {
    type: String,
    label: "hostname",
    max: 256
  },
  ip: {
    type: String,
    label: "ip"
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
