
export async function getBrands() {
    const response = await fetch('http://127.0.0.1:8000/gyarto/');
    const brands = await response.json();
    return brands;
}

export async function getModels() {
    const response = await fetch('http://127.0.0.1:8000/gyarto/modell/')        
    const models = await response.json()
    return models
}

export async function getTypes() {
    const response = await fetch('http://127.0.0.1:8000/gyarto/modell/tipus/')        
    const types = await response.json()
    return types
}