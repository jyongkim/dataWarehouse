import React, { useEffect } from "react";
import ReactDOM from "react-dom";
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

function TreeItem({ item, funcs }) {
    const { toggleOpen, makeParent } = funcs;
    return (
        <li>
            <TreeLine
                onClick={() => toggleOpen(item)}
                onDoubleClick={() => makeParent(item)}
            >
                {item.name}
                {item.children && <span>{item.isOpen ? "[-]" : "[+]"}</span>}
            </TreeLine>
            {item.children && item.isOpen && (
                <TreeList item={item} tree={item.children} funcs={funcs} />
            )}
        </li>
    );
}


export default function TreeList({ item, tree, funcs }) {
    // useEffect(() => {
    //     tree.forEach((region) =>
    //         region.children = { name: "hijo" })
    // }, [])
    return (
        <ul>
            {tree.map(child => (
                <TreeItem item={child} funcs={funcs} />
            ))}
            <AddItem parent={item} funcs={funcs} />
        </ul>
    );
}
