import { filesFactory } from '../utils.js';

/**
 * @param {Required<Pick<import('../index.js').Options, "react">> & { fileRoots?: string[] }} options
 * @returns {Promise<import('../index.js').FlatConfig[]>}
 */
export const typescriptConfig = async ({ fileRoots, react }) => {
  const { parser, plugin } = await import('typescript-eslint');
  return [
    {
      files: react.enabled ? filesFactory(['**/*.ts', '**/*.tsx'], fileRoots) : filesFactory(['**/*.ts'], fileRoots),
      languageOptions: {
        // @ts-ignore
        parser,
        parserOptions: {
          project: true,
          sourceType: 'module'
        }
      },
      plugins: {
        // @ts-ignore
        '@typescript-eslint': plugin
      },
      rules: {
        '@typescript-eslint/ban-ts-comment': 'error',
        '@typescript-eslint/ban-types': 'error',
        '@typescript-eslint/no-array-constructor': 'error',
        '@typescript-eslint/no-duplicate-enum-values': 'error',
        '@typescript-eslint/no-extra-non-null-assertion': 'error',
        '@typescript-eslint/no-loss-of-precision': 'error',
        '@typescript-eslint/no-misused-new': 'error',
        '@typescript-eslint/no-namespace': 'error',
        '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
        '@typescript-eslint/no-this-alias': 'error',
        '@typescript-eslint/no-unnecessary-type-constraint': 'error',
        '@typescript-eslint/no-unsafe-declaration-merging': 'error',
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/no-var-requires': 'error',
        '@typescript-eslint/prefer-as-const': 'error',
        '@typescript-eslint/triple-slash-reference': 'error',
        'no-array-constructor': 'off',
        'no-loss-of-precision': 'off',
        'no-redeclare': 'off',
        'no-undef': 'off',
        'no-unused-vars': 'off'
      }
    }
  ];
};
