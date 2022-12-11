import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import '../App.css'
import Searchbar from '../component/Searchbar';
import Addowner from '../component/Addowner';
import Edit from '../component/Edit';
import Delete from '../component/Delete';

function Home() {
  return (
    <>
    <div className='bar'><Addowner /><Searchbar /> </div>
   
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
                      <Edit />{''}<Delete />
                    </td>
                </tr>

                
      </tbody>
    </Table>
    </>
  );
}

export default Home;