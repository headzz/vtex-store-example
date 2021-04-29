const justify = {
  center: 'center',
  flexStart: 'flex-start',
  right: 'flex-end',
  spaceBetween: 'space-between'
}

type Allign = 'center' | 'right' | 'spaceBetween' | 'flexStart'

/**
 * @function
 * @name checkAlignContent
 * @param {Allign} alignments defines which alignment flex is going to use.
 * @description Creates flex structure for components
 */

export const checkAlignContent = (alignments: Allign): string => {
  return `justify-content: ${justify[alignments]}`
}
