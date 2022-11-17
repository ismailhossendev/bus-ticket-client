
import { DayPicker } from 'react-day-picker';
import React, { useContext } from 'react';
import { format } from 'date-fns';
import { mainContext } from '../contexts/MainContext';
import { Link } from 'react-router-dom';

const Hero = () => {
    const { setDate, date } = useContext(mainContext);
    let footer = <p>Please pick a day.</p>;
    if (date) {
        footer = <p>You picked {format(date, 'PP')}.</p>;
    }
    return (
        <section className="">
            <div className="bg-rose-600 p-5">
                <form className='bg-gray-100 '>
                    <div className="rounded p-3 lg:py-5 lg:px-0  container  mx-auto grid lg:grid-cols-2 gap-5">
                        <div className="">
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text">From?*</span>
                                </label>
                                <select className="select select-primary w-full">
                                    <option>DHAKA</option>
                                    <option>KUAKATA</option>
                                    <option>BARISHAL</option>
                                </select>
                            </div>
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text">To?*</span>
                                </label>
                                <select className="select select-primary w-full">
                                    <option>KUAKATA</option>
                                    <option>BARISHAL</option>
                                    <option>DHAKA</option>
                                </select>
                            </div>
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text">Bus Type</span>
                                </label>
                                <select className="select select-primary w-full">
                                    <option selected>Ac/Non Ac</option>
                                    <option>Non Ac</option>
                                    <option>Ac</option>
                                </select>
                            </div>
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text">Bus Class?</span>
                                </label>
                                <select className="select select-primary w-full">
                                    <option selected>Economy/business</option>
                                    <option>Economy</option>
                                    <option>Business</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-control w-full flex items-center ">
                            <label className="label">
                                <span className="label-text">Date?</span>
                            </label>
                            <DayPicker
                                mode='single'
                                selected={date}
                                onSelect={setDate}
                                footer={footer}
                            />
                        </div>
                        <Link to='/search' className='w-full btn bg-rose-600'>Search</Link>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Hero;