import PocketBase from 'pocketbase'

const pb = new PocketBase('http://127.0.0.1:8090');

const records = await pb.collection('posts').getFullList({
    sort: '-created',
});


// const newRecord = await pb.collection('posts').create({
//     title: 'Hello World',
//     content: 'This is my first post',
// });

console.log(records[0].title)
