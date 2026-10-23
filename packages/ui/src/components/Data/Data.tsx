import { forwardRef, type ComponentPropsWithoutRef } from 'react';
import { IconChevronLeft, IconChevronRight, IconDots } from '@tabler/icons-react';
import { cn } from '../../lib/cn';
import { Button } from '../Button';
import styles from './Data.module.css';

export type TableProps = ComponentPropsWithoutRef<'table'>;
export type TableHeadProps = ComponentPropsWithoutRef<'thead'>;
export type TableBodyProps = ComponentPropsWithoutRef<'tbody'>;
export type TableFootProps = ComponentPropsWithoutRef<'tfoot'>;
export type TableRowProps = ComponentPropsWithoutRef<'tr'>;
export type TableHeaderProps = ComponentPropsWithoutRef<'th'>;
export type TableCellProps = ComponentPropsWithoutRef<'td'>;
export type TableCaptionProps = ComponentPropsWithoutRef<'caption'>;
const TableRoot = forwardRef<HTMLTableElement, TableProps>(function TableRoot({ className, ...props }, ref) {
  return <table {...props} ref={ref} className={cn(styles.table, className)} />;
});
const Head = forwardRef<HTMLTableSectionElement, TableHeadProps>(function TableHead(props, ref) { return <thead {...props} ref={ref} />; });
const Body = forwardRef<HTMLTableSectionElement, TableBodyProps>(function TableBody(props, ref) { return <tbody {...props} ref={ref} />; });
const Foot = forwardRef<HTMLTableSectionElement, TableFootProps>(function TableFoot(props, ref) { return <tfoot {...props} ref={ref} />; });
const Row = forwardRef<HTMLTableRowElement, TableRowProps>(function TableRow(props, ref) { return <tr {...props} ref={ref} />; });
const Header = forwardRef<HTMLTableCellElement, TableHeaderProps>(function TableHeader({ scope = 'col', ...props }, ref) { return <th {...props} scope={scope} ref={ref} />; });
const Cell = forwardRef<HTMLTableCellElement, TableCellProps>(function TableCell(props, ref) { return <td {...props} ref={ref} />; });
const Caption = forwardRef<HTMLTableCaptionElement, TableCaptionProps>(function TableCaption(props, ref) { return <caption {...props} ref={ref} />; });
export const Table = { Root: TableRoot, Head, Body, Foot, Row, Header, Cell, Caption };

export interface PaginationProps extends Omit<ComponentPropsWithoutRef<'nav'>, 'onChange' | 'children'> {
  page: number;
  pageCount: number;
  onPageChange: (page: number) => void;
  disabled?: boolean;
  siblingCount?: number;
  previousLabel?: string;
  nextLabel?: string;
  getPageLabel?: (page: number) => string;
}
export const Pagination = forwardRef<HTMLElement, PaginationProps>(function Pagination(
  { page, pageCount, onPageChange, disabled = false, siblingCount = 1, previousLabel = 'Previous page',
    nextLabel = 'Next page', getPageLabel = (number) => `Page ${number}`, className, 'aria-label': label = 'Pagination', ...props }, ref,
) {
  const count = Number.isFinite(pageCount) ? Math.max(0, Math.floor(pageCount)) : 0;
  const current = Number.isFinite(page) ? Math.max(1, Math.min(count || 1, Math.floor(page))) : 1;
  const siblings = Number.isFinite(siblingCount) ? Math.max(0, Math.min(5, Math.floor(siblingCount))) : 1;
  const visible = new Set<number>();
  if (count > 0) {
    visible.add(1); visible.add(count);
    for (let number = Math.max(1, current - siblings); number <= Math.min(count, current + siblings); number++) visible.add(number);
  }
  const pages = [...visible].sort((a, b) => a - b);
  return <nav {...props} ref={ref} aria-label={label} className={cn(styles.pagination, className)}>
    <Button variant='ghost' aria-label={previousLabel} disabled={disabled || current <= 1 || count === 0}
      onClick={() => onPageChange(current - 1)}><IconChevronLeft className={styles.directionIcon} size='var(--rkr-spacing-4)' stroke={2} aria-hidden='true' focusable='false' /></Button>
    {pages.map((number, index) => <span key={number} className={styles.pageItem}>
      {index > 0 && number - pages[index - 1] > 1 && <span aria-hidden='true' className={styles.ellipsis}><IconDots size='var(--rkr-spacing-4)' stroke={2} aria-hidden='true' focusable='false' /></span>}
      <Button variant={number === current ? 'primary' : 'ghost'} aria-label={getPageLabel(number)}
        aria-current={number === current ? 'page' : undefined} disabled={disabled}
        onClick={() => { if (number !== current) onPageChange(number); }}>{number}</Button>
    </span>)}
    <Button variant='ghost' aria-label={nextLabel} disabled={disabled || current >= count}
      onClick={() => onPageChange(current + 1)}><IconChevronRight className={styles.directionIcon} size='var(--rkr-spacing-4)' stroke={2} aria-hidden='true' focusable='false' /></Button>
  </nav>;
});
