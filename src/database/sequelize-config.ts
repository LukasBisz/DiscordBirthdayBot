import { Sequelize } from "sequelize-typescript";
import { birthday } from "./birthday-model";

export const database = new Sequelize({
  logging: false,
  dialect: "sqlite",
  storage: "database.sqlite",
  models: [birthday],
});

export const connectToDatabase = async () => {
  try {
    await database.authenticate();
    console.log("Connection to DB has been established successfully.");

    await database.sync();
    console.log("All models were synchronized successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
