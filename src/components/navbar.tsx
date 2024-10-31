import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 border flex items-center p-4 justify-between z-50 bg-white">
      {" "}
      {/* Fixed Positionierung */}
      <div className="flex gap-12">
        <div>LOGO</div>
        <div className="flex gap-3">
          <Link href="home">Home</Link>
          <Link href="angebot">Angebot</Link>
        </div>
      </div>
      <Button>
        <Link href="anmelden">Anmelden</Link>
      </Button>
    </div>
  );
};

export default Navbar;
