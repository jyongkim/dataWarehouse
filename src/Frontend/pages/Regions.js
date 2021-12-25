import React from 'react'
import RegionService from "../services/region.service"
import { useEffect, useState } from 'react'
import TreeList from '../components/Tree/TreeList'
import ModalTree from '../components/Tree/ModalTree'

export default function Regions(params) {

    const [regions, setRegions] = useState([])
    const [showModalTreeRegion, setShowModalTreeRegion] = useState(false)
    const [showModalTreeCountry, setShowModalTreeCountry] = useState(false)
    const [showModalTreeCity, setShowModalTreeCity] = useState(false)
    const [region, setRegion] = useState({
        region: ''
    })
    const [country, setCountry] = useState({
        country: ''
    })
    const [city, setCity] = useState({
        city: ''
    })
    const [fetchData, setFetchData] = useState(false)
    const [showModalConfirm, setShowModalConfirm] = useState(false)
    const [idToDelete, setIdToDelete] = useState(-1)

    useEffect(() => {
        RegionService.getTreeRegions().then((data) =>
            setRegions(data)
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
        console.log(id)
        if (id >= 0) {
            const regionToUpdate = regions.find(r => r.id_region == id)
            console.log(regionToUpdate)
            setRegion(regionToUpdate)
        }
        setShowModalTreeRegion(true)
    }
    const showModalCountry = (id) => {
        console.log(id)
        if (id >= 0) {
            const countryToUpdate = regions.find(r => r.id_country == id)
            console.log(regions)
            console.log('countryToUpdate', countryToUpdate)
            setCountry(countryToUpdate)
        }
        setShowModalTreeCountry(true)
    }
    const showModalCity = (id) => {
        console.log(id)
        if (id >= 0) {
            const cityToUpdate = regions.find(r => r.id_city == id)
            console.log(cityToUpdate)
            setCity(cityToUpdate)
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
            RegionService.createRegion({ id_region: region.id_country, region: region.name })
        }
        handleCloseRegion();
        setFetchData(true)
    }

    const handleSaveChangesCountry = (e) => {
        e.preventDefault()
        if (country.id_country > 0) {
            RegionService.updateCountry({ id_country: country.id_country, country: country.name })
        } else {
            RegionService.createCountry({ id_country: country.id_country, country: country.name })
        }
        handleCloseCountry();
        setFetchData(true)
    }


    const handleSaveChangesCity = (e) => {
        e.preventDefault()
        if (city.id_city > 0) {
            RegionService.updateCity({ id_city: city.id_city, city: city.name })
        } else {
            RegionService.createCity({ id_city: city.id_city, city: city.name })
        }
        handleCloseCity();
        setFetchData(true)
    }


    const funcs = {
        toggleOpen,
        addChild,
        makeParent
    };

    const handleDelete = (id) => {
        setIdToDelete(id)
        setShowModalConfirm(true)
    }
    const handleCloseConfirm = (confirm) => {
        if (confirm) {
            const data = RegionService.deleteRegion(idToDelete)
            setFetchData(true)
        }
        setShowModalConfirm(false)
    }
    return (
        <div className="App">
            <h1>Regiones, paises y ciudades</h1>
            <TreeList tree={regions} funcs={funcs} showModalTreeRegion={showModalRegion} showModalTreeCountry={showModalCountry} showModalTreeCity={showModalCity} showModalConfirm={showModalConfirm} handleDelete={handleDelete} handleCloseConfirm={handleCloseConfirm} />
            <ModalTree showModalTree={showModalTreeRegion} handleSaveChanges={handleSaveChangesRegion} handleClose={handleCloseRegion} item={region} setItem={setRegion}></ModalTree>
            <ModalTree showModalTree={showModalTreeCountry} handleSaveChanges={handleSaveChangesCountry} handleClose={handleCloseCountry} item={country} setItem={setCountry}></ModalTree>
            <ModalTree showModalTree={showModalTreeCity} handleSaveChanges={handleSaveChangesCity} handleClose={handleCloseCity} item={city} setItem={setCity}></ModalTree>
        </div>
    );


}

