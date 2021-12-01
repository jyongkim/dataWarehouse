import React from 'react'
import RegionService from "../services/region.service"
import { useEffect, useState } from 'react'
import TreeList from '../components/Tree/TreeList'
import ModalTree from '../components/Tree/ModalTree'

export default function Regions(params) {

    const [regions, setRegions] = useState([])
    const [showModalTree, setShowModalTree] = useState(false)
    const [region, setRegion] = useState({
        region: ''
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

    const showModal = (id) => {
        console.log(id)
        if (id >= 0) {
            const regionToUpdate = regions.find(r => r.id_region == id)
            console.log(regionToUpdate)
            setRegion(regionToUpdate)
        }
        setShowModalTree(true)
    }
    const handleClose = () => {
        setShowModalTree(false)
    }

    const handleSaveChanges = (e) => {
        e.preventDefault()
        if (region.id_region > 0) {
            RegionService.updateRegion({ id_region: region.id_region, region: region.name })
        } else {
            RegionService.createRegion({ id_region: region.id_region, region: region.name })
        }
        handleClose();
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
            <TreeList tree={regions} funcs={funcs} showModal={showModal} showModalConfirm={showModalConfirm} handleDelete={handleDelete} handleCloseConfirm={handleCloseConfirm} />
            <ModalTree showModalTree={showModalTree} handleSaveChanges={handleSaveChanges} handleClose={handleClose} region={region} setRegion={setRegion}></ModalTree>
        </div>
    );


}

