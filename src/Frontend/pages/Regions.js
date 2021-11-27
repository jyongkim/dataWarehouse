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

    useEffect(() => {
        RegionService.getTreeRegions().then((data) =>
            setRegions(data)
        )
    }, [])

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

    const showModal = () => {
        setShowModalTree(true)
    }
    const handleClose = () => {
        setShowModalTree(false)
    }

    const handleSaveChanges = (e) => {
        e.preventDefault()
        RegionService.createRegion(region)
        console.log(region)
    }
    const funcs = {
        toggleOpen,
        addChild,
        makeParent
    };

    return (
        <div className="App">
            <h1>Regiones, paises y ciudades</h1>
            <TreeList tree={regions} funcs={funcs} showModal={showModal} />
            <ModalTree showModalTree={showModalTree} handleSaveChanges={handleSaveChanges} handleClose={handleClose} region={region} setRegion={setRegion}></ModalTree>
        </div>
    );


}

