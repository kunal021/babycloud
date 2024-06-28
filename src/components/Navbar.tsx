import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function Navbar() {
  return (
    <div className="flex justify-between items-center m-5">
      <div>
        <p className="text-red-500 text-3xl font-black font-sans">Witt</p>
      </div>
      <div className=" hidden md:flex justify-start items-start gap-10 mx-auto font-medium">
        <Link href={"#"}>Home</Link>
        <Link href={"#"}>Pricing</Link>
        <Link href={"#"}>Blog</Link>
        <Link href={"#"}>FAQs</Link>
        <Link href={"#"}>About Us</Link>
      </div>
      <div className="md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger className="bg-red-400 text-white font-medium rounded-xl px-4 py-2 focus:outline-none mr-4">
            Menu
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <Link href={"#"}>Home</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={"#"}>Pricing</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={"#"}>Blog</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={"#"}>FAQs</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={"#"}>About Us</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

export default Navbar;
