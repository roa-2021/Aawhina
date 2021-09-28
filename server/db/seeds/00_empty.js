exports.seed = knex => {
  const empty = (table) => knex(table).del()

  return empty('offers')
    .then(() => empty('requests'))
    .then(() => empty('users'))
    .then(() => empty('suburb'))
}