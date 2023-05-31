import { useState } from "react";
import { connect } from "react-redux";
import { Dispatch, RootState } from "../store/store";
import { users } from "../data/users";
import { ProfessionalInfo } from "../models/professional-info";


function ProfessionalInformation(props: any) {
  const [fetching, setFetching] = useState(false);
  const [next, setNext] = useState(0);

  const getNext = () => {
    setNext(nx => {
      if(nx >= users.length) {
        return 1;
      }
      return nx + 1;
    });

    setFetching(true);
    props.getProfessionalInfo(next || 1)
         .then((response: ProfessionalInfo) => {
           console.log('response: ', response);
           setFetching(false);
         });
  }

  return (
    <div className="col-sm-6">
      <h3>Professional Info</h3>
      <p>{ fetching ? 'Fetching user info...' : '--'}</p>
      <p>
        <strong>User Id:</strong> { props.professionalInfo?.userId }
      </p>
      <p>
        <strong>Profession:</strong> { props.professionalInfo?.profession }
      </p>    
      <p>
        <strong>Industry:</strong> { props.professionalInfo?.industry }
      </p>   
      <button onClick={getNext} className="btn btn-primary">Next Information</button>
    </div>
  )
}

const mapState = (state: RootState) => ({
  professionalInfo: state.user.professionalInfo,
});

const mapDispatch = (dispatch: Dispatch) => ({
  getProfessionalInfo: dispatch.user.getProfessionalInfo
});

export default connect(mapState, mapDispatch)(ProfessionalInformation) 