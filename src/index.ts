import { User } from './models/User';

// const user = new User({ id: 1 });
// user.set({ name: 'NEW NAME', age: 99 });
// user.save();

const user = new User({ name: 'new record', age: 0 });

user.save();

// user.on('change', () => {
//   console.log('Change #1');
// });
// user.on('change', () => {
//   console.log('Change #2');
// });
// user.on('save', () => {
//   console.log('Save #1');
// });
// user.trigger('save');
