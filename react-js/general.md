## Introduction
  * ReactJs builds websites based on Components
  * Apply Component tree
  * Single page application (SPA)

## Prepare
  * npm/yarn
  * Bundler: webpack
  * Compiler (if need): Babel
  * Development Server (local)

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
