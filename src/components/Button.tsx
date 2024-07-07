export default function Button({children}: {children: React.ReactNode}) {
  return (
    <button className="bg-purple-500 text-white 
          rounded-md px-4 py-2 max-w-fit
          hover:bg-purple-600 cursor-pointer">
      {children}
    </button>
  );
}