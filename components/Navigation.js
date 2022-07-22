import Link from "next/link";

const Navigation = () => {
  return (
    <header className="bg-amber-600 flex items-center justify-around h-20 w-full px-28">
      <h1 className="text-4xl font-semibold">
        <Link href="/">NextAuthJs</Link>
      </h1>
      <div className="flex ml-auto">
        <div className="mr-8">
          <Link href="/signin">SignIn</Link>
        </div>
        <div className="mr-8">
          <Link href="/profile">Profile</Link>
        </div>
      </div>
      <button className="border-2 hover:bg-green-900 hover:text-white px-3 py-2 rounded-md">
        SignOut
      </button>
    </header>
  );
};

export default Navigation;
