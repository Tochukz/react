import PersonalInfo1 from './forms/PersonInfo1';
import PersonalInfo2 from './forms/PersonInfo2';
import PersonalInfo3 from './forms/PersonInfo3';

export default function Register() {

  return (
    <div className='row'>
       <div className="col-sm-4">
         <PersonalInfo1 />
       </div>
       <div className="col-sm-4">
         <PersonalInfo2 />
       </div>
       <div className="col-sm-4">
         <PersonalInfo3 />
       </div>
    </div>
  );
}