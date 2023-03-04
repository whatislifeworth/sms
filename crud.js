// const query = 'INSERT INTO table_name (column1, column2, column3) VALUES ($1, $2, $3) RETURNING *';
// const values = [value1, value2, value3];

// pool.query(query, values, (error, result) => {
//   if (error) {
//     console.error(error);
//   } else {
//     console.log(result.rows[0]);
//   }
// });


// pool.query(`
//   CREATE TABLE users (
//     id SERIAL PRIMARY KEY,
//     name TEXT,
//     email TEXT
//   )
// `, (err, res) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log('Table created successfully');
//   }
//   pool.end();
// });




// const query1 = 'SELECT * FROM table_name WHERE id = $1';
// const values1 = [id];

// pool.query(query1, values1, (error, result) => {
//   if (error) {
//     console.error(error);
//   } else {
//     console.log(result.rows[0]);
//   }
// });


// const query2 = 'UPDATE table_name SET column1 = $1, column2 = $2, column3 = $3 WHERE id = $4 RETURNING *';
// const values2 = [new_value1, new_value2, new_value3, id];

// pool.query(query2, values2, (error, result) => {
//   if (error) {
//     console.error(error);
//   } else {
//     console.log(result.rows[0]);
//   }
// });

// const query3 = 'DELETE FROM table_name WHERE id = $1 RETURNING *';
// const values3 = [id];

// pool.query(query3, values3, (error, result) => {
//   if (error) {
//     console.error(error);
//   } else {
//     console.log(result.rows[0]);
//   }
// });
