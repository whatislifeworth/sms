// const express = require('express');
// const router = express.Router();

// const User = require('./model/User');

// // CREATE
// router.post('/users', async (req, res) => {
//   const user = new User(req.body);

//   try {
//     await user.save();
//     res.status(201).json(user);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// // // READ
// // router.get('/users', async (req, res) => {
// //   try {
// //     const users = await User.find();
// //     res.json(users);
// //   } catch (error) {
// //     res.status(500).json({ message: error.message });
// //   }
// // });

// // UPDATE
// // router.put('/users/:id', async (req, res) => {
// //   const { id } = req.params;

// //   try {
// //     const user = await User.findById(id);

// //     if (!user) throw Error('User not found');

// //     Object.assign(user, req.body);

// //     await user.save();

// //     res.json(user);
// //   } catch (error) {
// //     res.status(400).json({ message: error.message });
// //   }
// // });

// // // DELETE
// // router.delete('/users/:id', async (req, res) => {
// //   const { id } = req.params;

// //   try {
// //     const removedUser = await User.findByIdAndDelete(id);

// //     if (!removedUser) throw Error('User not found');

// //     res.json(removedUser);
// //   } catch (error) {
// //     res.status(400).json({ message: error.message });
// //   }
// // });

// module.exports = router;
