import React from 'react';

const BookingForm = () => {
    return (
        <section className="p-6 bg-gray-800 text-gray-50">
            <form novalidate="" action="" className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
                <fieldset className="grid grid-cols-3 gap-6 p-6 rounded-md shadow-sm bg-gray-900">
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3" bis_skin_checked="1">
                        <div className="col-span-full sm:col-span-3" bis_skin_checked="1">
                            <label for="firstname" className="text-sm">First name</label>
                            <input id="firstname" type="text" placeholder="First name" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                        </div>
                        <div className="col-span-full sm:col-span-3" bis_skin_checked="1">
                            <label for="lastname" className="text-sm">Last name</label>
                            <input id="lastname" type="text" placeholder="Last name" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                        </div>
                        <div className="col-span-full sm:col-span-3" bis_skin_checked="1">
                            <label for="email" className="text-sm">Email</label>
                            <input id="email" type="email" placeholder="Email" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                        </div>
                        <div className="col-span-full" bis_skin_checked="1">
                            <label for="address" className="text-sm">Address</label>
                            <input id="address" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                        </div>
                        <div className="col-span-full sm:col-span-2" bis_skin_checked="1">
                            <label for="city" className="text-sm">City</label>
                            <input id="city" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                        </div>
                        <div className="col-span-full sm:col-span-2" bis_skin_checked="1">
                            <label for="state" className="text-sm">State / Province</label>
                            <input id="state" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                        </div>
                        <div className="col-span-full sm:col-span-2" bis_skin_checked="1">
                            <label for="zip" className="text-sm">ZIP / Postal</label>
                            <input id="zip" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                        </div>
                    </div>
                </fieldset>
            </form>
        </section>
    );
};

export default BookingForm;