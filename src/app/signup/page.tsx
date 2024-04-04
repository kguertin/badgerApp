import SignupForm from '@/components/authentication/SignupForm';

export default function AuthenticationPage() {
  return (
    <div className="container mx-auto">
      <div className="flex">
        <div className="w-1/2">
          <p>Welcome to Badger!</p>
        </div>
        <div className="w-1/2">
          <SignupForm />
        </div>
      </div>
    </div>
  );
}
