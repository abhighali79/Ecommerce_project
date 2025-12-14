import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center mb-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-primary">
          Welcome to Shopperz
        </h1>
        <p className="text-lg text-muted-foreground">
          Discover the latest trends in fashion and explore a wide range of products at the best prices.
        </p>
      </div>
      <div className="w-full max-w-md bg-white p-8 shadow-lg rounded-lg border">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;
