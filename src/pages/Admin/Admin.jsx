import AddTrip from './AddTrip';
import AllTrip from './AllTrip';

const Admin = () => {

    return (
        <div className='container mx-auto'>
            <h1 className="text-xl font-semibold ">Add Trip</h1>
            <div className="grid lg:grid-cols-2">
                <AddTrip />
                <AllTrip />
            </div>
        </div>
    );
};

export default Admin;