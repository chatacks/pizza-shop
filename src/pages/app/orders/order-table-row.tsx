import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale/pt-BR';
import { ArrowRight, Search, X } from 'lucide-react';
import { useState } from 'react';

import type { Order } from '@/api/get-orders';
import { Button } from '@/components/ui/button';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import { TableCell, TableRow } from '@/components/ui/table';

import { OrderDetails } from './order-details';
import { OrderStatus } from './order-status';

interface OrderTableRowProps {
  order: Order;
}

export function OrderTableRow({ order }: OrderTableRowProps) {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  return (
    <TableRow>
      <TableCell>
        <Dialog
          open={isDetailsOpen}
          onOpenChange={setIsDetailsOpen}
        >
          <DialogTrigger asChild>
            <Button
              className="cursor-pointer"
              variant="outline"
            >
              <Search className="h-3 w-3" />
              <span className="sr-only">Detalhes do pedido</span>
            </Button>
          </DialogTrigger>

          <OrderDetails
            orderId={order.orderId}
            open={isDetailsOpen}
          />
        </Dialog>
      </TableCell>
      <TableCell className="font-mono text-xs font-medium">
        {order.orderId}
      </TableCell>
      <TableCell className="text-muted-foreground">
        {formatDistanceToNow(order.createdAt, {
          addSuffix: true,
          locale: ptBR,
        })}
      </TableCell>
      <TableCell>
        <OrderStatus status={order.status} />
      </TableCell>
      <TableCell className="font-medium">{order.customerName}</TableCell>
      <TableCell className="font-medium">
        {(order.total / 100).toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </TableCell>
      <TableCell>
        <Button
          className="cursor-pointer"
          variant="outline"
        >
          <ArrowRight className="h-3 w-3" />
          Aprovar
        </Button>
      </TableCell>
      <TableCell>
        <Button
          className="cursor-pointer"
          variant="ghost"
        >
          <X className="h-3 w-3" />
          Cancelar
        </Button>
      </TableCell>
    </TableRow>
  );
}
