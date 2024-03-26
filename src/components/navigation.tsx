import paths from '@/app/paths';
import {
  Button,
  Image,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
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
          <Link href="#">Login</Link>
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
