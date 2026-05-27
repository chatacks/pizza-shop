import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react';

import { Button } from './ui/button';

interface PaginationProps {
  pageIndex: number;
  totalCount: number;
  perPage: number;
  onPageChange: (pageIndex: number) => Promise<void> | void;
}

export function Pagination({
  pageIndex,
  totalCount,
  perPage,
  onPageChange,
}: PaginationProps) {
  const pages = Math.ceil(totalCount / perPage) || 1;

  const disabledFirstPage = pageIndex === 0;
  const disabledLastPage = pages <= pageIndex + 1;

  return (
    <div className="flex items-center justify-between">
      <span className="text-muted-foreground text-sm">
        Total de {totalCount} iten(s)
      </span>

      <div className="flex items-center gap-4 lg:gap-8">
        <div className="text-sm font-medium">
          <div className="flex items-center gap-2">
            <span>
              Página {pageIndex + 1} de {pages}
            </span>
            <Button
              className="h-8 w-8 p-0"
              variant="outline"
              onClick={() => onPageChange(0)}
              disabled={disabledFirstPage}
            >
              <ChevronsLeft className="h-4 w-4" />
              <span className="sr-only">Primeira página</span>
            </Button>
            <Button
              className="h-8 w-8 p-0"
              variant="outline"
              onClick={() => onPageChange(pageIndex - 1)}
              disabled={disabledFirstPage}
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Página anterior</span>
            </Button>
            <Button
              className="h-8 w-8 p-0"
              variant="outline"
              onClick={() => onPageChange(pageIndex + 1)}
              disabled={disabledLastPage}
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Próxima página</span>
            </Button>
            <Button
              className="h-8 w-8 p-0"
              variant="outline"
              onClick={() => onPageChange(pages - 1)}
              disabled={disabledLastPage}
            >
              <ChevronsRight className="h-4 w-4" />
              <span className="sr-only">Última página</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
