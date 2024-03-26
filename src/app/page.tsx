import paths from '@/app/paths';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-2">
      <h1>Welcome to Badger</h1>
      <h2>
        <Link href={paths.about()}>About</Link>
      </h2>
    </div>
  );
}
