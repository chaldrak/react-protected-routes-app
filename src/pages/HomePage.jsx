import useAuth from "../hooks/useAuth";

const HomePage = () => {
  const { auth } = useAuth();
  return (
    <div className="flex h-[89vh] items-center justify-center bg-[url('../assets/bg.png')] bg-cover bg-center bg-no-repeat py-10">
      <div className="flex h-24 w-1/2 justify-end rounded-full bg-white shadow-[0_0_10px_black]"></div>
    </div>
  );
};

export default HomePage;
