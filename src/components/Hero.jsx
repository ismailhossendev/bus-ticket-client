
import { DayPicker } from 'react-day-picker';
import React, { useContext } from 'react';
import { format } from 'date-fns';
import { mainContext } from '../contexts/MainContext';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const { setDate, date } = useContext(mainContext);
    const { handleSubmit, register } = useForm()
    const navigate = useNavigate();
    let footer = <p>Please pick a day.</p>;
    if (date) {
        footer = <p>You picked {format(date, 'PP')}.</p>;
    }

    const handleSearch = data => {
        localStorage.setItem('searchDetails', JSON.stringify(data))
        navigate('/search')
    }


    return (
        <section className="">
            <div className="bg-rose-600 p-5">
                <form onSubmit={handleSubmit(handleSearch)} className='bg-gray-100 '>
                    <div className="rounded p-3 lg:py-5 lg:px-0  container  mx-auto grid lg:grid-cols-2 gap-5">
                        <div className="">
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text">From?*</span>
                                </label>
                                <select {...register("origin")} className="select select-primary w-full">
                                    <option value="DHAKA" >DHAKA</option>
                                    <option value="KUAKATA" >KUAKATA</option>
                                    <option value="BARISHAL" >BARISHAL</option>
                                    <option value="BENAPOLE">BENAPOLE</option>
                                </select>
                            </div>
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text">To?*</span>
                                </label>
                                <select  {...register("destination")} className="select select-primary w-full">
                                    <option value="KUAKATA" >KUAKATA</option>
                                    <option value="BARISHAL" >BARISHAL</option>
                                    <option value="BENAPOLE">BENAPOLE</option>
                                    <option value="DHAKA" >DHAKA</option>
                                </select>
                            </div>
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text">Bus Type</span>
                                </label>
                                <select  {...register("busType")} className="select select-primary w-full">
                                    <option value="" selected>Ac/Non Ac</option>
                                    <option value="Non Ac" >Non Ac</option>
                                    <option value="Ac" >Ac</option>
                                </select>
                            </div>
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text">Bus Class?</span>
                                </label>
                                <select  {...register("busClass")} className="select select-primary w-full">
                                    <option selected value="">Economy/business</option>
                                    <option value="Economy" >Economy</option>
                                    <option value="Business" >Business</option>
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
                        <input type="submit" className='btn' defaultValue="SUBMIT" />
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Hero;