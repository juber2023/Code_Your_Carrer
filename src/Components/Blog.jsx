import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='font-semibold text-2xl text-center p-16 bg-violet-50'>Blog</h1>
            <div className='bg-sky-300 w-3/4 mx-auto p-10 rounded-xl my-10'>
                <p className='font-bold text-2xl'>1. When should you use context api?</p>
                <p className='mb-5'><span className='font-bold'>Ans:</span> The Context API in React can be a useful tool for passing data through the component tree without having to pass props manually at every level. It's particularly useful when you need to share data across multiple nested components or manage global state in your application. However, it's important to use Context API judiciously, as overusing it can lead to decreased performance and unnecessary complexity. In the context of React Router, you may consider using Context API to pass down authentication status or manage global state, but it's important to carefully consider whether it's the best solution for your specific use case.</p>
                <p className='font-bold text-2xl'>2. What is custom hook?</p>
                <p className='mb-5'><span className='font-bold'>Ans:</span> A custom hook is a JavaScript function that starts with "use" and allows you to extract and reuse stateful logic from a component in React. Custom hooks enable you to keep your code organized, make it more reusable, and abstract away complex logic into reusable functions.</p>
                <p className='font-bold text-2xl'>3. What is useRef hook?</p>
                <p className='mb-5'><span className='font-bold'>Ans:</span> The useRef hook is a built-in hook in React that provides a way to access DOM nodes or store mutable values between renders. It returns a mutable ref object, which can be used to reference a DOM element, store values, or trigger side effects imperatively.</p>
                <p className='font-bold text-2xl'>4. What is useMemo hook?</p>
                <p><span className='font-bold'>Ans:</span> The useMemo hook is a built-in hook in React that allows you to memoize expensive calculations so that they are only recomputed when necessary. It returns a memoized value that is only updated when the dependencies passed to it change. This can help optimize the performance of your application by reducing unnecessary re-renders.</p>
            </div>
        </div>
    );
};

export default Blog;