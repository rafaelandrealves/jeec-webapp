import bcrypt from 'bcrypt';
import crypto from 'crypto';

const saltRounds = 10;

export default {
  Query: {
    allWorkshops: async (parent, args, { Workshop }) => {
      const workshops = await Workshop.find();
      return workshops.map((x) => {
        x.id = x._id.toString();
        return x;
      });
    },
    getAllUsers: async (parent, args, { User }) => {
      const users = await User.find();
      return users.map((x) => {
        x.id = x._id.toString();
        return x;
      });
    },
    nukeTokens: async (parent, args, { Token }) => {
      await Token.remove();
      return "Done";
    },
    nukeUsers: async (parent, args, { User }) => {
      await User.remove();
      return "Done";
    },
  },
  Mutation: {
    createWorkshop: async (parent, args, { Workshop, User }) => {
      const user = await User.findOne({ username: args.username });
      
      if( args.token === user.token.tokenhex ) {
        const newworkshop = await new Workshop(args).save();
        newworkshop.id = newworkshop._id.toString();
        return newworkshop;
      }
    },
    createUser: async (parent, args, { User, Token }) => {
      args.password = bcrypt.hashSync(args.password, saltRounds);
      const newtokenhex = crypto.randomBytes(64).toString('hex');
      const datestring = new Date();

      const newtoken = { tokenhex: newtokenhex, date: datestring };

      const newuser = await new User({username: args.username, password: args.password, token: newtoken}).save();
      newuser.id = newuser._id.toString();
      return newuser;
    },
    getToken: async (parent, args, { Token, User }) => {
      const user = await User.findOne({ username: args.username });

      if( bcrypt.compareSync(args.password, user.password) ) {
        const newtokenhex = crypto.randomBytes(64).toString('hex');
        const datestring = new Date();

        const newtoken = { tokenhex: newtokenhex, date: datestring };

        await User.update({ username: args.username }, {token: newtoken});

        return newtoken;
      }
    },
  },
};
