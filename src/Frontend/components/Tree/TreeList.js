import React, { useEffect } from "react";
import { Button } from 'react-bootstrap';
import { PencilSquare, X } from 'react-bootstrap-icons';
import styled from "styled-components";

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

function TreeItem({ item, funcs, showModal }) {
    const { toggleOpen, makeParent } = funcs;
    return (
        <li>
            <TreeLine
                onClick={() => toggleOpen(item)}
            >
                {item.children && <span>{item.isOpen ? "[-]" : "[+]"}</span>}
                &nbsp;{item.name}
                &nbsp;<PencilSquare style={{ cursor: 'pointer' }} ></PencilSquare>&nbsp;
                <X style={{ cursor: 'pointer', fontStyle: 'bold', fontSize: '20pt' }}></X>
            </TreeLine>
            {item.children && item.isOpen && (
                <TreeList item={item} tree={item.children} funcs={funcs} />
            )}
        </li>
    );
}


export default function TreeList({ item, tree, funcs, showModal }) {

    return (
        <>
            &nbsp;<Button className="btn btn-primary sm-button" size="sm" onClick={() => showModal()}>Agregar</Button>
            <ul style={{ listStyleType: 'none' }}>
                {tree.map(child => (
                    <TreeItem item={child} funcs={funcs} showModal={showModal} />
                ))}
            </ul>
        </>
    );
}
