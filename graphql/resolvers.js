module.exports = {
  Query: {
    allUsers: async () => {
      const users = await User.find();

      return users.map(x => x);
    },
    User: (parent, args) => {
      const user = User.findById(args.id);
      if (!user) {
        console.log("erreur");
      }
      return user;
    }
  },
  Mutation: {
    createUser: async (parent, args, { User }) => {
      const user = await new User(args).save();
      return user;
    },
    addUser: async (parent, args, { User }) => {
      var user;
      await User.findById(args.id, function(err, pro) {
        user = pro;
      });
      const a = JSON.parse(JSON.stringify(args));

      user.formations.push({
        name: a.formations[0].name,
        Type: a.formations[0].Type,
        Site: a.formations[0].Site,
        Rank: a.formations[0].Rank,
        Formateur: a.formations[0].Formateur,
        startDate: a.formations[0].startDate,
        EndDate: a.formations[0].EndDate
      });
      return User.replaceOne({ _id: args.id }, user, function(err) {
        if (err) return console.log(err);
      });
    },
    addProject: async (parent, args, { User }) => {
      var user;
      await User.findById(args.id, function(err, pro) {
        user = pro;
      });
      const a = JSON.parse(JSON.stringify(args));
      user.projects.push({
        name: a.projects[0].name,
        technology: a.projects[0].technology,
        site: a.projects[0].site,
        size: a.projects[0].size,
        progress: a.projects[0].progress,
        startDate: a.projects[0].startDate,
        endDate: a.projects[0].endDate
      });
      return User.replaceOne({ _id: args.id }, user, function(err) {
        if (err) return console.log(err);
      });
    },

    updateUser: (root, params) => {
      return User.findOneAndUpdate(
        params.id,
        {
          name: params.name,
          username: params.username,
          status: params.status,
          agency: params.agency,
          gender: params.gender,
          birthday: params.birthday,
          email: params.email
        },
        function(err) {
          if (err) return next(err);
        }
      );
    },
    deleteUser: async (parent, args, { User }) => {
      var user;
      await User.findById(args.id, function(err, pro) {
        user = pro;
      });
      const a = JSON.parse(JSON.stringify(args));
      var lists = user.formations.filter(x => {
        return x.id != a.formations[0].id;
      });
      var array = user.projects.filter(x => {
        return x.id != a.projects[0].id;
      });
      return User.findOneAndUpdate(
        args.id,
        { formations: lists },
        { projects: array },
        function(err) {
          if (err) return next(err);
        }
      );
    },
    updateFormation: async (parent, args, { User }) => {
      var user;
      await User.findById(args.id, function(err, pro) {
        user = pro;
      });
      const a = JSON.parse(JSON.stringify(args));

      user.formations.map(x => {
        if (x.id == a.formations[0].id) {
          x.name = a.formations[0].name;
          x.Type = a.formations[0].Type;
          x.Site = a.formations[0].Site;
          x.Rank = a.formations[0].Rank;
          x.Formateur = a.formations[0].Formateur;
          x.startDate = a.formations[0].startDate;
          x.EndDate = a.formations[0].EndDate;
        }
      });
      return User.replaceOne({ _id: args.id }, user, function(err) {
        if (err) return next(err);
      });
    },
    updateProject: async (parent, args, { User }) => {
      var user;
      await User.findById(args.id, function(err, pro) {
        user = pro;
      });
      const a = JSON.parse(JSON.stringify(args));

      user.projects.map(x => {
        if (x.id == a.projects[0].id) {
          x.name = a.projects[0].name;
          x.technology = a.projects[0].technology;
          x.site = a.projects[0].site;
          x.progress = a.projects[0].progress;
          x.size = a.projects[0].size;
          x.startDate = a.projects[0].startDate;
          x.endDate = a.projects[0].endDate;
          x.progress = a.projects[0].progress;
        }
      });
      return User.replaceOne({ _id: args.id }, user, function(err) {
        if (err) return next(err);
      });
    }
  }
};
