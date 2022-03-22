## Props and State
  * Props: 
      - Used to pass data down the component tree, allow to pass data from a wrapping component to a embedded component.
      - When props passed down through componenet tree, it will trigger an UI update
      - Value cannot change in entire lifecycle of the component

  * State:
      - Variables that is created and be used inside the component, can passed down component tree through props
      - Can be changed or removed only inside that component, changes to state also trigger an UI update

  * Notes: 
      - Props are variables be passed down from outside of the component 
      - State is generated, updated inside only that component 

## Functional Component and Class Component
  * Functional component: use state through hooks
  * Class component: there is a special property named state

## Handling events
  * You cannot return false to prevent default behavior in React. You must call preventDefault explicitly.

  For example, with plain HTML, to prevent the default form behavior of submitting, you can write:

    ```
    <form onsubmit="console.log('You clicked submit.'); return false">
      <button type="submit">Submit</button>
    </form>
    ```

  In React, this could instead be:

    ```
    function Form() {
      function handleSubmit(e) {
        e.preventDefault();
        console.log('You clicked submit.');
      }

      return (
        <form onSubmit={handleSubmit}>
          <button type="submit">Submit</button>
        </form>
      );
    }
    ```

## Hooks [https://reactjs.org/docs/hooks-intro.html]
  * New addition in React 16.8
  * Allow using state and other React features without writing a class
  * Hooks including list of built-in apis (functions) in React
  * Example: useState


## Two-way binding
  * In React, data flows one way: from owner to child. This makes your app’s code easier to understand. It is considered as “one-way data binding.”

  * However, there are lots of applications that require you to read some data and flow it back into your program like html forms when you receive user input...
    This is considered as "two-way binding"

## Conditional Rendering


## Component Lifecycle
  * Each React component has a lifecycle with three main phases: Mounting, Updating, Unmounting
  * Mounting: putting the element into the DOM, below methods will be called in order
      - constructor
      - get derived state from props
      - render
      - component did mount

  * Updating: when a component is updated
      - getDerivedStateFromProps
      - shouldComponentUpdate
      - render
      - getSnapshotBeforeUpdate
      - componentDidUpdate

  * Unmounting: when component is removed from the DOM or unmounting when React call it
      - componentWillUnmount

  * Error handling: when there is error in the component
      - componentDidCatch

  Only render method is required

