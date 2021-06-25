# Basically a card component

-   card with image, header, paragraph
-   avatar, name, date and share icon

-   when someone clicks on share icon, replace the avatar section and
    have a share section in the design
-   For replacing, one idea is to get the parent and replace the child

# For desktop

-   general tooltip implementation is having parent and child.
-   here child will be the tooltip component.
-   so position relative and absolute for parent and child.
-   position the child wherever we want and visibility hidden
-   when hover, visibility becomes visible for child.
-   If window is available in that space, the absolute component will work
-   To hide the absolute beyond the relative parent, overflow: hidden

# Arrow in a tooltip

-   in the tooltip after pseudo class, position absolute, content ""
    top 100% to make the arrow to bottom, left 50% to center the arrow at the bottom, border width will give the square box, use border
    color transparent for three sides to get the arrow. Use margin left
    the same value as border-width to keep it in the center.

# Plan

-   mobile first
    -container div
    --image
    --info section
    ---content
    ----h1
    ----p
    ---avatar - flex
    ----image
    ----div with name inside span property block
    ----icon
