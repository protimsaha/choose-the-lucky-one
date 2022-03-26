import React from 'react';
import './Accordian.css'

const Accordian = () => {
    return (
        <div className='accordian'>
            <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingOne">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            How Reactjs work?
                        </button>
                    </h2>
                    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">React is a very popular JavaScript library that makes only users’ interfaces. React reconstruct browser DOM in JavaScript and only changes the changes to the DOM, not the whole DOM. There are also JSX, which is JavaScript XML. JSX is known as syntactic sugar which creates very specific JavaScript objects. There is also an interesting thing that reacts to components that work like JavaScript function, it may be an arrow function and return HTML</div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Reactjs State vs Props
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">React props are immutable where the state is mutable. We can pass data from one component to another through props, but the state doesn’t give us this opportunity. Props are used to communicate between components, where the states can be used for rendering dynamic changes in the components. Props make components reusable but the state can’t do the same. Props are controlled by whatever renders the component but the state is controlled by the react components.</div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            How useState works?
                        </button>
                    </h2>
                    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">There are some hooks in React they are nothing but the JavaScript function. The UseState is one of them. The useState is a hook that allows us to have variables in functional components. The useState hook is a special function that takes a state and returns an array of two entries. If the initial state has to be computed, we can also pass a function as an argument through useState.</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accordian;