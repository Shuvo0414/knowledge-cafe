import profile from "../.././assets/images/profile.png";

const Header = () => {
  return (
    <header className=" flex justify-between items-center container mx-auto px-8 md:px-10 lg:px-24 p-5 my-10 border-b-2">
      <h1 className=" text-5xl font-bold">Knowledge Cafe</h1>
      <img src={profile} alt="" />
    </header>
  );
};

export default Header;
