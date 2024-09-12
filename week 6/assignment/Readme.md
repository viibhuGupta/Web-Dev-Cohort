# useMemo

## Assignment 1

- In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input.
- Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

## Assignment 2

- In this assignment, you will create a component that renders a large list of sentences and includes an input field for filtering these items.
- The goal is to use useMemo to optimize the filtering process, ensuring the list is only re-calculated when necessary (e.g., when the filter criteria changes).
- You will learn something new here, specifically how you have to pass more than one value in the dependency array

## Assignment 3

- You have been given a list of items you shopped from the grocery store
- You need to calculate the total amount of money you spent

# useCallback

## Assignment 1

- Create a counter component with increment and decrement functions. Pass these functions to a child component which has buttons to perform the increment and decrement actions. Use useCallback to ensure that these functions are not recreated on every render.

## Assignment 2

- Create a component with a text input field and a button. The goal is to display an alert with the text entered when the button is clicked. Use useCallback to memoize the event handler function that triggers the alert, ensuring it's not recreated on every render.

- Currently we only have inputText as a state variable and hence you might not see the benefits of
- useCallback. We're also not passing it down to another component as a prop which is another reason for you to not see it's benefits immediately.

# useRef

- Create a component with a text input field and a button. When the component mounts or the button is clicked, automatically focus the text input field using useRef.

- Create a component that tracks and displays the number of times it has been rendered. Use useRef to create a variable that persists across renders without causing additional renders when it changes.