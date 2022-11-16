import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="p-6 dark:bg-gray-800 dark:text-gray-100">
            <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5" bis_skin_checked="1">
                <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 dark:bg-gray-900" bis_skin_checked="1">
                    <span className="block mb-2 dark:text-violet-400">Find Your Best Bus Ticket in online</span>
                    <h1 className="text-5xl font-extrabold dark:text-gray-50">Bus Khoj Bangladesh</h1>
                    <form className="self-stretch space-y-3 ng-untouched ng-pristine ng-valid my-4">
                        <div bis_skin_checked="1">
                            <label for="name" className="text-sm sr-only">Your name</label>
                            <input id="name" type="text" placeholder="From ex: DHAKA" className="w-full rounded-md focus:ring focus:ring-violet-400 dark:border-gray-700" />
                        </div>
                        <div bis_skin_checked="1">
                            <label for="lastname" className="text-sm sr-only">Email address</label>
                            <input id="lastname" type="text" placeholder="To Ex: KUAKATA" className="w-full rounded-md focus:ring focus:ring-violet-400 dark:border-gray-700" />
                        </div>
                        <Link to='/search' type="submit" className="w-full py-2 font-semibold rounded bg-violet-400 text-gray-900">Find Buses</Link>
                    </form>
                </div>
                <img src="https://source.unsplash.com/random/480x360" alt="" className="object-cover w-full rounded-md xl:col-span-3 dark:bg-gray-500" />
            </div>
        </section>
    );
};

export default Hero;