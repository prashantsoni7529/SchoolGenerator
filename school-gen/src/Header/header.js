import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from "./dropdown";
import "./header.css";

const dropdown_obj =[
  {
    show:false,
    index:0,
    title:"About us",
    bg:"dark",
    variant:"dark",
    dd_item:[{i:0,href:"#href",item_name:"Profile"},{i:1,href:"#href",item_name:"Our Inspiration"},{i:2,href:"#href",item_name:"Vision and Mission"},{i:3,href:"#href",item_name:"Administration"}]
  },
  {
    show:false,
    index:1,
    title:"Information",
    bg:"dark",
    variant:"dark",
    dd_item:[{i:0,href:"#href",item_name:"Admission Guidelines"},{i:1,href:"#href",item_name:"Fee Structure"},{i:2,href:"#href",item_name:"School Timing"},{i:3,href:"#href",item_name:"School Uniform"},{i:4,href:"#href",item_name:"School Discipline"},{i:5,href:"#href",item_name:"Guidelines for Parents"},{i:6,href:"#href",item_name:"General Rules"},{i:7,href:"#href",item_name:"Staff Salary Details"}]
  },
  {
    show:false,
    index:2,
    title:"Academics",
    bg:"dark",
    variant:"dark",
    dd_item:[{i:0,href:"#href",item_name:"Curriculum/Syllabus"},{i:1,href:"#href",item_name:"School Calender"},{i:2,href:"#href",item_name:"Transfer Certificates"},{i:3,href:"#href",item_name:"Exam Schedule"},{i:4,href:"#href",item_name:"Faculty"},{i:5,href:"#href",item_name:"CBSE"},{i:6,href:"#href",item_name:"CBSE Events"},{i:7,href:"#href",item_name:"Online Classes"},{i:8,href:"#href",item_name:" Instructions for  Microsoft Teams"},{i:9,href:"#href",item_name:"Registration of class 11th 2022-23"}]
  },
  {
    show:false,
    index:3,
    title:"Facilities",
    bg:"dark",
    variant:"dark",
    dd_item:[{i:0,href:"#href",item_name:"Library"},{i:1,href:"#href",item_name:"Laboratories"},{i:2,href:"#href",item_name:"Digital Class Room"},{i:3,href:"#href",item_name:"Transportation"},{i:4,href:"#href",item_name:"Cafeteria"},{i:5,href:"#href",item_name:"Clinic"},{i:6,href:"#href",item_name:"CCTV"},{i:7,href:"#href",item_name:"Uninterruptive POwer Supply"},{i:8,href:"#href",item_name:"Sports and Music"},{i:9,href:"#href",item_name:"Gallery"}]
  }
]


function Header() {

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            `{ 
              dropdown_obj.map(function(val,ind,array){
                return <Dropdown key={ind}  title={val.title} bg={val.bg} variant={val.variant} dd_item_menu={val.dd_item} dropdown_obj={array}/>
              })
              }`
            <Nav.Link href="#home">Public Disclosure</Nav.Link>
            <Nav.Link href="#home">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;