import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import { faTooth, faNoteSticky, faDownload, faFile, faFileCirclePlus, faPrint, faPenToSquare, faAngleRight, faMagnifyingGlass, faBars, faEye, faCalendar, faUser, faMessage, faMoneyCheckDollar, faGear, faCircleInfo, faAngleDown, faPlus, faBell } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';

function App() {

  const [docname, setDocname] = useState([])
  const [docspecification, setDocspecification] = useState([])
  const [patientname, setPatientname] = useState([])
  const [patientemail, setPatientemail] = useState([])
  const [patientpast, setPatientpast] = useState([])
  const [patientupcoming, setPatientupcoming] = useState([])
  const [patientgender, setPatientgender] = useState([])
  const [patientbirthday, setPatientbirthday] = useState([])
  const [patientphoneno, setPatientphoneno] = useState([])
  const [patientadd, setPatientadd] = useState([])
  const [patientcode, setPatientcode] = useState([])
  const [patientstatus, setPatientstatus] = useState([])
  const [patientregdate, setPatientregdate] = useState([])
  const [medicalrecstatus, setMedicalrecststus] = useState([])
  const [padate, setPadate] = useState([])
  const [padentist, setPadentist] = useState([])
  const [panurse, setPanurse] = useState([])
  const [patime, setPatime] = useState([])
  const [padatreatment, setPatreatment] = useState([])
  const [uadate, setUadate] = useState([])
  const [uadentist, setUadentist] = useState([])
  const [uanurse, setUanurse] = useState([])
  const [uatime, setUatime] = useState([])
  const [uadatreatment, setUatreatment] = useState([])

  useEffect(() => {
    axios.get('https://619f39821ac52a0017ba467e.mockapi.io/DoctorDetails')
    .then(res => {
      setDocname(res.data[0].name);
      setDocspecification(res.data[0].specification);
    })
    .catch(err => {
      console.log(err);
    })
  })

  useEffect(() => {
    axios.get('https://619f39821ac52a0017ba467e.mockapi.io/patientDetails')
    .then(res => {
      setPatientname(res.data[0].name);
      setPatientemail(res.data[0]["e-email"]);
      setPatientpast(res.data[0].Past);
      setPatientupcoming(res.data[0].Upcoming);
      setPatientgender(res.data[0].Gender);
      setPatientbirthday(res.data[0].Birthday);
      setPatientphoneno(res.data[0]["Phone Number"]);
      setPatientadd(res.data[0]["Street Address"]);
      setPatientcode(res.data[0]["ZIP Code"]);
      setPatientstatus(res.data[0]["Member Status"]);
      setPatientregdate(res.data[0]["Register Date"]);
    })
    .catch(err => {
      console.log(err);
    })
  })

  useEffect(() => {
    axios.get('https://619f39821ac52a0017ba467e.mockapi.io/appointment_details')
    .then(res => {
      setMedicalrecststus(res.data[0]["Medical Records"].status);
      setPadate(res.data[0]["Post Appointment"].Date);
      setPadentist(res.data[0]["Post Appointment"].Dentist);
      setPanurse(res.data[0]["Post Appointment"].Nurse);
      setPatime(res.data[0]["Post Appointment"].Time);
      setPatreatment(res.data[0]["Post Appointment"].Treatment);
      setUadate(res.data[0]["Upcoming Appointments"].Date);
      setUadentist(res.data[0]["Upcoming Appointments"].Dentist);
      setUanurse(res.data[0]["Upcoming Appointments"].Nurse);
      setUatime(res.data[0]["Upcoming Appointments"].Time);
      setUatreatment(res.data[0]["Upcoming Appointments"].Treatment);
    })
    .catch(err => {
      console.log(err);
    })
  })

  var nav = document.getElementById("Navigatorid");
  var main = document.getElementById("MainContainerid");
  var navheader1 = document.getElementById("Navheader1id");
  var navheader2 = document.getElementById("Navheader2id");
  var navcon2 = document.getElementById("Navcontainer2id");
  var navicon1 = document.getElementById("Naviconsid1");
  var navicon2 = document.getElementById("Naviconsid2");
  var navicon3 = document.getElementById("Naviconsid3");
  var navicon4 = document.getElementById("Naviconsid4");
  var navicon5 = document.getElementById("Naviconsid5");
  var navicon6 = document.getElementById("Naviconsid6");
  var navheading1 = document.getElementById("Navheading1");
  var navheading2 = document.getElementById("Navheading2");
  var navheading3 = document.getElementById("Navheading3");
  var navheading4 = document.getElementById("Navheading4");
  var navheading5 = document.getElementById("Navheading5");
  var navheading6 = document.getElementById("Navheading6");
  var o = document.getElementById("Navconb1");
  var c = document.getElementById("Navconb2");
  var p = document.getElementById("Navconb3");
  var m = document.getElementById("Navconb4");
  var pi = document.getElementById("Navconb5");
  var s = document.getElementById("Navconb6");
  var ob = document.getElementById("Overviewid");
  var cb = document.getElementById("Calanderid");
  var pb = document.getElementById("PatientListid");
  var mb = document.getElementById("Messagesid");
  var pib = document.getElementById("PaymentInformationid");
  var sb = document.getElementById("Settingsid");
  var isnavcloed = true;
  var navno = 1;
  var helpid = document.getElementById("helpid");
  var Navhelpdoc22id = document.getElementById("Navhelpdoc22id");
  var Navhelpdoc23id = document.getElementById("Navhelpdoc23id");
  var Navhelpdoc21id = document.getElementById("Navhelpdoc21id");
  var upapp = document.getElementById("upapp");
  var pasapp = document.getElementById("pasapp");
  var medrec = document.getElementById("medrec");
  var upappcon = document.getElementById("upappcon");
  var pasappcon = document.getElementById("pasappcon");
  var medreccon = document.getElementById("medreccon");
  var savebt = document.getElementById("savebt");
  var sebt = 1;
  var textarea = document.getElementById("textarea");

  function Savebt() 
  {
    if(sebt === 1)
    {
      savebt.innerHTML = "Save";
      sebt = 2;
      textarea.style.pointerEvents = "all";
    }
    else
    {
      savebt.innerHTML = "Edit";
      sebt = 1;
      textarea.style.pointerEvents = "none";
    }
  }

  function UpcomingappointmentClicked()
  {
    upapp.style.color = "#0437F2";
    upapp.style.backgroundColor = "white";
    pasapp.style.color = "#A9A9A9";
    pasapp.style.backgroundColor = "#F2F5F9";
    medrec.style.color = "#A9A9A9";
    medrec.style.backgroundColor = "#F2F5F9";
    upappcon.style.display = "flex";
    pasappcon.style.display = "none";
    medreccon.style.display = "none";
  }

  function PastappointmentClicked()
  {
    upapp.style.color = "#A9A9A9";
    upapp.style.backgroundColor = "#F2F5F9";
    pasapp.style.color = "#0437F2";
    pasapp.style.backgroundColor = "white";
    medrec.style.color = "#A9A9A9";
    medrec.style.backgroundColor = "#F2F5F9";
    upappcon.style.display = "none";
    pasappcon.style.display = "flex";
    medreccon.style.display = "none";
  }

  function MedicalRecordsClicked()
  {
    upapp.style.color = "#A9A9A9";
    upapp.style.backgroundColor = "#F2F5F9";
    pasapp.style.color = "#A9A9A9";
    pasapp.style.backgroundColor = "#F2F5F9";
    medrec.style.color = "#0437F2";
    medrec.style.backgroundColor = "white";
    upappcon.style.display = "none";
    pasappcon.style.display = "none";
    medreccon.style.display = "flex";
  }

  function sidebaropen()
  {
    isnavcloed = false;
    nav.style.width = "15%";
    main.style.width = "85%";
    navheader1.style.display = "flex";
    navheader2.style.display = "none";
    navcon2.style.height = "72vh";
    navicon1.style.width = "25%";
    navicon1.style.height = "25%";
    navicon2.style.width = "25%";
    navicon2.style.height = "25%";
    navicon3.style.width = "25%";
    navicon3.style.height = "25%";
    navicon4.style.width = "25%";
    navicon4.style.height = "25%";
    navicon5.style.width = "25%";
    navicon5.style.height = "25%";
    navicon6.style.width = "25%";
    navicon6.style.height = "25%";
    navheading1.style.display = "flex";
    navheading2.style.display = "flex";
    navheading3.style.display = "flex";
    navheading4.style.display = "flex";
    navheading5.style.display = "flex";
    navheading6.style.display = "flex";
    o.style.marginTop = "1.5vh";
    c.style.marginTop = "1.5vh";
    p.style.marginTop = "1.5vh";
    m.style.marginTop = "1.5vh";
    pi.style.marginTop = "1.5vh";
    s.style.marginTop = "1.5vh";
    o.style.color = "black";
    c.style.color = "black";
    p.style.color = "black";
    m.style.color = "black";
    pi.style.color = "black";
    s.style.color = "black";
    helpid.style.display = "flex";
    Navhelpdoc22id.style.display = "flex";
    Navhelpdoc23id.style.display = "flex";
    Navhelpdoc21id.style.width = "30%";
    if(navno === 1)
    {
      o.style.backgroundColor = "#0437F2";
      o.style.color = "white";
    }
    else if(navno === 2)
    {
      c.style.backgroundColor = "#0437F2";
      c.style.color = "white";
    }
    else if(navno === 3)
    {
      p.style.backgroundColor = "#0437F2";
      p.style.color = "white";
    }
    else if(navno === 4)
    {
      m.style.backgroundColor = "#0437F2";
      m.style.color = "white";
    }
    else if(navno === 5)
    {
      pi.style.backgroundColor = "#0437F2";
      pi.style.color = "white";
    }
    else
    {
      s.style.backgroundColor = "#0437F2";
      s.style.color = "white";
    }
  }

  function sidebarclose()
  {
    isnavcloed = true;
    nav.style.width = "5%";
    main.style.width = "95%";
    navheader1.style.display = "none";
    navheader2.style.display = "flex";
    navcon2.style.height = "92vh";
    navicon1.style.width = "40%";
    navicon1.style.height = "40%";
    navicon2.style.width = "40%";
    navicon2.style.height = "40%";
    navicon3.style.width = "40%";
    navicon3.style.height = "40%";
    navicon4.style.width = "40%";
    navicon4.style.height = "40%";
    navicon5.style.width = "40%";
    navicon5.style.height = "40%";
    navicon6.style.width = "40%";
    navicon6.style.height = "40%";
    navheading1.style.display = "none";
    navheading2.style.display = "none";
    navheading3.style.display = "none";
    navheading4.style.display = "none";
    navheading5.style.display = "none";
    navheading6.style.display = "none";
    o.style.marginTop = "3vh";
    c.style.marginTop = "3vh";
    p.style.marginTop = "3vh";
    m.style.marginTop = "3vh";
    pi.style.marginTop = "3vh";
    s.style.marginTop = "3vh";
    o.style.color = "#A9A9A9";
    c.style.color = "#A9A9A9";
    p.style.color = "#A9A9A9";
    m.style.color = "#A9A9A9";
    pi.style.color = "#A9A9A9";
    s.style.color = "#A9A9A9";
    helpid.style.display = "none";
    Navhelpdoc22id.style.display = "none";
    Navhelpdoc23id.style.display = "none";
    Navhelpdoc21id.style.width = "100%";
    if(navno === 1)
    {
      o.style.backgroundColor = "white";
      o.style.color = "#0437F2";
    }
    else if(navno === 2)
    {
      c.style.backgroundColor = "white";
      c.style.color = "#0437F2";
    }
    else if(navno === 3)
    {
      p.style.backgroundColor = "white";
      p.style.color = "#0437F2";
    }
    else if(navno === 4)
    {
      m.style.backgroundColor = "white";
      m.style.color = "#0437F2";
    }
    else if(navno === 5)
    {
      pi.style.backgroundColor = "white";
      pi.style.color = "#0437F2";
    }
    else
    {
      s.style.backgroundColor = "white";
      s.style.color = "#0437F2";
    }
  }

  function OverviewClicked()
  {
    if(isnavcloed)
    {
      o.style.color = "#0437F2";
      c.style.color = "#A9A9A9";
      p.style.color = "#A9A9A9";
      m.style.color = "#A9A9A9";
      pi.style.color = "#A9A9A9";
      s.style.color = "#A9A9A9";
    }
    else
    {
      o.style.color = "white";
      o.style.backgroundColor = "#0437F2";
      c.style.color = "black";
      c.style.backgroundColor = "white";
      p.style.color = "black";
      p.style.backgroundColor = "white";
      m.style.color = "black";
      m.style.backgroundColor = "white";
      pi.style.color = "black";
      pi.style.backgroundColor = "white";
      s.style.color = "black";
      s.style.backgroundColor = "white";
    }
    ob.style.display = "flex";
    cb.style.display = "none";
    pb.style.display = "none";
    mb.style.display = "none";
    pib.style.display = "none";
    sb.style.display = "none";
    navno = 1;
  }

  function CalanderClicked()
  {
    if(isnavcloed)
    {
      o.style.color = "#A9A9A9";
      c.style.color = "#0437F2";
      p.style.color = "#A9A9A9";
      m.style.color = "#A9A9A9";
      pi.style.color = "#A9A9A9";
      s.style.color = "#A9A9A9";
    }
    else
    {
      o.style.color = "black";
      o.style.backgroundColor = "white";
      c.style.color = "white";
      c.style.backgroundColor = "#0437F2";
      p.style.color = "black";
      p.style.backgroundColor = "white";
      m.style.color = "black";
      m.style.backgroundColor = "white";
      pi.style.color = "black";
      pi.style.backgroundColor = "white";
      s.style.color = "black";
      s.style.backgroundColor = "white";
    }
    ob.style.display = "none";
    cb.style.display = "flex";
    pb.style.display = "none";
    mb.style.display = "none";
    pib.style.display = "none";
    sb.style.display = "none";
    navno = 2;
  }

  function PatientClicked()
  {
    if(isnavcloed)
    {
      o.style.color = "#A9A9A9";
      c.style.color = "#A9A9A9";
      p.style.color = "#0437F2";
      m.style.color = "#A9A9A9";
      pi.style.color = "#A9A9A9";
      s.style.color = "#A9A9A9";
    }
    else
    {
      o.style.color = "black";
      o.style.backgroundColor = "white";
      c.style.color = "black";
      c.style.backgroundColor = "white";
      p.style.color = "white";
      p.style.backgroundColor = "#0437F2";
      m.style.color = "black";
      m.style.backgroundColor = "white";
      pi.style.color = "black";
      pi.style.backgroundColor = "white";
      s.style.color = "black";
      s.style.backgroundColor = "white";
    }
    ob.style.display = "none";
    cb.style.display = "none";
    pb.style.display = "flex";
    mb.style.display = "none";
    pib.style.display = "none";
    sb.style.display = "none";
    navno = 3;
  }

  function MessageClicked()
  {
    if(isnavcloed)
    {
      o.style.color = "#A9A9A9";
      c.style.color = "#A9A9A9";
      p.style.color = "#A9A9A9";
      m.style.color = "#0437F2";
      pi.style.color = "#A9A9A9";
      s.style.color = "#A9A9A9";
    }
    else
    {
      o.style.color = "black";
      o.style.backgroundColor = "white";
      c.style.color = "black";
      c.style.backgroundColor = "white";
      p.style.color = "black";
      p.style.backgroundColor = "white";
      m.style.color = "white";
      m.style.backgroundColor = "#0437F2";
      pi.style.color = "black";
      pi.style.backgroundColor = "white";
      s.style.color = "black";
      s.style.backgroundColor = "white";
    }
    ob.style.display = "none";
    cb.style.display = "none";
    pb.style.display = "none";
    mb.style.display = "flex";
    pib.style.display = "none";
    sb.style.display = "none";
    navno = 4;
  }

  function PaymentInfoClicked()
  {
    if(isnavcloed)
    {
      o.style.color = "#A9A9A9";
      c.style.color = "#A9A9A9";
      p.style.color = "#A9A9A9";
      m.style.color = "#A9A9A9";
      pi.style.color = "#0437F2";
      s.style.color = "#A9A9A9";
    }
    else
    {
      o.style.color = "black";
      o.style.backgroundColor = "white";
      c.style.color = "black";
      c.style.backgroundColor = "white";
      p.style.color = "black";
      p.style.backgroundColor = "white";
      m.style.color = "black";
      m.style.backgroundColor = "white";
      pi.style.color = "white";
      pi.style.backgroundColor = "#0437F2";
      s.style.color = "black";
      s.style.backgroundColor = "white";
    }
    ob.style.display = "none";
    cb.style.display = "none";
    pb.style.display = "none";
    mb.style.display = "none";
    pib.style.display = "flex";
    sb.style.display = "none";
    navno = 5;
  }

  function SettingClicked()
  {
    if(isnavcloed)
    {
      o.style.color = "#A9A9A9";
      c.style.color = "#A9A9A9";
      p.style.color = "#A9A9A9";
      m.style.color = "#A9A9A9";
      pi.style.color = "#A9A9A9";
      s.style.color = "#0437F2";
    }
    else
    {
      o.style.color = "black";
      o.style.backgroundColor = "white";
      c.style.color = "black";
      c.style.backgroundColor = "white";
      p.style.color = "black";
      p.style.backgroundColor = "white";
      m.style.color = "black";
      m.style.backgroundColor = "white";
      pi.style.color = "black";
      pi.style.backgroundColor = "white";
      s.style.color = "white";
      s.style.backgroundColor = "#0437F2";
    }
    ob.style.display = "none";
    cb.style.display = "none";
    pb.style.display = "none";
    mb.style.display = "none";
    pib.style.display = "none";
    sb.style.display = "flex";
    navno = 6;
  }

  return (
    <div className="App">
      <div className="Navigator" id='Navigatorid'>
        <div className="Navheader1" id='Navheader1id'>
          <div className="Nhb1">
            <FontAwesomeIcon icon={faTooth} className='tooth'/>
          </div>
          <div className="Nhb2">
            <div className="Nhb2b1">Zendenta</div>
            <div className="Nhb2b2">cabut gigi tanpa sakit</div>
          </div>
          <div className="Nhb3">
            <FontAwesomeIcon icon={faBars} className='bar' onClick={sidebarclose}/>
          </div>
        </div>
        <div className="Navheader2" id='Navheader2id'>
          <FontAwesomeIcon icon={faBars} className='bar2' onClick={sidebaropen}/>
        </div>
        <div className="Navcontainer2" id='Navcontainer2id'>
          <div className="Navconb1" id='Navconb1' onClick={OverviewClicked}><FontAwesomeIcon icon={faEye} className="Navicons" id='Naviconsid1'/><div className='Navheading' id='Navheading1'>Overview</div></div>
          <div className="Navconb2" id='Navconb2' onClick={CalanderClicked}><FontAwesomeIcon icon={faCalendar} className="Navicons" id='Naviconsid2'/><div className='Navheading' id='Navheading2'>Calender</div></div>
          <div className="Navconb3" id='Navconb3' onClick={PatientClicked}><FontAwesomeIcon icon={faUser} className="Navicons" id='Naviconsid3'/><div className='Navheading' id='Navheading3'>Patient List</div></div>
          <div className="Navconb4" id='Navconb4' onClick={MessageClicked}><FontAwesomeIcon icon={faMessage} className="Navicons" id='Naviconsid4'/><div className='Navheading' id='Navheading4'>Messages</div></div>
          <div className="Navconb5" id='Navconb5' onClick={PaymentInfoClicked}><FontAwesomeIcon icon={faMoneyCheckDollar} className="Navicons" id='Naviconsid5'/><div className='Navheading' id='Navheading5'>Payment Information</div></div>
          <div className="Navconb6" id='Navconb6' onClick={SettingClicked}><FontAwesomeIcon icon={faGear} className="Navicons" id='Naviconsid6'/><div className='Navheading' id='Navheading6'>Settings</div></div>
        </div>
        <div className="Navhelpdoc">
          <div className="Navhelpdoc1"><FontAwesomeIcon icon={faCircleInfo} className="helpicon"/><div className="help" id='helpid'>Help ?</div></div>
          <div className="Navhelpdoc2">
            <div className="Navhelpdoc21" id='Navhelpdoc21id'><div></div></div>
            <div className="Navhelpdoc22" id='Navhelpdoc22id'>
              <div className="Navhelpdoc221">{docname}</div>
              <div className="Navhelpdoc222">{docspecification}</div>
            </div>
            <div className="Navhelpdoc23" id='Navhelpdoc23id'>
              <FontAwesomeIcon icon={faAngleDown} className="downicon"/>
            </div>
          </div>
        </div>
      </div>
      <div className="MainContainer" id='MainContainerid'>
        <div className="Overview" id='Overviewid'>Overview</div>
        <div className="Calander" id='Calanderid'>Calander</div>
        <div className="PatientList" id='PatientListid'>
          <div className="PatientListr1">
            <div className="PatientListr1b1"><FontAwesomeIcon icon={faUser} className="patientuser"/></div>
            <div className="PatientListr1b2">{patientname}</div>
            <div className="PatientListr1b3">
              <div>
                <div className="searchicon"><FontAwesomeIcon icon={faMagnifyingGlass} className="search"/></div>
                <div>
                  <input type={Text} placeholder="   Search"></input>
                </div>
              </div>
            </div>
            <div className="PatientListr1b4"><div><FontAwesomeIcon icon={faPlus} className="plus"/></div></div>
            <div className="PatientListr1b5"><div><FontAwesomeIcon icon={faBell} className="bell"/></div></div>
          </div>
          <div className="PatientListr2">
            <div className="PatientListr2b1">Patient List</div>
            <div className="PatientListr2b2"><FontAwesomeIcon icon={faAngleRight} className="right"/></div>
            <div className="PatientListr2b3">{patientname}</div>
            <div className="PatientListr2b4"><div><FontAwesomeIcon icon={faPrint} className="print"/></div></div>
            <div className="PatientListr2b5">
              <div>
                <div><FontAwesomeIcon icon={faPenToSquare} className="edit"/></div>
                <div className="editcon">Edit Patient</div>
              </div>
            </div>
          </div>
          <div className="PatientListr3">
            <div className="PatientListr31">
              <div className="PatientListr311">
                <div className="PatientListr3111">
                  <div className="PatientListr31111">
                    <div></div>
                  </div>
                  <div className="PatientListr31112">{patientname}</div>
                  <div className="PatientListr31113">{patientemail}</div>
                  <div className="PatientListr31114">
                    <div className="PatientListr311141">
                      <div className="PatientListr3111411">{patientpast}</div>
                      <div className="PatientListr3111412">Past</div>
                    </div>
                    <div className="PatientListr311142">
                      <div className="PatientListr3111421">{patientupcoming}</div>
                      <div className="PatientListr3111422">Upcoming</div>
                    </div>
                  </div>
                  <div className="PatientListr31115">
                    <div>Send Message</div>
                  </div>
                </div>
                <div className="PatientListr3112">
                  <div className="PatientListr31121">
                    <div className="PatientListr311211">
                      <div className="PatientListr3112111">Gender</div>
                      <div className="PatientListr3112112">Birthday</div>
                      <div className="PatientListr3112113">Phone Number</div>
                    </div>
                    <div className="PatientListr311212">
                      <div className="PatientListr3112121">{patientgender}</div>
                      <div className="PatientListr3112122">{patientbirthday}</div>
                      <div className="PatientListr3112123">{patientphoneno}</div>
                    </div>
                  </div>
                  <div className="PatientListr31122">
                    <div className="PatientListr311211">
                      <div className="PatientListr3112111">Street Address</div>
                      <div className="PatientListr3112112">City</div>
                      <div className="PatientListr3112113">Zip Code</div>
                    </div>
                    <div className="PatientListr311212">
                      <div className="PatientListr3112121">{patientadd}</div>
                      <div className="PatientListr3112122">Cliacap</div>
                      <div className="PatientListr3112123">{patientcode}</div>
                    </div>
                  </div>
                  <div className="PatientListr31123">
                  <div className="PatientListr311211">
                      <div className="PatientListr3112111">Member Status</div>
                      <div className="PatientListr3112112">Registered Date</div>
                      <div className="PatientListr3112113"></div>
                    </div>
                    <div className="PatientListr311212">
                      <div className="PatientListr3112121">{patientstatus}</div>
                      <div className="PatientListr3112122">{patientregdate}</div>
                      <div className="PatientListr3112123"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="PatientListr312">
                <div className="PatientListr3121">
                  <div>
                    <div className="PatientListr31211" id='upapp' onClick={UpcomingappointmentClicked}>Upcoming Appointments</div>
                    <div className="PatientListr31212" id='pasapp' onClick={PastappointmentClicked}>Past Appointments</div>
                    <div className="PatientListr31213" id='medrec' onClick={MedicalRecordsClicked}>Medical Records</div>
                  </div>
                </div>
                <div className="PatientListr3122">
                  <div className="PatientListr31221" id='upappcon'>
                    <div className="PatientListr312211" >
                      <div className="PatientListr3122111">
                        <div className="PatientListr31221111">{uadate}</div>
                        <div className="PatientListr31221112">{uatime}</div>
                      </div>
                      <div className="PatientListr3122112">
                        <div className="PatientListr31221121">Treatment</div>
                        <div className="PatientListr31221122">{uadatreatment}</div>
                      </div>
                      <div className="PatientListr3122113">
                        <div className="PatientListr31221121">Dentist</div>
                        <div className="PatientListr31221122">{uadentist}</div>
                      </div>
                      <div className="PatientListr3122114">
                        <div className="PatientListr31221121">Nurse</div>
                        <div className="PatientListr31221122">{uanurse}</div>
                      </div>
                      <div className="PatientListr3122115">
                        <div className="PatientListr31221151"><FontAwesomeIcon icon={faNoteSticky} className="note"/></div>
                        <div className="PatientListr31221152">Note</div>
                      </div>
                    </div>
                  </div>
                  <div className="PatientListr31222" id='pasappcon'>
                    <div className="PatientListr312211" >
                      <div className="PatientListr3122111">
                        <div className="PatientListr31221111">{padate}</div>
                        <div className="PatientListr31221112">{patime}</div>
                      </div>
                      <div className="PatientListr3122112">
                        <div className="PatientListr31221121">Treatment</div>
                        <div className="PatientListr31221122">{padatreatment}</div>
                      </div>
                      <div className="PatientListr3122113">
                        <div className="PatientListr31221121">Dentist</div>
                        <div className="PatientListr31221122">{padentist}</div>
                      </div>
                      <div className="PatientListr3122114">
                        <div className="PatientListr31221121">Nurse</div>
                        <div className="PatientListr31221122">{panurse}</div>
                      </div>
                      <div className="PatientListr3122115">
                        <div className="PatientListr31221151"><FontAwesomeIcon icon={faNoteSticky} className="note"/></div>
                        <div className="PatientListr31221152">Note</div>
                      </div>
                    </div>
                  </div>
                  <div className="PatientListr31223" id='medreccon'>
                    <div className="PatientListr312231">
                      <div className="PatientListr3122311">Status</div>
                      <div className="PatientListr3122312">{medicalrecstatus}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="PatientListr32">
              <div className="PatientListr321">
                <div className="PatientListr3211">
                  <div className="PatientListr3211h1">Notes</div>
                  <div className="PatientListr3211h2">See all</div>
                </div>
                <div className="PatientListr3212">
                  <textarea id='textarea'>
                    Notes
                    Notes
                    Notes
                  </textarea>
                  <div>
                    <div className="savebt" id="savebt" onClick={Savebt}>Edit</div>
                  </div>
                </div>
                <div className="PatientListr3213">
                  <div className="PatientListr32131">Lorem ipsum dolor sit amet</div>
                  <div className="PatientListr32132">
                    <div className="PatientListr321321"><FontAwesomeIcon icon={faUser} className="noteuser"/></div>
                    <div className="PatientListr321322">Drg. Mega Nanade</div>
                    <div className="PatientListr321323">20 Nov '19</div>
                  </div>
                </div>
              </div>
              <div className="PatientListr322">
                <div className="PatientListr3221">
                  <div className="PatientListr32211">Files / Documents</div>
                  <div className="PatientListr32212"><FontAwesomeIcon icon={faFileCirclePlus} className="file"/></div>
                  <div className="PatientListr32213">Add Files</div>
                </div>
                <div className="PatientListr3222">
                  <div className="PatientListr32221">
                    <div className="PatientListr322211"><FontAwesomeIcon icon={faFile} className="doc"/></div>
                    <div className="PatientListr322212">csdcsd sdvcsdfv  sdcsd</div>
                    <div className="PatientListr322211"><FontAwesomeIcon icon={faDownload} className="doc"/></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Messages" id='Messagesid'>Messages</div>
        <div className="PaymentInformation" id='PaymentInformationid'>Payment Information</div>
        <div className="Settings" id='Settingsid'>Settings</div>
      </div>
    </div>
  );
}

export default App;
