import { syntaxTree } from '@codemirror/language';
import { Decoration, EditorView, ViewPlugin, type ViewUpdate } from '@codemirror/view';

const quote = Decoration.mark({ class: 'cm-stringQuote' });
const stringNodes = new Set([
  'String', 'StringLiteral', 'TemplateString', 'TemplateType', 'JSXAttributeValue',
]);

function delimiters(view: EditorView) {
  const marks: ReturnType<typeof quote.range>[] = [];
  const { doc } = view.state;
  syntaxTree(view.state).iterate({
    enter(node) {
      if (!stringNodes.has(node.name)) return;
      const first = doc.sliceString(node.from, node.from + 1);
      if (first !== "'" && first !== '"' && first !== '`') return;
      marks.push(quote.range(node.from, node.from + 1));
      if (node.to - node.from < 2 || doc.sliceString(node.to - 1, node.to) !== first) return;
      let escapes = 0;
      for (let pos = node.to - 2; pos > node.from && doc.sliceString(pos, pos + 1) === '\\'; pos--)
        escapes++;
      if (escapes % 2 === 0) marks.push(quote.range(node.to - 1, node.to));
    },
  });
  return Decoration.set(marks, true);
}

/** Lezer treats quoted strings as single tokens; decorate their delimiters separately. */
export const stringDelimiters = ViewPlugin.fromClass(class {
  decorations;
  constructor(view: EditorView) {
    this.decorations = delimiters(view);
  }
  update(update: ViewUpdate) {
    if (update.docChanged || syntaxTree(update.startState) !== syntaxTree(update.state))
      this.decorations = delimiters(update.view);
  }
}, { decorations: plugin => plugin.decorations });
