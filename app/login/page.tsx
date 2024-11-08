import Image from "next/image";
import { Button } from "../_components/ui/button";
import { LogInIcon } from "lucide-react";

const LoginPage = () => {
  return (
    <div className="grid h-full grid-cols-2">
      <div className="mx-auto flex h-full max-w-[570px] flex-col justify-center p-8">
        <div className="flex justify-center">
          <Image
            className="mb-8"
            src="/logo.svg"
            width={200}
            height={170}
            alt="Money Sense App"
          />
        </div>
        <h1 className="mb-3 text-4xl font-bold">Bem Vindo !</h1>
        <p className="mb-8 text-muted-foreground">
          A Money Sense é uma plataforma de gestão financeira que utiliza IA
          para monitorar suas movimentações, e oferecer insights personalizados,
          facilitando o controle do seu orçamento.
        </p>
        <Button variant="outline">
          <LogInIcon className="mr-2" />
          Fazer Login ou criar conta
        </Button>
      </div>

      <div className="relative h-full w-full">
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
