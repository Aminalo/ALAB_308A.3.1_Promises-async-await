// Importing database functions. 
import { central, db1, db2, db3, vault } from "./databases";

// Part 1 scaffold: map db keys and export a function name only
export async function getUserData(id) {
  const dbs = { db1, db2, db3 };

  if (id == null) {
    throw new Error("Incorrect ID Input");
  }
}