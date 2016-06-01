# react-testing-examples

Demystify testing redux action creators and reducers, as well as react components

## Testing Action Creators

An action creator is a simple function that returns a redux action object. Testing an action creator is as simple as calling the function and interrogating the return value. Check that the `type` key has the expected value, and that any other keys pertinent to the action are present and have the expected values. See examples [here](app/js/test/actions).


## Testing Reducers

Reducers are functions that accept a state and action object, and return a new state. To test a reducer, create a state object and action object, then call the reducer function with those objects. You can now inspect the returned state object.

It is also possible to write tests that simulate a series of actions being performed. Call the reducer function with several action objects, using the resulting state as the input state for the next action, then inspect the final state object. See examples [here](app/js/test/reducers).

## Testing Components

Components are [surprise!] functions at their simplest. Testing components involves creating an initial set of props and state, rendering the component with the props and state, and inspecting the rendered content. The Airbnb Enzyme library makes rendering components and checking the render result easy. It includes functions to inspect the rendered component, as well as the component's props and state. See example [here](app/js/test/components).
