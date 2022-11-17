import React from 'react';
import { useForm } from 'react-hook-form';

const AddTrip = () => {
    const { register, handleSubmit } = useForm();
    const handleSearch = data => {
        const img = data.image[0]
        const formData = new FormData()
        formData.append('image', img)


        //convert time to BD time
        const time = data.time.split(':')[0];
        const minutes = data.time.split(':')[1];
        if (time > 12) {
            data.time = (time - 12 + ":" + minutes) + ' PM'
        }
        else {
            data.time = data.time + ' AM'
        }


        // image upload on imgbb api
        fetch(`https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMGBB_API_KEY}`, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {
                const image = imageData.data.display_url;
                data.image = image;
                fetch('http://localhost:5000/add-trip', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                    .then(res => res.json())
                    .then(data => {
                        alert(data.message)
                    })
            })
    }



    return (
        <form onSubmit={handleSubmit(handleSearch)} className='bg-gray-100 '>
            <div className="rounded p-3 lg:p-5  container  mx-auto ">
                <div className="">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Trip Image</span>
                        </label>
                        <input {...register("image")} type="file" className="file-input file-input-bordered file-input-info w-full " />
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">TIME</span>
                        </label>
                        <input {...register("time")} type="time" className="input input-bordered input-primary w-full " />
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">TIME</span>
                        </label>
                        <input {...register("price")} type="time" className="input input-bordered input-primary w-full " />
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Select Operator</span>
                        </label>
                        <select defaultValue="" {...register("name")} className="select select-primary w-full">
                            <option value="KUAKATA" >KUAKATA EXPRESS</option>
                            <option value="SAKURA" >SAKURA</option>
                            <option value="GREEN LINE" >GREEN LINE</option>
                            <option value="HANIF">HANIF</option>
                        </select>
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">From?*</span>
                        </label>
                        <select defaultValue="" {...register("origin")} className="select select-primary w-full">
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
                        <select defaultValue="" {...register("destination")} className="select select-primary w-full">
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
                        <select defaultValue="" {...register("busType")} className="select  select-primary w-full">
                            <option value="Non Ac" >Non Ac</option>
                            <option value="Ac" >Ac</option>
                        </select>
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Bus Class?</span>
                        </label>
                        <select defaultValue="" {...register("busClass")} className="select select-primary w-full">
                            <option value="Economy" >Economy</option>
                            <option value="Business" >Business</option>
                        </select>
                    </div>
                    <input type="submit" className='btn w-full my-5' value="ADD TRIP" />
                </div>
            </div>
        </form>
    );
};

export default AddTrip;