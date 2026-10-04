import {useVehicleContext} from '../contexts/VehicleContext'

function VehicleDetails({vehicle, types = []}) {
    const {addtoFavorites, removeFromFavorites, isFavorite} = useVehicleContext()
    const favorite = isFavorite(vehicle.id)
    const modelName = vehicle.Modell_nev ?? vehicle.Modell?.Modell_nev ?? vehicle.Modell ?? 'Vehicle';
    const brand = vehicle.brand ?? (typeof vehicle.marka === 'object' ? vehicle.marka : null);
    const brandName = brand?.marka ?? vehicle.Marka ?? 'N/A';

    function onFavoriteClick(e) {
        e.preventDefault();
        if (favorite) 
            removeFromFavorites(vehicle.id);
         else 
            addtoFavorites(vehicle);
        
    }

    return (
        <>
        <div className="vehicle-details">
            <div className="vehicle-image">
                <img
                    src={vehicle.image}
                    alt={`${modelName} ${vehicle.evjarat ?? ''}`}
                />
            </div>

            <h2>{modelName}</h2>
            <p>Brand: {brandName}</p>
            <p>Country: {brand?.Orszag ?? vehicle.Orszag ?? 'N/A'}</p>
            <p>Logo: {brand?.Marka_Logo ?? vehicle.Marka_Logo
                ? <img src={brand?.Marka_Logo ?? vehicle.Marka_Logo} alt={`${brandName} logo`} />
                : 'N/A'}</p>
            <p>Year: {vehicle.evjarat ?? 'N/A'}</p>
            {types.length > 0 ? types.map((type) => (
                <div className="vehicle-type" key={type.id}>
                    <p>Price: {type.VetalAra != null ? `$${type.VetalAra}` : 'N/A'}</p>
                    <p>Mileage: {type.kmOra != null ? `${type.kmOra} km` : 'N/A'}</p>
                    <p>Fuel ID: {type.uzemanyag ?? 'N/A'}</p>
                    <p>Body style ID: {type.kivitel ?? 'N/A'}</p>
                    <p>Condition ID: {type.Allapot ?? 'N/A'}</p>
                    <p>Ccm: {type.Hengerurtartalom ?? 'N/A'}</p>
                    <p>Doors: {type.Ajtok_szama ?? 'N/A'}</p>
                    <p>Automatic: {type.Automata == null ? 'N/A' : type.Automata ? 'Yes' : 'No'}</p>
                    <p>All-Wheel Drive: {type.Osszkerekes == null ? 'N/A' : type.Osszkerekes ? 'Yes' : 'No'}</p>
                    <p>Climate Control: {type.Klima == null ? 'N/A' : type.Klima ? 'Yes' : 'No'}</p>
                </div>
            )) : <p>No type details available</p>}

            <button className="favorite-button" onClick={onFavoriteClick}>
                {favorite ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>



        </div>
        </>
    )
    }
    
    export default VehicleDetails;