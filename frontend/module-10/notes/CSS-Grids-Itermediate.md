# CSS Grids Intermediate

To make sure that we are able to provide the grid configuration in css properly we can use a couple of functions

### repeat

If we want to give the number of tracks (when we say track we are refering to column or rows) and size of each track in a shorter way we can use the repeat function. It takes 2 values:

- Number of tracks
- Size of each tracks -> size can be given in any units i.e. px, em, fr etc

```css
grid-template-columns: repeat(5, 1fr);
```

<img src="https://drive.google.com/uc?export=view&id=1DgJ5yJ9GkY1Yr6TT4RDxkzwlX3W2P4Ha" width="800px"  alt="repeat-function"/>

So the above piece of code gives 5 columns (as track here is the column due to the template-columns property) and size of each column is 1fr.

In case we don't want to have same size for all the tracks we can give custom configuration also, and use `repeat` function whetever we have consecutive same values.

```css
grid-template-columns: repeat(2, 1fr) 2fr 1fr;
```

Here we will be having 4 columns, with first two columns of size `1fr` then third column of size `2fr` and then last one with `1fr` again

### minmax

So the minmax function helps us to deside minimum and maximum track size. Beacause we might be having a lot of situations where we want to restrict the minimum size and maximum size of a column or a row, the those cases minmax function helps.

It takes two values:

- Minimum size of track i.e. at-least how much should be the size the track
- Maximum size of the track i.e. at-most how much should be the of the track

```css
grid-template-columns: 100px minmax(100px, 200px) 100px;
```

<img src="https://drive.google.com/uc?export=view&id=1JgWQ__eFWRg6lRMN7Nn-IsWixC390Orz" width="800px"  alt="minmax-function"/>

## Important Advanced CSS Concepts

### CSS Grid area

Inside the grid/matrix of the grid container any area/region surrounded by grid lines is called as grid area. In simple terms any sub-rectangle/sub-grid/rectangular cros-section inside the CSS grid container as grid area.

<img src="https://drive.google.com/uc?export=view&id=1KApu7lkBf3LZJs7GhIQBVTQO9q7gSW1l" width="800px"  alt="grid-area"/>

Any of the above and more highlighted sub-rectangles are our grid area.

Why do we need this concept ?

So there is a very interesting css rule to control the styling of a grid-area which is `grid-area-template-areas`. Using this property we can select a particular `grid-area` and give it a different style.

### grid-template-areas

This css property helps us to gives names to our css grid areas in the css grid. Then these names can be later used to provide certain type of styling to the elements.

To use this property, we have to provide `mxn` number of names (at-most ) row by row inside a pair of double quotes for each.
