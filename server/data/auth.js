import { getUsers } from '../database/database.js';
import MongoDB from 'mongodb';

const ObjectId = MongoDB.ObjectId;
export async function findByUsername(username) {
  return getUsers().findOne({ username }).then(mapOptionalUser);
}

export async function findById(id) {
  return getUsers()
    .findOne({ _id: ObjectId.createFromHexString(id) })
    .then(mapOptionalUser);
}

export async function createUser(user) {
  return getUsers()
    .insertOne(user)
    .then((data) => data.insertedId.toString());
}

function mapOptionalUser(user) {
  return user ? { ...user, id: user._id.toString() } : user;
}
