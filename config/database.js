module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-ceppf76n6mpkfa129j00-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_a94b'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', '148fanUdCkY3Q8MsVn65QwK1giyrIBx1'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
