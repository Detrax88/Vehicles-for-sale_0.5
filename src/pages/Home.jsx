import {useEffect, useState} from 'react';
import VehicleDetails from '../components/VehicleDetails';
import {getBrands, getModels, getTypes} from '../services/api';
import SearchBar from '../components/SearchBar';

import '../css/Home.css';

function Home() {
    const [brands, setBrands] = useState([]);
    const [models, setModels] = useState([]);
    const [types, setTypes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchedModels, setSearchedModels] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCatalog = async () => {
            try {
                const [brandData, modelData, typeData] = await Promise.all([
                    getBrands(),
                    getModels(),
                    getTypes(),
                ]);
                setBrands(brandData);
                setModels(modelData);
                setTypes(typeData);
                setSearchedModels(modelData);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchCatalog();
    }, []);

    const getBrand = (model) => {
        const brandId = model.marka?.id ?? model.marka;
        return brands.find((brand) => String(brand.id) === String(brandId));
    };

    const handleSearch = (searchTerm) => {
        const query = searchTerm.trim().toLocaleLowerCase();
        const filteredModels = models.filter((model) =>
            String(model.Modell_nev ?? '').toLocaleLowerCase().includes(query) ||
            String(getBrand(model)?.marka ?? '').toLocaleLowerCase().includes(query)
        );
        setSearchedModels(filteredModels);
    };

    return (
        <div className="home">            
            <SearchBar sc={handleSearch} />
            {loading && <p>Loading vehicles...</p>}
            {error && <p>Error: {error}</p>}
            <div className="vehicle-list">
                {searchedModels.map((model) => (
                    <VehicleDetails
                        key={model.id}
                        vehicle={{...model, brand: getBrand(model)}}
                        types={types.filter((type) =>
                            String(type.modell?.id ?? type.modell) === String(model.id)
                        )}
                    />
                ))}
            </div>
        </div>
    );
}
                


        
                

    



export default Home;
