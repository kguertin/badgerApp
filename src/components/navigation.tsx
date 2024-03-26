import paths from '@/app/paths';
import {
  Button,
  Image,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@nextui-org/react';
import Link from 'next/link';

export default function Navigation() {
  return (
    <Navbar>
      <NavbarBrand>
        <Link href={paths.home()}>
          <div className=" flex flex-row items-center">
            <Image
              src={'/images/logo.png'}
              alt="A logo image of a badger"
              height={60}
              width={60}
            />
            <p className="font-bold ml-2">Badger</p>
          </div>
        </Link>
      </NavbarBrand>
      <NavbarContent>
        <NavbarItem>
          <Link href={paths.home()}>Home</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href={paths.about()}>About</Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent>
        <NavbarItem>
          <Popover>
            <PopoverTrigger>
              <Link href="#">Login</Link>
            </PopoverTrigger>
            <PopoverContent>
              <div className="px-1 py-2">
                <div className="text-small font-bold">Login</div>
                <div className="text-tiny">
                  This is where we will have the login form
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="default" href={paths.signUp()}>
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
