const { sql } = require("../dbConnection");

exports.fetchAllDishes = async (offset, limit) => {
  const dishesList =
    await sql`select * from dishes order by dishes.id limit ${limit} offset ${offset}`;
  return dishesList;
};

exports.postNewDish = async (newDish) => {
  const { name, description, price } = newDish;

  const dish = {
    name,
    description,
    price,
  };

  const columns = Object.keys(dish);

  const dishesList = await sql`
  insert into dishes ${sql(dish, columns)}
  returning *
`;
  return dishesList[0];
};

exports.patchDish = async (id, data) => {
  const columns = Object.keys(data);

  const dishesList = await sql` update dishes set ${sql(data, columns)}
  where dishes.id = ${id}
  returning *
  `;

  return dishesList[0];
};
