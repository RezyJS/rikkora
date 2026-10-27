import path from 'node:path'
import { fileURLToPath } from 'node:url'

const sourceRoot = fileURLToPath(new URL('../src', import.meta.url))
const layers = ['app', 'pages', 'widgets', 'features', 'entities', 'shared']
const slicedLayers = new Set(['pages', 'widgets', 'features', 'entities'])
const parts = file => path.relative(sourceRoot, file).split(path.sep)

export default {
  rules: {
    'import-boundaries': {
      meta: {
        type: 'problem',
        schema: [],
        messages: {
          upward: '{{from}} cannot import the higher {{to}} layer.',
          sibling: 'Slices in {{layer}} cannot import each other. Compose them in a higher layer.',
          publicApi: 'Import {{slice}} through its public index.ts API.',
        },
      },
      create(context) {
        const source = parts(context.filename)
        const sourceLayer = layers.indexOf(source[0])
        if (sourceLayer < 0) return {}

        function check(node) {
          if (typeof node?.value !== 'string') return
          const specifier = node.value
          const targetFile = specifier.startsWith('@/')
            ? path.resolve(sourceRoot, specifier.slice(2))
            : specifier.startsWith('.')
              ? path.resolve(path.dirname(context.filename), specifier)
              : null
          if (!targetFile) return
          const target = parts(targetFile)
          const targetLayer = layers.indexOf(target[0])
          if (targetLayer < 0) return
          if (targetLayer < sourceLayer) {
            context.report({ node, messageId: 'upward', data: { from: source[0], to: target[0] } })
            return
          }
          if (sourceLayer === targetLayer && slicedLayers.has(source[0]) && source[1] !== target[1]) {
            context.report({ node, messageId: 'sibling', data: { layer: source[0] } })
            return
          }
          if (slicedLayers.has(target[0]) && (source[0] !== target[0] || source[1] !== target[1]) && target.length > 2) {
            context.report({ node, messageId: 'publicApi', data: { slice: target.slice(0, 2).join('/') } })
          }
        }

        return {
          ImportDeclaration: node => check(node.source),
          ExportNamedDeclaration: node => check(node.source),
          ExportAllDeclaration: node => check(node.source),
          ImportExpression: node => check(node.source),
        }
      },
    },
  },
}
