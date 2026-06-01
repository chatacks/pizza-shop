import { Link } from 'react-router';

export function Error() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Opss, algo acontneceu...</h1>
      <p className="text-accent-foreground">
        Um error aconteceu na aplicação, abaixo você encontra mais detalhes
      </p>
      <p className="text-accent-foreground">
        Voltar para o{' '}
        <Link
          className="text-sky-500 transition-colors hover:text-sky-600"
          to="/"
        >
          Dashboard
        </Link>
      </p>
    </div>
  );
}
