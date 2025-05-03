import AuthRedirect from "@/components/AuthRedirect";

export default function Home() {
  return (
    <AuthRedirect>
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Cashierly</h1>
          <p>Loading...</p>
        </div>
      </div>
    </AuthRedirect>
  );
}
