import React, { useEffect } from "react";
import { Button } from 'react-bootstrap';
import { PencilSquare, X } from 'react-bootstrap-icons';
import styled from "styled-components";
import ModalConfirm from '../ModalConfirm'

const TreeLine = styled.button`
  font-family: Menlo, Consolas, monospace;
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`;

function AddItem({ parent, funcs }) {
    return (
        <li>
            <TreeLine onClick={() => funcs.addChild(parent)}>+</TreeLine>
        </li>
    );
}

function TreeItem({ item, funcs, showModalTreeRegion, showModalTreeCountry, showModalTreeCity, handleDeleteRegion, handleDeleteCountry, handleDeleteCity }) {
    const { toggleOpen, makeParent } = funcs;
    return (
        <li>
            <TreeLine
                onClick={() => toggleOpen(item)}
            >
                {item.children && <span>{item.isOpen ? "[-]" : "[+]"}</span>}
                &nbsp;{item.name}
                &nbsp;<PencilSquare style={{ cursor: 'pointer' }} onClick={(e) => {
                    e.preventDefault();
                    if (item.id_region)
                        showModalTreeRegion(item.id_region)
                    if (item.id_country)
                        showModalTreeCountry(item.id_parent, item.id_country)
                    if (item.id_city)
                        showModalTreeCity(item.id_grandparent, item.id_parent, item.id_city)
                }
                }></PencilSquare>&nbsp;
                <X style={{ cursor: 'pointer', fontStyle: 'bold', fontSize: '20pt' }} onClick={(e) => {
                    e.preventDefault()
                    console.log(item)
                    if (item.id_region)
                        handleDeleteRegion(item.id_region)
                    if (item.id_parent)
                        handleDeleteCountry(item.id_country)
                    if (item.id_grandparent)
                        handleDeleteCity(item.id_city)
                }
                }></X>
            </TreeLine>
            {item.children && item.isOpen && (
                <TreeList key={item.name} item={item} tree={item.children} funcs={funcs} showModalTreeRegion={showModalTreeRegion} showModalTreeCountry={showModalTreeCountry} showModalTreeCity={showModalTreeCity} handleDeleteRegion={handleDeleteRegion} handleDeleteCountry={handleDeleteCountry} handleDeleteCity={handleDeleteCity} />
            )}
        </li>
    );
}


export default function TreeList({ item, tree, funcs, showModalTreeRegion, showModalTreeCountry, showModalTreeCity, handleDeleteRegion, handleDeleteCountry, handleDeleteCity, handleCloseConfirm, showModalConfirm }) {

    return (
        <>
            &nbsp;<Button className="btn btn-primary sm-button" size="sm" onClick={() => {
                console.log(item)
                if (item === undefined)
                    showModalTreeRegion()
                else if (item.id_country)
                    showModalTreeCity(item.id_region, item.id_country)
                else if (item.id_region)
                    showModalTreeCountry(item.id_region)



            }
            }>Agregar</Button>
            <ul style={{ listStyleType: 'none' }}>
                {tree.map(child => (
                    <TreeItem key={child.name} item={child} funcs={funcs} showModalTreeRegion={showModalTreeRegion} showModalTreeCountry={showModalTreeCountry} showModalTreeCity={showModalTreeCity} handleDeleteRegion={handleDeleteRegion} handleDeleteCountry={handleDeleteCountry} handleDeleteCity={handleDeleteCity} />
                ))}
            </ul>
            <ModalConfirm show={showModalConfirm} handleCloseConfirm={handleCloseConfirm} title="Atención!" message="¿Desea borrar?"></ModalConfirm>
        </>
    );
}
