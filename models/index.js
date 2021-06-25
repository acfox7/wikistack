const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost:5432/wikistack", {
  logging: false,
});

const Page = db.define("page", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  status: Sequelize.ENUM("open", "closed"),
});

const User = db.define("user", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isAlpha: true,
      notEmpty: true
    }
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
      notEmpty: true
    }
  },
});

module.exports = {
  db,
  Page,
  User,
};
