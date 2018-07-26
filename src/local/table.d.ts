import { Element } from "./base/element";
import { Spreadsheet, SpreadsheetData } from '../core/index';
import { Editor } from './editor';
import { Selector, DashedSelector } from './selector';
import { Resizer } from './resizer';
import { ContextMenu } from "./contextmenu";
import { Cell } from "../core/cell";
interface Map<T> {
    [key: string]: T;
}
export interface TableOption {
    height: () => number;
    width: () => number;
    mode: 'design' | 'write' | 'read';
}
export declare class Table {
    options: TableOption;
    cols: Map<Array<Element>>;
    firsttds: Map<Array<Element>>;
    tds: Map<Element>;
    ths: Map<Element>;
    ss: Spreadsheet;
    formulaCellIndexs: Set<string>;
    el: Element;
    header: Element;
    body: Element;
    fixedLeftBody: Element | null;
    editor: Editor | null;
    rowResizer: Resizer | null;
    colResizer: Resizer | null;
    contextmenu: ContextMenu | null;
    selector: Selector;
    dashedSelector: DashedSelector;
    state: 'copy' | 'cut' | 'copyformat' | null;
    currentIndexs: [number, number] | null;
    focusing: boolean;
    change: (data: SpreadsheetData) => void;
    editorChange: (v: Cell) => void;
    clickCell: (rindex: number, cindex: number, v: Cell | null) => void;
    constructor(ss: Spreadsheet, options: TableOption);
    reload(): void;
    private moveLeft;
    private moveUp;
    private moveDown;
    private moveRight;
    private moveSelector;
    setValueWithText(v: Cell): void;
    setTdWithCell(rindex: number, cindex: number, cell: Cell, autoWordWrap?: boolean): void;
    setCellAttr(k: keyof Cell, v: any): void;
    undo(): boolean;
    redo(): boolean;
    private setTdStylesAndAttrsAndText;
    copy(): void;
    cut(): void;
    copyformat(): void;
    paste(): void;
    clearformat(): void;
    merge(): void;
    insert(type: 'row' | 'col', amount: number): void;
    td(rindex: number, cindex: number): Element;
    private selectorChange;
    private selectorChangeCopy;
    private renderCell;
    private _renderCell;
    private reRenderFormulaCells;
    private setRowHeight;
    private setTdStyles;
    private setTdAttrs;
    private changeRowHeight;
    private changeRowResizer;
    private changeColResizer;
    private buildColGroup;
    private buildFixedLeft;
    private buildHeader;
    private mousedownCell;
    private editCell;
    private buildBody;
    private firsttdsPush;
}
export {};
