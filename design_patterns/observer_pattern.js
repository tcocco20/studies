export const observer = () => {
  class Subject {
    observers = [];

    subscribe = (observer) => this.observers.push(observer);

    unsubscribe = (observer) =>
      (this.observers = this.observers.filter((o) => o !== observer));

    notify = (update) => this.observers.forEach((o) => o.receive(update));
  }

  class Observer {
    receive = (update) => {
      console.log(
        `${this.username} received an update from ${update.sender.username}`
      );
      console.log(
        `${update.sender.username} ${update.action} ${update.content}`
      );
    };
  }

  class Platform {
    id = 1;

    constructor(name) {
      this.name = name;
      this.users = [];
    }

    #addNewUser = (user) => this.users.push(user);

    joinAsViewer = (username, name) => {
      this.#addNewUser(new Viewer(username, name, this));
    };

    joinAsCreator = (username, name) => {
      this.#addNewUser(new ContentCreator(username, name, this));
    };

    #push = (update) => update.sender.handler.notify(update);

    createPostObject = (user, content, type) =>
      this.#push({
        sender: user,
        action: `posted a new ${type}`,
        content,
      });

    generateId = () => this.id++;

    getUser = (username) =>
      this.users.filter((u) => u.username === username)[0];
  }

  class User extends Observer {
    constructor(username, name, platform) {
      super();
      this.username = username;
      this.name = name;
      this.platform = platform;
    }
  }

  class ContentCreator extends User {
    posts = [];
    images = [];
    videos = [];

    constructor(username, name, platform) {
      super(username, name, platform);
      this.handler = new Subject();
    }

    #createPostObject = (content) => ({
      id: this.platform.generateId(),
      date: new Date(),
      content,
    });

    #push = (content, type) =>
      this.platform.createPostObject(this, content, type);

    postMessage = (message) => {
      this.#push(message, "message");
      this.posts.push(this.#createPostObject(message));
    };

    postImage = (image) => {
      this.#push(image, "image");
      this.images.push(this.#createPostObject(image));
    };

    postVideo = (video) => {
      this.#push(video, "video");
      this.videos.push(this.#createPostObject(video));
    };

    follow = (follower) => this.handler.subscribe(follower);
    unfollow = (follower) => this.handler.unsubscribe(follower);
  }

  class Viewer extends User {
    constructor(username, name, platform) {
      super(username, name, platform);
    }

    subscribeTo = (user) => user.follow(this);
    unsubscribeFrom = (user) => user.unfollow(this);
  }

  const youtube = new Platform("YouTube");
  youtube.joinAsViewer("DragonSlayer69", "Johnny");
  youtube.joinAsViewer("Draco3000", "Draco");
  youtube.joinAsViewer("KevinJames3232", "Kevin");

  youtube.joinAsCreator("Pewdiepie", "Andrew");
  youtube.joinAsCreator("Fred", "Fred");

  const dragonSlayer69 = youtube.getUser("DragonSlayer69"),
    draco3000 = youtube.getUser("Draco3000"),
    kevinJames3232 = youtube.getUser("KevinJames3232"),
    pewdiepie = youtube.getUser("Pewdiepie"),
    fred = youtube.getUser("Fred");

  dragonSlayer69.subscribeTo(pewdiepie);
  kevinJames3232.subscribeTo(pewdiepie);
  draco3000.subscribeTo(pewdiepie);

  dragonSlayer69.subscribeTo(fred);
  draco3000.subscribeTo(fred);
  kevinJames3232.subscribeTo(fred);

  kevinJames3232.unsubscribeFrom(fred);

  pewdiepie.postMessage("Watch my new obnoxious video!");
  pewdiepie.postVideo("obnoxious video");
  fred.postImage("no one cares");
};
