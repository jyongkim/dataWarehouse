import React from 'react'
import RegionService from "../services/region.service"
import { useEffect, useState } from 'react'
import TreeList from '../components/Tree/TreeList'


export default function Regions(params) {

    const [regions, setRegions] = useState([])

    useEffect(() => {
        RegionService.getTreeRegions().then((data) => setRegions(data))
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

    const funcs = {
        toggleOpen,
        addChild,
        makeParent
    };

    return (
        <div className="App">
            <h1>Simple Tree</h1>
            <TreeList tree={regions} funcs={funcs} />
        </div>
    );


}

