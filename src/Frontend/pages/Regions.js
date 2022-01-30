import React from 'react'
import RegionService from "../services/region.service"
import CountryService from "../services/country.service"
import CityService from "../services/city.service"
import { useEffect, useState } from 'react'
import TreeList from '../components/Tree/TreeList'
import ModalTree from '../components/Tree/ModalTree'

export default function Regions(params) {

    const [regions, setRegions] = useState([])
    const [showModalTreeRegion, setShowModalTreeRegion] = useState(false)
    const [showModalTreeCountry, setShowModalTreeCountry] = useState(false)
    const [showModalTreeCity, setShowModalTreeCity] = useState(false)
    const initialStateRegion = {
        region: ''
    }
    const initialStateCountry = {
        country: ''
    }
    const initialStateCity = {
        city: ''
    }
    const [region, setRegion] = useState(initialStateRegion)
    const [country, setCountry] = useState(initialStateCountry)
    const [city, setCity] = useState(initialStateCity)
    const [fetchData, setFetchData] = useState(false)
    const [showModalConfirm, setShowModalConfirm] = useState(false)
    const [idRegionToDelete, setIdRegionToDelete] = useState(-1)
    const [idCountryToDelete, setIdCountryToDelete] = useState(-1)
    const [idCityToDelete, setIdCityToDelete] = useState(-1)

    useEffect(() => {
        RegionService.getTreeRegions().then((data) => {
            setRegions(data)
        }
        )
        setFetchData(false)
    }, [fetchData])

    const toggleOpen = item => {
        const newTree = [...regions];
        item.isOpen = !item.isOpen;
        setRegions(newTree);
    };

    const makeParent = item => {
        const newTree = [...regions];
        item.children = [];
        setRegions(newTree);
    };

    const addChild = parent => {
        const newTree = [...regions];
        if (!parent) {
            newTree.push({ name: "New Item" });
        } else {
            parent.children.push({ name: "New Item" });
        }
        setRegions(newTree);
    };

    const showModalRegion = (id) => {
        if (id >= 0) {
            const regionToUpdate = regions.find(r => r.id_region == id)
            console.log(regionToUpdate)
            setRegion(regionToUpdate)
        }
        setShowModalTreeRegion(true)
    }
    const showModalCountry = (idRegion, idCountry) => {
        if (idCountry >= 0) {
            const countryToUpdate = regions.find(r => r.id_region === idRegion).children.find(c => c.id_country === idCountry)
            console.log(regions)
            console.log('countryToUpdate', countryToUpdate)
            setCountry(countryToUpdate)
        } else {
            setCountry({
                ...country,
                id_region: idRegion
            })
        }

        setShowModalTreeCountry(true)
    }
    const showModalCity = (idRegion, idCountry, idCity) => {
        if (idCity >= 0) {
            const cityToUpdate = regions.find(r => r.id_region === idRegion).children.find(c => c.id_country === idCountry).children.find(r => r.id_city === idCity)
            console.log(cityToUpdate)
            setCity(cityToUpdate)
        } else {
            setCity({
                id_region: idRegion,
                id_country: idCountry,
                id_city: idCity
            })
        }
        setShowModalTreeCity(true)
    }

    const handleCloseRegion = () => {
        setShowModalTreeRegion(false)
    }

    const handleCloseCountry = () => {
        setShowModalTreeCountry(false)
    }

    const handleCloseCity = () => {
        setShowModalTreeCity(false)
    }

    const handleSaveChangesRegion = (e) => {
        e.preventDefault()
        if (region.id_region > 0) {
            RegionService.updateRegion({ id_region: region.id_region, region: region.name })
        } else {
            RegionService.createRegion({ region: region.name })
        }
        handleCloseRegion();
        setRegion(initialStateRegion);
        setFetchData(true)
    }

    const handleSaveChangesCountry = (e) => {
        e.preventDefault()
        if (country.id_country > 0) {
            CountryService.updateCountry({ id_country: country.id_country, country: country.name })
        } else {
            CountryService.createCountry({ id_region: country.id_region, country: country.name })
        }
        handleCloseCountry();
        setCountry(initialStateCountry)
        setFetchData(true)
    }


    const handleSaveChangesCity = (e) => {
        e.preventDefault()

        if (city.id_city > 0) {
            CityService.updateCity({ id_city: city.id_city, city: city.name })
        } else {
            CityService.createCity({ id_region: city.id_region, id_country: city.id_country, city: city.name })
        }
        handleCloseCity();
        setCity(initialStateCity)
        setFetchData(true)
    }


    const funcs = {
        toggleOpen,
        addChild,
        makeParent
    };

    const handleDeleteRegion = (idRegion) => {
        setIdRegionToDelete(idRegion)
        setShowModalConfirm(true)
    }
    const handleDeleteCountry = (idCountry) => {
        setIdCountryToDelete(idCountry)
        setShowModalConfirm(true)
    }
    const handleDeleteCity = (idCity) => {
        setIdCityToDelete(idCity)
        setShowModalConfirm(true)
    }
    const handleCloseConfirm = (confirm) => {
        if (confirm) {
            if (idRegionToDelete > 0) {
                const data = RegionService.deleteRegion(idRegionToDelete)
                setFetchData(true)
            }
            if (idCountryToDelete > 0) {
                const data = CountryService.deleteCountry(idCountryToDelete)
                setFetchData(true)
            }
            if (idCityToDelete > 0) {
                const data = CityService.deleteCity(idCityToDelete)
                setFetchData(true)
            }

        }
        setShowModalConfirm(false)
    }
    return (
        <div className="App">
            <h1>Regiones, paises y ciudades</h1>
            <TreeList tree={regions} funcs={funcs} showModalTreeRegion={showModalRegion} showModalTreeCountry={showModalCountry} showModalTreeCity={showModalCity} showModalConfirm={showModalConfirm} handleDeleteRegion={handleDeleteRegion} handleDeleteCountry={handleDeleteCountry} handleDeleteCity={handleDeleteCity} handleCloseConfirm={handleCloseConfirm} />
            <ModalTree showModalTree={showModalTreeRegion} handleSaveChanges={handleSaveChangesRegion} handleClose={handleCloseRegion} item={region} setItem={setRegion}></ModalTree>
            <ModalTree showModalTree={showModalTreeCountry} handleSaveChanges={handleSaveChangesCountry} handleClose={handleCloseCountry} item={country} setItem={setCountry}></ModalTree>
            <ModalTree showModalTree={showModalTreeCity} handleSaveChanges={handleSaveChangesCity} handleClose={handleCloseCity} item={city} setItem={setCity}></ModalTree>
        </div>
    );


}

