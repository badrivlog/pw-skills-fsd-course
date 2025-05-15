# CSS Grids

Preparing layout in website is one of most important concepts that we need to master. When we describe layout then we mainly refer to arrangments of the components in our web pages.

<!-- Images goes here -->
<img src="https://drive.google.com/uc?export=view&id=1Ftj8iSqhmLvZglrW0yUTkK4-0yUheQiK" width="800px"  alt="notes"/>

The above image refers to the arrangement of different componets we are refering to. Here differnt UI elemets are arranged at specific places and order.

## Ways to do arrangements using CSS

**Flexbox** is one very ousefull way to prepare these arrangments using CSS. An aternatives to flexbox for prepaing UI componet arrangements and layouts is **CSS GRIDS**.

FYI, before CSS Grids and Flex box, developer used to rely on tables, flots, positions etc to do the arrangements.

## What is CSS Grids? Why should we learn CSS Grids?

CSS Grids are an alternate way to prpare layouts and UI elements in a web page. CSS Grids is a 2D (two dimensional layout system) Flex box on the other hand is a 1D (one dimensional) layout system. Means, Flex box only gives us control in one dimension of the layout.

Css Grids create a grid/matrix like layout which comprises of rows and colunm using which we can arrange the elements in these rows and columns. This gives more granular control on the content we want to display.

<img src="https://drive.google.com/uc?export=view&id=1u-WYZVQYB7klXekI97OZRym2cVdkJZSh" width="800px"  alt="notes"/>

## CSS Grid terminologies

### Grid Container

If you allready know about Flex box, then you must have heard of flex container. Similar to that we have Grid container. Grid container is the parent element inside which we can actives css grids. Once done, any child element inside this container will be controllable by CSS grids.

To enable a parent element with CSS grids we can use the display CSS rule and allocate it a value grid.

```css
SELECTOR_FOR_PARENT_EL {
  display: grid;
}
```

With the help of display rule we can activate grid by allacating the grid value to the `display` property.

### Grid Item

The child elements inside the grid container are called as Grid Items. It is very similar to that of flex items. After allocating the grid value to display property of a parent, we will be able to control these Grid items.

<img src="https://drive.google.com/uc?export=view&id=14NZz6GIgSRwYetY0B9Skwv3PWdmy82o7" width="800px"  alt="CSS-Grid-items"/>

To make a similar implemention we can write

```css
#container {
  display: grid;
  padding: 5px;
  border: 1px solid black;
  border-radius: 10px;
  grid-template-column: 100px 100px;
}
```

### Grid lines

CSS grid lines are bunch of horizontal and vertical lines using which our whole grid/matrix is divided into rows and columns.

- Horizontal lines separate the rowa
- Vertical lines separate the columns

Every line has a number starting from 1 (i.e. 1 refers to first line, 2 refers to second line and so on). Then there are numbers for reverse ordering as well stating from -1 (i.e. -refers to the last line, -2 refers the second last line and so on ).

<img src="https://drive.google.com/uc?export=view&id=1axmEqEIQao-VNtUN6xFHXD-cND8tdydc" width="800px"  alt="CSS-Grid-lines"/>

These lines plays a very very important role in preparing the layout using css grids. For most of the rules we might need to define the start and end of a cell, which can be done by using these line numbers

### CSS Grid track

The css grid tracks refers to the space between adjacent grid lines (horizontal or vertical anyone). These actually helps us to visualise the space distribution among rows and columns. This will be the place where actually some elements will be rendered in the grid.

<img src="https://drive.google.com/uc?export=view&id=1lnVKTqWKGH58q3kuI2u679SKWHSMjutY" width="800px"  alt="CSS-Grid-tracks"/>

### Note:

To specify size of a row or a column inside `grid-template-rows` or `grid-template-columns` we can use **fractional units** as well

### Fractional units

Fractional units or **fr** is also one way to mention size of the column or row height items of available space in the `grid-container`.

## CSS Grid rules

To control the orientation of the grid-container i.e. number of columns and rows, along with size of each column and row, we need to master 3 important properties:

- grid-template-columns
- grid-template-rows
- grid-auto-flow

### grid-template-columns

Using this rule we will be define the number of columns in the CSS Grid and along with that, we can also specify size of each column.
To use this rule and define the number of columns and size of each column, we have to just give n-number of values to this CSS rule

```css
Selector_of_the_element {
  display: grid; /* this activate the grid in the container */
  grid-template-column: 20px 20px 30em 40px; /* 4 values space separated */
}
```

In the avobe property we have given 4 different values to `grid-template-column`. This means that there should be 4 columns width of the column should be:

- 20px for first column
- 20px for second column
- 30em for third column
- 40% of parent width for fourth column

Size of each column can be different and can be mentioned in different units as well.

```css
#container {
  display: grid; /* grid layout */
  grid-template-columns: 20% 50% 29%; /* more values */
}
```

<img src="https://drive.google.com/uc?export=view&id=12NY1j5RnTBUk7L6y4Qn31p6ifO3clfY3" width="800px"  alt="grid-template-column"/>

In the above CSS, beacause we provided only 3 values to the grid-template-column property, we have only 3 columns with the corresponding width.

### grid-auto-flow

This property decides the flow of the remaining elements after the decided number of columns or rows. This only controls extra elements which are not comming within the number of row/column defined.

For example, if by using `grid-template-columns` we decided to have 2 columns of 50px wide length, and total grid items are 8, so the first two items will be arranged in each column one by one, but what about others?

So the remaining ones are actually arranged based on this flow.
So if the value of `grid-auto-flow` is `row` (and row is the default value also), then all the remaining items will go in the next row.

```css
#container {
  display: grid;
  grid-template-columns: 20% 50%; /* only two column define */
  grid-auto-flow: row; /* Because of this, remaining elements are gone to a new row */
}
```

<img src="https://drive.google.com/uc?export=view&id=13Qwqt6xe_ihTy-y6-_-V5aFA14Ox1BG8" width="800px"  alt="grid-auto-flow-row"/>

And if the value of `grid-auto-flow` is `column` then all the remaining items will go in a column.

```css
#container {
  display: grid;
  grid-template-columns: 20% 50%; /* only two column define */
  grid-auto-flow: column; /* Because of this, remaining elements are gone to a new column */
}
```

<img src="https://drive.google.com/uc?export=view&id=18s4qRhbOjDhFj3ByoljkZ9Ezxj46bT0n" width="800px"  alt="grid-auto-flow-column"/>

### grid-template-rows

Using this rule we will be able to define the number of rows in the CSS Grid and along with that, we can also specify size of each row.

But because `grid-auto-flow` is by default having the value all the remaining elements will go to each new rows.

```css
#container {
  display: grid;
  grid-template-rows: 50px 50px 50px;
}
```

<img src="https://drive.google.com/uc?export=view&id=18Jzi4o6nvSKlhhYPmDvhEpSF_auWNkWF" width="800px"  alt="grid-template-row"/>

So now beacause we define only 3 values in `grid-template-rows` so we have height of first 3 rows as 50px and all the remaining elements will go to a new row as `grid-auto-flow` is `row`.

But if we add `grid-auto-flow` as `column`, then we will be having only 3 rows with 50px height and all the remaining elements will go new column.

```css
#container {
  display: grid;
  grid-template-rows: 50px 50px 50px;
  grid-auto-flow: column;
}
```

<img src="https://drive.google.com/uc?export=view&id=1Cd_KNDmlD9RHnF_d03TXi23Ueyd7TT9w" width="800px"  alt="grid-auto-flow-column"/>

Or, if we have to avoid `grid-auto-flow` we can define both `grid-template-columns` and `grid-template-rows` to define the number of columns and rows specifically.

```css
#container {
  display: grid;
  grid-template-columns: 20% 50%;
  grid-template-rows: 50px 50px 50px;
}
```

<img src="https://drive.google.com/uc?export=view&id=1fQcgXNXtsL2O7hqMZrJAMBtOVEGDPxji" width="800px"  alt="grid-auto-flow-column"/>

You can see here `grid-template-columns` is having two values `20%` and `50%` meaning we only want two columns. That's good, and we have `grid-template-rows` with 50px each for 3 rows. Meaning we want to have 3 rows. But why is the 4th row comming?

This is beacause the default `grid-auto-flow` is `row`, meaning extra elements should be adjusted in a new row. So 7 and 8 will go to a new row.

So if will give `grid-auto-flow` as `column` here, does that mean extra elements will now go to columns ? yes.

```css
#container {
  display: grid;
  grid-template-columns: 20% 50%;
  grid-template-rows: 50px 50px 50px;
  grid-auto-flow: column;
}
```

<img src="https://drive.google.com/uc?export=view&id=1JFwBul-sgO--E4MOPuzGTezO4tOijNjk" width="800px"  alt="grid-auto-flow-column"/>

### Fractional units with grid-template

As we know fractional units can be use to tell the size of column width or row height with respect to the space available in the container.

```css
#container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 50px 50px 50px;
  grid-auto-flow: column;
}
```

In a code above we have mentioned 3 values in `grid-template-columns` that means that means we expect 3 columns. Each value is 1fr, 1fr represent the fractional unit of each column i.e. 1/3 of the total space. How ?

<img src="https://drive.google.com/uc?export=view&id=1sQT27kmbygdkm0GY268AAJqpiYs9u1KQ" width="800px"  alt="fractional-units-representation"/>

If size of the total container is 3fr, then 1fr went to first column, 1fr went to the second column and 1fr went to third column.

<img src="https://drive.google.com/uc?export=view&id=1G7sFWIwT1PTW2gZ8FewFEE1NEOBOIQsn" width="800px"  alt="fractional-units"/>

For more examples, we can refer the below.

**Example 1**

```css
#container {
  display: grid;
  grid-template-columns: 2fr 1fr 2fr;
  grid-template-rows: 50px 50px 50px;
  grid-auto-flow: column;
}
```

Here we can total 5fr (2 + 1 + 2) available in the container, among which the 1/5 of the space i.e. 2/5fr space goes to column 1, then 1fr goes to the column 2 and 2/5fr goes to the last column.

<img src="https://drive.google.com/uc?export=view&id=1dGXU_8SvZo0t_OdoB5mjG3csJcUBkEiU" width="800px"  alt="fractional-units-more-example"/>

**Example 2**

```css
#container {
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  grid-template-rows: 50px 50px 50px;
  grid-auto-flow: column;
}
```

Here we can total 4fr (1 + 1 + 2) available in the container, among which the 1/4 of the space i.e. 1fr space goes to column 1, then 1fr goes to the column 2 and 2/4fr goes to the last column.

<img src="https://drive.google.com/uc?export=view&id=144C1_MFFF6vo3Nl_kUAChwQbbcRT23eI" width="800px"  alt="fractional-units-more-example-2"/>

**Example 3**

```css
#container {
  display: grid;
  grid-template-columns: 1fr 1fr 2fr 1fr;
  grid-template-rows: 50px 50px 50px;
  grid-auto-flow: column;
}
```

Here we can total space (1 + 1 + 2 + 1) available in the container, among which the 1/5 of the space i.e. 1fr goes to column 1, then 1/5 of the space i.e. 1fr goes to second column, then 2/5 of the space i.e. 2fr goes to the third column and remaining 1/5 goes to fourth column.

<img src="https://drive.google.com/uc?export=view&id=16H1gn1XqxR0Oeqv2-MNwJaok2JDhNqQa" width="800px"  alt="fractional-units-more-example-3"/>

But why the last column is empty ?

It is beacause of the `grid-auto-flow`, as ti is equal to `column` the filling of the grid cells happen in column fashion i.e. all extra values goes to next column.

Now beyond 7 and 8 we do not have enough items to fill the space, but beacouse we have mentioned the spacing of 4 columns, the last column stays empty but also keeps it's size entact, just beacause we have mentioned the size of the column manually as 1fr.

```css
#container {
  display: grid;
  grid-template-columns: 1fr 1fr 2fr 1fr;
}
```

Here we can total space (1 + 1 + 2 + 1) available in the container, among which the 1/5 of the space i.e. 1fr goes to column 1, then 1/5 of the space i.e. 1fr goes to second column, then 2/5 of the space i.e. 2fr goes to the third column and remaining 1/5 goes to fourth column.

<img src="https://drive.google.com/uc?export=view&id=1E3QVluj7nZtKVAykxyLHLvT2ouqZkNZ2" width="800px"  alt="fractional-units-example-4"/>

Here the `grid-auto-flow` is row, so all the elements are first filled in the row 1 and all extra moves to next row, hence no empty columns.
