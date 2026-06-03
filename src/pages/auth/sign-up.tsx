import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router';
import { toast } from 'sonner';
import * as zod from 'zod';

import { registerRestaurant } from '@/api/register-restaurant';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const signUpFormSchema = zod.object({
  restaurantName: zod.string(),
  managerName: zod.string(),
  phone: zod.string(),
  email: zod.email(),
});

type SignUpFormData = zod.infer<typeof signUpFormSchema>;

export function SignUp() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      email: '',
    },
  });

  const { mutateAsync: registerFn } = useMutation({
    mutationFn: registerRestaurant,
  });

  const handleSignUp = async (data: SignUpFormData) => {
    try {
      await registerFn(data);
      toast.success('Restaurante cadastrado com sucesso!', {
        action: {
          label: 'Login',
          onClick: () => navigate(`/sign-in?email=${data.email}`),
        },
      });
    } catch {
      toast.error('Erro ao cadastrar restaurante');
    }
  };

  return (
    <>
      <Helmet title="Cadastro | pizza.shop" />
      <div className="p-8">
        <Button
          asChild
          variant="outline"
          className="absolute top-8 right-8"
        >
          <Link to="/sign-in">Fazer login</Link>
        </Button>

        <div className="flex w-87.5 flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Criar conta grátis
            </h1>
            <p className="text-muted-foreground text-sm">
              Seja um parceiro e comece suas vendas!
            </p>
          </div>

          <form
            onSubmit={handleSubmit(handleSignUp)}
            className="space-y-4"
          >
            <div className="space-y-2">
              <Label htmlFor="restaurantName">Nome do estabelecimento</Label>
              <Input
                id="restaurantName"
                type="text"
                {...register('restaurantName')}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="managerName">Seu nome</Label>
              <Input
                id="managerName"
                type="text"
                {...register('managerName')}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Seu celular</Label>
              <Input
                id="phone"
                type="tel"
                {...register('phone')}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input
                id="email"
                type="email"
                {...register('email')}
              />
            </div>

            <Button
              className="w-full cursor-pointer"
              type="submit"
              disabled={isSubmitting}
            >
              Finalizar cadastro
            </Button>

            <p className="text-muted-foreground px-6 text-center text-sm leading-relaxed">
              Ao continuar, você concorda com nossos{' '}
              <a
                href="#"
                className="underline underline-offset-4"
              >
                termos de serviço
              </a>{' '}
              e{' '}
              <a
                href="#"
                className="underline underline-offset-4"
              >
                politicas de privacidade
              </a>
              .
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
