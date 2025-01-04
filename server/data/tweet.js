import express from 'express';
import 'express-async-errors';

let tweets = [
  {
    id: '1',
    text: 'Lets gooooooooooooo',
    createdAt: Date.now().toString(),
    name: 'Chulasync ',
    username: 'ChulJJA',
    url: '',
  },
  {
    id: '2',
    text: 'wassup',
    createdAt: Date.now().toString(),
    name: 'Seung',
    username: 'Seung',
    url: '',
  },
];

export async function getAll() {
  return tweets;
}

export async function getAllByUsername(username) {
  return tweets.filter((tweet) => tweet.username === username);
}

export async function getById(id) {
  return tweets.find((tweet) => tweet.id === id);
}

export async function create(text, name, username) {
  const tweet = {
    id: Date.now().toString(),
    text,
    createdAt: new Date(),
    name,
    username,
  };

  tweets = [tweet, ...tweets];

  return tweet;
}

export async function update(id, text) {
  const tweet = tweets.find((tweet) => tweet.id === id);
  if (tweet) {
    tweet.text = text;
  }

  return tweet;
}

export async function remove(id) {
  tweets = tweets.filter((tweet) => tweet.id !== id);
}
