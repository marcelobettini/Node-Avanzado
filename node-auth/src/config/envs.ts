//adapter pattern. Here we could use dotenv, env-var to transform something or work just with native Node JS. We are decoupling logic from the files where we use this environment vars.

export const envs = {
  PORT: Number(process.env.PORT),
};
