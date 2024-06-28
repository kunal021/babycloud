function Navbar() {
  return (
    <div className="flex justify-between items-center m-5">
      <div>
        <p className="text-red-500 text-3xl font-black font-sans">Witt</p>
      </div>
      <div className="flex justify-start items-start gap-10 mx-auto font-medium">
        <p className="cursor-pointer">Home</p>
        <p className="cursor-pointer">Pricing</p>
        <p className="cursor-pointer">Blog</p>
        <p className="cursor-pointer">FAQs</p>
        <p className="cursor-pointer">About Us</p>
      </div>
    </div>
  );
}

export default Navbar;
