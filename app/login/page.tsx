import Image from "next/image";

const LoginPage = () => {
  return (
    <div className="grid-cols-2">
      <div className="h relative-full w-full">
        <Image
          src="/login.png"
          alt="faça login"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default LoginPage;
