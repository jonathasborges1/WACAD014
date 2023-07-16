import React from 'react';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

export interface ICharacterData {
   name: string;
   price?: string;
   email?: string;
}

interface TableCustomProps {
   children?: React.ReactNode;
   characterData?: ICharacterData[];
   THead?: string[];
   removecharacter: (index: number) => void;
}

const TableCustom: React.FC<TableCustomProps> = ({ characterData , ...props }) => {
   return (
      <Table striped bordered hover variant="dark">
         <thead>
            <tr>
               {props.THead?.map((head,index) => {
                  return(
                     <th key={index}>{head}</th>
                  )
               })}
            </tr>
         </thead>
         <tbody>     
            {characterData?.map((row,index) => {
               return (
                  <tr key={index}>
                     <td>
                        {row.name}
                     </td>
                     <td>
                        {row.price}
                     </td>
                     {row.email ? (<td>{row.email}</td>) : (<></>)}
                     {/* <td>
                        {row.email}
                     </td> */}
                     <td>
                        <Button variant="danger" onClick={() => props.removecharacter(index)}>Delete</Button>
                     </td>
                  </tr>
               )
            })}
         </tbody>
      </Table>
   )
}

export default TableCustom;