import { zodResolver } from '@hookform/resolvers/zod';
import { Search, X } from 'lucide-react';
import { Controller, useForm } from 'react-hook-form';
import { useSearchParams } from 'react-router';
import * as zod from 'zod';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const orderTableFiltersSchema = zod.object({
  orderId: zod.string().optional(),
  customerName: zod.string().optional(),
  status: zod.string().optional(),
});

type OrderTableFiltersSchema = zod.infer<typeof orderTableFiltersSchema>;

export function OrderTableFilters() {
  const [searchParams, setSearchParams] = useSearchParams();

  const orderId = searchParams.get('orderId');
  const customerName = searchParams.get('customerName');
  const status = searchParams.get('status');

  const { register, handleSubmit, control, reset } =
    useForm<OrderTableFiltersSchema>({
      resolver: zodResolver(orderTableFiltersSchema),
      defaultValues: {
        orderId: orderId ?? '',
        customerName: customerName ?? '',
        status: status ?? 'all',
      },
    });

  const handleFilter = ({
    orderId,
    customerName,
    status,
  }: OrderTableFiltersSchema) => {
    setSearchParams((prevState) => {
      if (orderId) {
        prevState.set('orderId', orderId);
      } else {
        prevState.delete('orderId');
      }

      if (customerName) {
        prevState.set('customerName', customerName);
      } else {
        prevState.delete('customerName');
      }

      if (status) {
        prevState.set('status', status);
      } else {
        prevState.delete('status');
      }

      prevState.set('page', '1');

      return prevState;
    });
  };

  const handleClearFilters = () => {
    setSearchParams((prevState) => {
      prevState.delete('orderId');
      prevState.delete('customerName');
      prevState.delete('status');
      prevState.set('page', '1');
      return prevState;
    });

    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(handleFilter)}
      className="flex items-center gap-2"
    >
      <span className="text-sm font-semibold">Filtros:</span>
      <Input
        className="h-8 w-auto"
        placeholder="ID do pedido"
        {...register('orderId')}
      />
      <Input
        className="h-8 w-[320px]"
        placeholder="Nome do cliente"
        {...register('customerName')}
      />
      <Controller
        name="status"
        control={control}
        render={({ field: { name, onChange, value, disabled } }) => (
          <Select
            defaultValue="all"
            name={name}
            value={value}
            onValueChange={onChange}
            disabled={disabled}
          >
            <SelectTrigger className="h-8 w-45">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos status</SelectItem>
              <SelectItem value="pending">Pendente</SelectItem>
              <SelectItem value="canceled">Cancelado</SelectItem>
              <SelectItem value="processing">Processado</SelectItem>
              <SelectItem value="delivered">Entregue</SelectItem>
              <SelectItem value="delivering">Em entrega</SelectItem>
            </SelectContent>
          </Select>
        )}
      />

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
        onClick={handleClearFilters}
      >
        <X className="h-4 w-4" />
        <span>Remover filtros</span>
      </Button>
    </form>
  );
}
