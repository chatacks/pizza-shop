import { Search, X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function OrderTableFilters() {
  return (
    <form className="flex items-center gap-2">
      <span className="text-sm font-semibold">Filtros:</span>
      <Input
        className="h-8 w-auto"
        placeholder="ID do pedido"
        type=""
      />
      <Input
        className="h-8 w-[320px]"
        placeholder="Nome do cliente"
        type=""
      />
      <Select defaultValue="all">
        <SelectTrigger className="h-8 w-45">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Todos status</SelectItem>
          <SelectItem value="pending">Pendente</SelectItem>
          <SelectItem value="canceled">Cancelado</SelectItem>
          <SelectItem value="processing">Processado</SelectItem>
          <SelectItem value="delivered">Entregue</SelectItem>
        </SelectContent>
      </Select>

      <Button
        className="cursor-pointer"
        variant="secondary"
        type="submit"
      >
        <Search className="h-4 w-4" />
        <span>Filtrar resultados</span>
      </Button>
      <Button
        className="cursor-pointer"
        variant="outline"
        type="button"
      >
        <X className="h-4 w-4" />
        <span>Remover filtros</span>
      </Button>
    </form>
  );
}
