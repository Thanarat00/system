import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import '../App.css'
import Searchbar from '../component/Searchbar';
import Adduser from '../component/Adduser';
import Edituser from '../component/Edituser';
import Deleteuser from '../component/Deleteuser';

function User() {
  return (
    <>
    <div className='bar'><Adduser /><Searchbar /> </div>
   
    <Table striped bordered hover className='table'>
      <thead>
        <tr>
          <th>#</th>
          <th>Image</th>
          <th>E-mail</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Telephone</th>
          <th>Status</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
                <tr>
                <td>1</td>
                <td><Image src='https://cdn.pixabay.com/photo/2017/06/09/09/39/adler-2386314_960_720.jpg'  className='image'/></td>
                <td>bahoza3441@gmail.com</td>
                <td>thanarat</td>
                <td>Sanrum</td>
                <td>09512152898</td>
                <td>
                <Form.Check 
                    type="switch"
                    id="custom-switch"/>
                    </td>
                    <td>
                      <Edituser />{''}<Deleteuser />
                    </td>
                </tr>

                
      </tbody>
    </Table>
    </>
  );
}

export default User;