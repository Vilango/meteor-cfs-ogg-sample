// Collections
Audios = new FS.Collection("audios", {
    stores: [new FS.Store.FileSystem("audios")]
});


if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault("counter", 0);


  Template.audios.helpers({
    counter: function () {
      return Session.get("counter");
    },
    audios: function(){
      return Audios.find();
    }

  });

  Template.audios.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set("counter", Session.get("counter") + 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    Audios.remove({});

    var fileObj;
    var fileurl = "http://www.vorbis.com/music/Mists_of_Time-4T.ogg"
    console.log("Add file do collection");
    fileObj = new FS.File();
    fileObj.attachData(fileurl);
    Audios.insert(fileObj);

    var fileObj;
    var fileurl = "http://www.noiseaddicts.com/samples/4163.mp3"
    console.log("Add file do collection");
    fileObj = new FS.File();
    fileObj.attachData(fileurl);
    Audios.insert(fileObj);


  });
}
