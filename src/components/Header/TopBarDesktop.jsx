import SearchInput from "../Search/SearchInput.jsx";

export default function TopBarDesktop() {
  return (
    <div className="hidden md:block py-2 bg-transparent backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 flex justify-end items-center">
        <div className="w-[260px]">
          <SearchInput />
        </div>
      </div>
    </div>
  );
}
