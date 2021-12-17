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

function TreeItem({ item, funcs, showModalTreeRegion, showModalTreeCountry, showModalTreeCity, handleDelete }) {
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
                    console.log(item.id_country);

                    if (item.id_region)
                        showModalTreeRegion(item.id_region)
                    if (item.id_country)
                        showModalTreeCountry(item.id_country)
                    if (item.id_city)
                        showModalTreeCity(item.id_city)
                }
                }></PencilSquare>&nbsp;
                <X style={{ cursor: 'pointer', fontStyle: 'bold', fontSize: '20pt' }} onClick={() => handleDelete(item.id_region)}></X>
            </TreeLine>
            {item.children && item.isOpen && (
                <TreeList item={item} tree={item.children} funcs={funcs} showModal={showModalTreeRegion} />
            )}
        </li>
    );
}


export default function TreeList({ item, tree, funcs, showModalTreeRegion, showModalTreeCountry, showModalTreeCity, handleDelete, handleCloseConfirm, showModalConfirm }) {

    return (
        <>
            &nbsp;<Button className="btn btn-primary sm-button" size="sm" onClick={() => showModalTreeRegion()}>Agregar</Button>
            <ul style={{ listStyleType: 'none' }}>
                {tree.map(child => (
                    <TreeItem item={child} funcs={funcs} showModalTreeRegion={showModalTreeRegion} showModalTreeCountry={showModalTreeCountry} showModalTreeCity={showModalTreeCity} handleDelete={handleDelete} />
                ))}
            </ul>
            <ModalConfirm show={showModalConfirm} handleCloseConfirm={handleCloseConfirm} title="Atención!" message="¿Desea borrar la region?"></ModalConfirm>
        </>
    );
}
