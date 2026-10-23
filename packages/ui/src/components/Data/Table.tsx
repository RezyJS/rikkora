import { forwardRef, type ComponentPropsWithoutRef } from 'react';
import { cn } from '../../lib/cn';
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
