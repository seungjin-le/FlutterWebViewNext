import clsx, { ClassValue } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

const customTwMerge = extendTailwindMerge({
  override: {},

  extend: {
    theme: {},

    classGroups: {
      'font-size': [
        {
          text: ['h60', 'h48', 'h36', 't32', 't24', 't20', 't18', 't16', 'b20', 'b18', 'b16', 'b14', 'b13', 'b13l', 'b12', 'c12']
        }
      ],
      'font-weight': [{ text: ['400', '500', '600', '700'] }]
    },

    conflictingClassGroups: {},

    conflictingClassGroupModifiers: {}
  }
})

export default function cn(...inputs: ClassValue[]) {
  return customTwMerge(clsx(inputs))
}
