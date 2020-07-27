export default function getArrow(direction, color) {
  if (direction === 'right')
    return `<svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.516357 10.58L4.52386 6L0.516357 1.41L1.75011 0L7.00011 6L1.75011 12L0.516357 10.58Z" fill="${color}"/>
            </svg>`

  if (direction === 'left')
    return `<svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 10.58L2.9925 6L7 1.41L5.76625 0L0.51625 6L5.76625 12L7 10.58Z" fill="${color}"/>
            </svg>`

  else return 'specify right direction'
}