import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const createUser = trpc.useMutation("user.create");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    await createUser.mutateAsync({ name });
  };
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col justify-center gap-4 text-center items-center">
        <h1 className="text-red-300 font-bold text-9xl">Hello World</h1>
        <form action="" onSubmit={handleSubmit}>
          <input className="w-96" type="text" placeholder="username" />
          <button className="bg-blue-400 rounded text-white">Sign In!</button>
        </form>
      </div>
    </>
  );
};

export default Home;
