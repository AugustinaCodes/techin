const { sql } = require("../dbConnection");

exports.fetchAllTours = async (offset, limit) => {
    
  const toursList = await sql`select * from tours order by tours.id limit ${limit} offset ${offset}`;
  return toursList;
};


exports.fetchTourByID = async (id) => {
  const toursArray = await sql`select * from tours where tours.id =${id}`;

  return toursArray[0]; //All queries will return a Result array
};

exports.postNewTour = async (newTour) => {
  const {
    name,
    duration,
    max_group_size,
    difficulty,
    ratings_average,
    ratings_quantity,
    price,
    category_id,
  } = newTour;

  const tour = {
    name,
    duration,
    max_group_size,
    difficulty,
    ratings_average,
    ratings_quantity,
    price,
    category_id,
  };

  const columns = Object.keys(tour);

  const toursList = await sql`
  insert into tours ${sql(tour, columns)}
  returning *
`;
  return toursList[0];
};

exports.patchTour = async (id, data) => {
  //duomenų saugumas
  const columns = Object.keys(data);

  const toursList = await sql` update tours set ${sql(data, columns)}
  where tours.id = ${id}
  returning *
  `;

  return toursList[0];
};

exports.filterTours = async (filter) => {
  const { duration, difficulty, price } = filter;

  const filteredTours = await sql`
  select
   *
  from tours
  where
    duration > ${duration}
    and price > ${price}
    and difficulty = ${difficulty}
`;
  return filteredTours;
};
