Margins Collapse - meaning a 25px margin on one element and a 50px margin on the element next to it the total margin (space between) will be 50 px (biggest margin wins). So you write the amount of space you'd like there to be to the next element

* { margin: 0; padding:0;} - * means everything, so this then sets all margins and paddings to 0, removing all defaults

box-sizing: border-box;  - This makes width apply to the outside border of the whole box not just the content (so also padding, border), also common to add to * tag to apply globally


nth-child(n) - to select an element by it's order. So span:nth-child(2) would select the second span 

Position: absoulte - will look up the cascade for the first relative position and go off that. Otherwise it will go of the absolute coordinates of the whole page

Flexbox - by default flex-grow: 0; (the item will not grow if there is extra space) flex-shrink: 1; (it will shrink) flex-basis: auto;
    flex-grow:1 - will try and take as much space as possible but still leave space for other items (fi you set 2 it takes up 2x as much space)

Design for mobile - default values should be for mobile and media queries should with min-width to adjust for larger screens





**units**
EM - relative to the font size (font size 10px - 1 EM = 10px, 2 EM = 20px). Goes up css cascade and looks for the closest defined font-size

REM - like EM but only uses the root font-size of the whole document (html tag - font-size: 16px) ESKIL PREFERS REM

    Some things should be relative to font-size because some people will want to scale their font (example margin and padding)

Percentages % - percentage is based on parents width / height. 

Viewport (vh, vw) - percentage of total window size




