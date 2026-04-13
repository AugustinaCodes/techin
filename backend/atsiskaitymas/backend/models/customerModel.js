const { sql } = require("../dbConnection");

exports.fetchAllCustomers = async (offset, limit) => {
  const customersList =
    await sql`select * from customers order by customers.id limit ${limit} offset ${offset}`;
  return customersList;
};

exports.patchCustomer = async (id, data) => {
  const columns = Object.keys(data);

  const customersList =
    await sql`update customers set ${sql(data, columns)} where customers.id = ${id} returning *`;

  return customersList[0];
};
